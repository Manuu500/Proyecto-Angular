import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chocobollo } from '../model/chocobollo';
import { Observable } from 'rxjs';
import { Ingrediente } from '../model/ingrediente';
import { DTO } from '../DTO';
import { Usuario } from '../model/usuario';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
};

@Injectable({
  providedIn: 'root'
})




export class AppServiceService {


  private apiUrl="http://localhost:8080/chocobollo/insertarbolloJSON";
  private url="";

  constructor(private http:HttpClient) { }

  //This method connects the angular framework (front) with the bootstrap (back) in order to list all the chocobollos of the database
  listarChocobollo(): Observable<Chocobollo[]> {
    this.url = `http://localhost:8080/chocobollo/listarbollos`;
    return this.http.get<Chocobollo[]>(this.url);
  }

  listarIngrediente(): Observable<Ingrediente[]>{
    this.url=`http://localhost:8080/ingrediente/listingredientes`;
     return this.http.get<Ingrediente[]>(this.url);
  }

  //This method connects the angular framework with bootstrap in order to update the selected chocobollo.
  updateBollo(chocobollo: Chocobollo): Observable<Chocobollo> {
    this.url = `http://localhost:8080/chocobollo/editbollos/${chocobollo.id}`;
    return this.http.put<Chocobollo>(this.url, chocobollo, httpOptions);
  }

  //This method deletes the bollo asociated with the selected id, and deletes it
  borrarBollo(id: number): Observable<HttpResponse<any>> {
    const url = `http://localhost:8080/chocobollo/deletebollo/${id}`;
    return this.http.delete<HttpResponse<any>>(url, httpOptions);
  }

  insertBollo(chocobollo: Chocobollo): Observable<Chocobollo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Chocobollo>(this.apiUrl, chocobollo, httpOptions);
  }

  insertUsuario(usuario: Usuario): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Usuario>("http://localhost:8080/usuario/insertarusuarioJSON", usuario, httpOptions);
  }

  getNextBolloId(): Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<number>('http://localhost:8080/chocobollo/getBolloID', { headers });
  }
}
