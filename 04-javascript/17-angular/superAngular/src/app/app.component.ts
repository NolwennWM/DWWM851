import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Recette } from './Recette';
import { RECETTES } from './RecetteList';
import { BorderCardDirective } from './border-card.directive';
import { TypeColorPipe } from './type-color.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BorderCardDirective, TypeColorPipe],
  templateUrl: './app.component.html',
  // template: "<p></p>",
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'superAngular';
  recetteList: Recette[] = RECETTES;
  recetteSelected: Recette|undefined;

  ngOnInit(): void 
  {
    console.table(this.recetteList);
    // this.selectRecette(this.recetteList[1]);
  }
  selectRecette(recetteId: string): void
  {
    const index: number = parseInt(recetteId);
    const recette: Recette|undefined = this.recetteList.find(rec=>rec.id === index);
    
    if(recette)
    {
      console.log(`Vous avez selectionné ${recette.name}`);   
    }
    else
    {
      console.log("Aucune recette selectionné");      
    }
    this.recetteSelected = recette;
  }
}
