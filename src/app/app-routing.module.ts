import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComprasComponent } from './compras/compras.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'main', component:MainComponent},
  {path:'cart', component:CartComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'compra', component:ComprasComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
