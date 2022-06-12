import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Creación de un objeto de la clase User
  user = new User();

  constructor(private loginService : LoginServiceService) { }

  ngOnInit(): void {
  }

  /**
   * Método para logear un usuario
   */
  logearUsuario(){
    this.loginService.logearUsuario(this.user);
  }
}
