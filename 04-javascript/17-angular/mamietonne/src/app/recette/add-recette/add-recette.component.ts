import { Component, OnInit } from '@angular/core';
import { Recette } from '../Recette';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent implements OnInit {

  recette?: Recette;
  ngOnInit(): void {
    this.recette = this.newRecette();
  }
  newRecette(): Recette{
    return {
      id: undefined,
      name: "",
      type: "Plat",
      image: "",
      description: "",
      duration: 0,
      steps: [],
      ingredients: [],
      createdAt: new Date()
    }
  }
}
