import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../classes/user';
import { LoginServiceService } from '../services/login-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user : User;

  constructor(private loginService : LoginServiceService, private route : Router, private userService : UserServiceService) {
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
