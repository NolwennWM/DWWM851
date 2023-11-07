export default class SuperBalise extends HTMLElement
{
    constructor()
    {
        super();
        this.info = document.createElement("div");
        this.info.textContent = this.getAttribute("text")|| "rien à dire";
        this.append(this.info);
        this.initStyle();
        this.addEventListener("mouseenter", this.toggle);
        this.addEventListener("mouseleave", this.toggle);
    }
    initStyle()
    {
        const tagStyle = this.style;
        tagStyle.fontWeight = 900;
        tagStyle.color = "red";
        tagStyle.position = "relative";

        const divStyle = this.info.style;
        divStyle.position = "absolute";
        divStyle.bottom = "-2rem";
        divStyle.right = "-1rem";
        divStyle.border = "2px solid blue";
        divStyle.borderRadius = "5px";
        divStyle.backgroundColor = "rgba(0,0,255, 0.7)";
        divStyle.color = "yellow";
        divStyle.display = "none";
    }
    toggle()
    {
        if(this.info.style.display === "none")
            this.info.style.display = "";
        else
            this.info.style.display = "none";
    }
}
customElements.define("super-balise", SuperBalise);