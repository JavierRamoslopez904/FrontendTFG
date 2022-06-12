import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../classes/user';
import { LoginServiceService } from '../../services/login-service.service';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user : User;

  constructor(private loginService : LoginServiceService, private route : Router, private store : Store<AppState>) {
    this.user = this.loginService.userValue;
  }

  ngOnInit(): void {


  }

  /**
   * Método para desplazarnos al carrito
   */
  goToCart(){
    this.route.navigate(['/cart']);
  }

  cerrarSesion(){
    this.route.navigate(['/login']).then(() => {
      window.location.reload();
    })
  }
}
