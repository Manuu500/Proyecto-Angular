import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/chocobollo';

  constructor(private http: HttpClient) {}

  obtenerBollos(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/listarbollos`);
  }
}
