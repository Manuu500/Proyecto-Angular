import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chocobollo } from '../model/chocobollo';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
};

@Injectable({
  providedIn: 'root'
})




export class AppServiceService {

  private url="";

  constructor(private http:HttpClient) { }

  //This method connects the angular framework (front) with the bootstrap (back) in order to list all the chocobollos of the database
  listarChocobollo(): Observable<Chocobollo[]>{
    this.url=`http://localhost:8080/chocobollo/listarbollos`;
     return this.http.get<Chocobollo[]>(this.url);
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

  insertBollo(chocobollo:Chocobollo): Observable<Chocobollo> {
    const url = `http://localhost:8080/chocobollo/insertarbollo/${chocobollo.nombre}/${chocobollo.tipo}`;
    return this.http.post<Chocobollo>(url, httpOptions);
  }

}
