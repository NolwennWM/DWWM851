import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recette } from './../Recette';
import { RECETTES } from './../RecetteList';
import { BorderCardDirective } from './../border-card.directive';
import { TypeColorPipe } from './../type-color.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-recette',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, TypeColorPipe],
  templateUrl: './liste-recette.component.html',
  styleUrl: './liste-recette.component.css'
})
export class ListeRecetteComponent implements OnInit{
  recetteList: Recette[] = RECETTES;
  recetteSelected: Recette|undefined;

  constructor(private router: Router){}

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
  goToRecette(recette:Recette)
  {
    this.router.navigate(["/recette", recette.id]);
  }
}
