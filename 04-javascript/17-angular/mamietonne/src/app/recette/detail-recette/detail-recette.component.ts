import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.scss']
})
export class DetailRecetteComponent implements OnInit {
  recette?: Recette;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private recetteService: RecetteService) { }

  ngOnInit(): void {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    this.recetteService.getRecetteById(recetteId).subscribe(recette=> this.recette = recette);
  }
  goToRecetteList(): void{
    this.router.navigate(["/recettes"]);
  }
  goToEditRecette(): void{
    this.router.navigate(["recette/edit", this.recette?.id]);
  }
  deleteRecette(): void{
    if(!this.recette)return;
    this.recetteService.deleteRecetteById(this.recette.id).subscribe(
      ()=> this.goToRecetteList()
      );
  }
}
