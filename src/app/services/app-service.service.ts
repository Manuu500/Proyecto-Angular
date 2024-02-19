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

  listarChocobollo(): Observable<Chocobollo[]>{
    this.url=`http://localhost:8080/chocobollo/listarbollos`;
     return this.http.get<Chocobollo[]>(this.url);
   }


   updateBollo(chocobollo: Chocobollo): Observable<Chocobollo> {
    this.url = `http://localhost:8080/chocobollo/editbollos/${chocobollo.id}`;
    return this.http.put<Chocobollo>(this.url, chocobollo, httpOptions);
  }

  borrarBollo(id: number): Observable<HttpResponse<any>> {
    const url = `http://localhost:8080/chocobollo/deletebollo/${id}`;
    return this.http.delete<HttpResponse<any>>(url, httpOptions);
  }

  insertBollo(chocobollo:Chocobollo): Observable<Chocobollo> {
    const url = `http://localhost:8080/chocobollo/insertarbollo/${chocobollo.nombre}/${chocobollo.tipo}`;
    return this.http.post<Chocobollo>(url, httpOptions);
  }

}
