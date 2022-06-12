import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(private loginService : LoginServiceService) {
  }

  ngOnInit(): void {
  }

  registrarUsuario(){
    this.loginService.registrarUsuario(this.user);
  }

}
