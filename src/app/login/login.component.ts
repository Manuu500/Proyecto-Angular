import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from "../model/login";
import { MatCard } from '@angular/material/card';
import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private router: Router;
  email: string = '';
  password: string = '';
  private user!: UsuarioService;
  error!: string;


  constructor(private routerp: Router, private formBuilder: FormBuilder, private cn: UsuarioService) {
    this.router = routerp;
  }

  //This method makes the program go back to the main page
  volver() {
    this.router.navigate(['']);
  }

  //This method makes the possibility to log the user into the page
  // login() {
  //   if (this.email == '' || this.password == '') {
  //     this.error = 'No debes dejar ningún campo vacío';
  //   } else {
  //     this.cn
  //       .authUserLogin(this.email, this.password)
  //       .subscribe(() => {
  //         var response: Answer = result;
  //         console.log(response.result);
  //         if (response.result == 'success') {
  //           const token = result.tokken;
  //           this.cookieService.set('jwt', token, 7);
  //           window.location.reload();
  //         } else {
  //           this.error = response.result;
  //         }
  //       });
  //   }
  // }
}
