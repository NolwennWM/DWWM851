"use strict";

let painting = false;
let filling = false;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
let size = 5;
let color = "#000000";
let lastAction = [];
let undoList = [];
let redoList = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
    undoList.push(lastAction);
    lastAction = [];
}

function draw(e) {
    if (!painting || filling) return;
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    let mouse = getMousePos(e);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    lastAction.push({
        x: mouse.x,
        y: mouse.y,
        color: color,
        size: size
    });
}

function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function redraw(tab) {
    tab.forEach(action => {
        ctx.beginPath();
        action.forEach(move => {
            ctx.strokeStyle = move.color;
            ctx.lineWidth = move.size;
            ctx.lineTo(move.x, move.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(move.x, move.y);
        });
    });
    ctx.beginPath();
}

function keyboard(e) {
    e.preventDefault();
    switch (e.key) {
        case "s":
            save();
            break;
        case "l":
            load();
            break;
        case "c":
            chooseColor();
            break;
        case "z":
            undo();
            break;
        case "y":
            redo();
            break;
        case "+":
            size++;
            console.log(size);
            break;
        case "-":
            size = size <= 1 ? 1 : size - 1;
            console.log(size);
            break;
        case "f":
            filling = !filling;
            break;
    }
}

function load() {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();
    input.oninput = function (e) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let img = new Image();
            img.onload = function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
}

function save() {
    let png = canvas.toDataURL("image/png");
    png = png.replace("image/png", "application/octet-stream");
    let link = document.createElement("a");
    link.setAttribute("download", "SauvegardeCanvas.png");
    link.setAttribute("href", png);
    link.click();
}

function chooseColor() {
    let input = document.createElement("input");
    input.setAttribute("type", "color");
    input.click();
    input.oninput = function (e) {
        color = e.target.value;
    }
}

function undo() {
    if (!undoList.length) return;
    let undoneAction = undoList.pop();
    redoList.push(undoneAction);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redraw(undoList);
}

function redo() {
    if (!redoList.length) return;
    let redoneAction = redoList.pop();
    undoList.push(redoneAction);
    redraw([redoneAction]);
}

function floodFill(x, y, targetColor, fillColor) {
    console.log(fillColor);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const visited = new Array(canvas.width * canvas.height).fill(false);
    const stack = [{ x, y }];
    const color = [];

    const pixelPos = (y * canvas.width + x) * 4;
    // console.log(imageData.data);
    const rgbaTargetColor = [
        imageData.data[pixelPos],
        imageData.data[pixelPos + 1],
        imageData.data[pixelPos + 2],
        imageData.data[pixelPos + 3]
    ];
    convertColor();
    console.log(color);
    function convertColor()
    {
        color.push(parseInt(fillColor[1]+fillColor[2],16));
        color.push(parseInt(fillColor[3]+fillColor[4],16));
        color.push(parseInt(fillColor[5]+fillColor[6],16));
        color.push(255);
    }
    function isSameColor(pixelPos) {
        for (let i = 0; i < 4; i++) {
            if (rgbaTargetColor[i] !== imageData.data[pixelPos + i]) {
                return false;
            }
        }
        return true;
    }

    function setPixelColor(pixelPos) {
        for (let i = 0; i < 4; i++) {
            // console.log(fillColor[i]);
            imageData.data[pixelPos + i] = color[i];
        }
    }

    function getPixelPos(x, y) {
        return (y * canvas.width + x) * 4;
    }

    while (stack.length > 0) {
        // console.log(stack);
        const { x, y } = stack.pop();

        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
            continue;
        }

        const pixelPos = getPixelPos(x, y);

        if (visited[pixelPos] || !isSameColor(pixelPos)) {
            continue;
        }

        visited[pixelPos] = true;
        setPixelColor(pixelPos);

        stack.push({ x: x + 1, y });
        stack.push({ x: x - 1, y });
        stack.push({ x, y: y + 1 });
        stack.push({ x, y: y - 1 });
    }

    ctx.putImageData(imageData, 0, 0);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("click", function (e) {
    if (filling) {
        const mouse = getMousePos(e);
        const targetColorData = ctx.getImageData(mouse.x, mouse.y, 1, 1).data;

        floodFill(mouse.x, mouse.y, targetColorData, color);
    }
});

document.addEventListener("keypress", keyboard);