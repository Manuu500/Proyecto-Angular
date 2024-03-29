import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalConfirmacionComponent } from './modalconfirmacion/modalconfirmacion.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ModalRegistroComponent } from './modal-registro/modal-registro.component';


const appRoutes:Routes=[
  {path:'register',component:RegisterComponent},
  {path:'',component:IndexComponent},
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id/:nombre/:tipo', component:EditComponent},
  {path:'reserve',component:ReserveComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    IndexComponent,
    ListComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    ModalConfirmacionComponent,
    ReserveComponent,
    ModalRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
