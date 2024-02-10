import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
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

  private apiUrl="http://localhost:8080/chocobollo/listarbollos";
  private url="";

  constructor(private http:HttpClient) { }

  listarChocobollo(): Observable<Chocobollo[]>{
    this.url=`${this.apiUrl}`;
     return this.http.get<Chocobollo[]>(this.url);
   }
}
