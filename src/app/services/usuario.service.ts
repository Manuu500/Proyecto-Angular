import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public findById(id: number): Observable<Usuario> {

    let url = `http://localhost:8080/chocobollo/findById/${id}`;
    return this.http.get<Usuario>(url);
  }
/**
 * Allow users to login in the page
 * @param email
 * @param password
 * @returns
 */
  public authUserLogin(email: string, password: string) {
    let u = {
      email: email,
      password: password
    }

    let url = "http://localhost:8080/chocobollo/autentifyUser"

  }
/**
 * Allow users to register in the page
 * @param u
 * @returns
 */
  public insertUser(usu: Usuario) {
    let user = {
      nombreUsu: usu.nombre,
      apellUsu: usu.apellido,
      idBollo: usu.id_bollo,
      email: usu.email,
      contraseña: usu.contraseña
    }

    let url = "http://localhost:8080/chocobollo/insertUser"
  }

}
