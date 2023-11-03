"use strict";

const jeu = {
    create()
    {
        const container = document.createElement("div");
        const input = document.createElement("input");
        input.setAttribute("type", "number");

        const p = document.createElement("p");
        p.innerHTML = "Choisi un nombre 0 et 50";

        const btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.value = "Jouer";

        this.input = input;
        this.p = p;
        this.btn = btn;

        container.append(input, p, btn);
        this.event();
        return container;        
    },
    nbrEssai : 0,
    nbrEssaiMax : 7,
    prix: Math.floor(Math.random()*50),

    event()
    {
        const message = this.p;
        this.btn.addEventListener("click", ()=>{
            if(this.input.value > 50)
            {
                message.textContent = "Veuillez entrer un nombre entre 1 et 50";
            }
            else if (this.input.value < this.prix)
            {
                message.textContent = "C'est plus !";
            }
            else if (this.input.value > this.prix)
            {
                message.textContent ="C'est moins !";
            }
            else
            {
                message.textContent = "Bravo vous avez trouvé le bon NOMBRE !";
                return;
            }
            this.nbrEssai++;
            if(this.nbrEssai >= this.nbrEssaiMax)
            {
                message.textContent = `Désolé vous avez épuisé vos ${this.nbrEssai}. Le nombre d'essai était ${this.prix}`;
                this.input.setAttribute("disabled", true);
            }
        })
    },
    set essai(x)
    {
        if(typeof x != "number" || x< 1)
        {
            alert("Le nombre d'essai doit être un nombre supperieur à 0 !");
            return;
        }
        this.nbrEssaiMax = x;
    }
}
export default jeu;