import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Recette, Types } from './Recette';

@Injectable()
export class RecetteService {

  constructor(private http: HttpClient){}

  getRecetteList():Observable<Recette[]>{
    return this.http.get<Recette[]>("api/recettes").pipe(
      tap(response=>this.log(response)),
      catchError(err=>this.handleError(err, []))
    );
  }
  getRecetteById(recetteId: number):Observable<Recette|undefined>{
    return this.http.get<Recette>(`api/recettes/${recetteId}`).pipe(
      tap(response=>this.log(response)),
      catchError(err=>this.handleError(err, undefined))
    );
  }
  getRecetteTypeList():string[]{
    return Object.values(Types);
    // return ["dessert", "plat", "entrée"]
  }
  getTypeByValue(value: string): string {
    // TODO ajouter au cours.
    const indexOfS = Object.values(Types).indexOf(value as Types);
    const key = Object.keys(Types)[indexOfS];
    return key;
  }
  updateRecette(recette: Recette): Observable<null>{
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.put('api/recettes', recette, options).pipe(
      tap(response=>this.log(response)),
      catchError(err=>this.handleError(err, undefined))
    );
  }
  deleteRecetteById(recetteId?: number): Observable<null>{
    return this.http.delete(`api/recettes/${recetteId}`).pipe(
      tap(response=>this.log(response)),
      catchError(err=>this.handleError(err, undefined)))
  }
  addRecette(recette: Recette): Observable<Recette>{
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post<Recette>('api/recettes', recette, options).pipe(
      tap(response=>this.log(response)),
      catchError(err=>this.handleError(err, undefined))
    );
  }
  private log(response: any){ 
    console.table(response)
  }
  private handleError(error: Error, response: any){ 
    console.error(error); 
    return of(response) 
  }
}
