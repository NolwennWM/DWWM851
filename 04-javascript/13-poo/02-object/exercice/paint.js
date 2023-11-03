"use strict";

const Paint = {
    painting: false,
    filling : false,
    canvas: document.createElement("canvas"),
    ctx: null, 
    size: 5,
    color: "#000000",
    lastAction: [],
    undoList: [],
    redoList: [],
    init()
    {
        const canvas = this.canvas;
        this.ctx = canvas.getContext("2d");
        window.addEventListener("resize", this.resize.bind(this));

        canvas.addEventListener("mousedown", this.startPosition.bind(this));
        canvas.addEventListener("mouseup", this.endPosition.bind(this));
        canvas.addEventListener("mousemove", this.draw.bind(this));
        canvas.addEventListener("click",  (e)=> {
            console.log(this);
            if (this.filling) {
                const mouse = this.getMousePos(e);
                const targetColorData = this.ctx.getImageData(mouse.x, mouse.y, 1, 1).data;

                this.floodFill(mouse.x, mouse.y, targetColorData, this.color);
            }
        });

        document.addEventListener("keypress", this.keyboard.bind(this));
        return this.canvas;
    },
    resize() 
    {
        const canvas = this.canvas;
        const size = canvas.parentElement.getBoundingClientRect();
        canvas.width = size.width;
        canvas.height = size.height;
    },
    startPosition(e) {
        console.log(this);
        this.painting = true;
        this.draw(e);
    },
    endPosition() {
        this.painting = false;
        this.ctx.beginPath();
        this.undoList.push(this.lastAction);
        this.lastAction = [];
    },
    draw(e) {
        if (!this.painting || this.filling) return;
        const ctx = this.ctx;
        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;
        ctx.lineCap = "round";
        let mouse = this.getMousePos(e);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        this.lastAction.push({
            x: mouse.x,
            y: mouse.y,
            color: this.color,
            size: this.size
        });
    },
    getMousePos(evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
    redraw(tab) {
        const ctx = this.ctx;
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
    },
    keyboard(e) {
        e.preventDefault();
        switch (e.key) {
            case "s":
                this.save();
                break;
            case "l":
                this.load();
                break;
            case "c":
                this.chooseColor();
                break;
            case "z":
                this.undo();
                break;
            case "y":
                this.redo();
                break;
            case "+":
                this.size++;
                console.log(this.size);
                break;
            case "-":
                this.size = this.size <= 1 ? 1 : this.size - 1;
                console.log(this.size);
                break;
            case "f":
                this.filling = !this.filling;
                break;
        }
    },
    load() {
        let input = document.createElement("input");
        input.setAttribute("type", "file");
        input.click();
        input.oninput = (e) => {
            let reader = new FileReader();
            reader.onload = (event) =>{
                let img = new Image();
                img.onload = () =>{
                    console.log(this);
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.drawImage(img, 0, 0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    },
    save() {
        let png = this.canvas.toDataURL("image/png");
        png = png.replace("image/png", "application/octet-stream");
        let link = document.createElement("a");
        link.setAttribute("download", "SauvegardeCanvas.png");
        link.setAttribute("href", png);
        link.click();
    },
    chooseColor() {
        let input = document.createElement("input");
        input.setAttribute("type", "color");
        input.click();
        
        input.oninput = (e) => {
            console.log(this);
            this.color = e.target.value;
        }
    },
    undo() {
        if (!this.undoList.length) return;
        let undoneAction = this.undoList.pop();
        this.redoList.push(undoneAction);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.redraw(this.undoList);
    },
    redo() {
        if (!this.redoList.length) return;
        let redoneAction = this.redoList.pop();
        this.undoList.push(redoneAction);
        this.redraw([redoneAction]);
    },
    floodFill(x, y, targetColor, fillColor) {
        console.log(fillColor);
        const canvas = this.canvas;
        const imageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
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
    
        this.ctx.putImageData(imageData, 0, 0);
    }
};
export default Paint;