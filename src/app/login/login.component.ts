import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from "../model/login";
import { MatCard } from '@angular/material/card';
import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private router: Router;
  username: string = "";
  password: string = "";
  private user!: UsuarioService;



  constructor(private routerp:Router, private formBuilder:FormBuilder) {
    this.router=routerp;

  }

  //This method makes the program go back to the main page
  volver(){
    this.router.navigate(['']);
  }

  //This method makes the possibility to log the user into the page
  // login(){
  //   if(this.username === "" || this.password === "" ){
  //     console.log("Hay algún campo vacío");
  //   } else {
  //     var usuarioLogueado: login;
  //     usuarioLogueado = {
  //       username: this.username,
  //       password: this.password,
  //   };

  //   let usuarioLogueado = this.connectService.loginUsuario(loggedUser);

  //   }
  // }
}
