import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.scss']
})
export class EditRecetteComponent implements OnInit {
  recette?: Recette;
  constructor(private route: ActivatedRoute, private recetteService: RecetteService) { }

  ngOnInit(): void {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    this.recetteService.getRecetteById(recetteId).subscribe(recette=> this.recette = recette);
  }

}
