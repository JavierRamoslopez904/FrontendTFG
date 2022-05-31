import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducer/cartReducer';
import { DetalleComponent } from './detalle/detalle.component';
import { BartoolComponent } from './bartool/bartool.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    PerfilComponent,
    CartComponent,
    DetalleComponent,
    BartoolComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({cartProducts : cartReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
