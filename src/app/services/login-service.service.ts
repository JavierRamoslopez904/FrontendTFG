import { Injectable, Output } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http : HttpClient, private route : Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(
      localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  /**
   * Método para logear el usuario
   * @param user
   * @returns
   */
  logearUsuario(user : User){
    return this.http.post("http://localhost:8080/user/logearUsuario",user).subscribe(
      data =>{
        console.log("Datos correctos");
        this.route.navigate(["/main"]);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        Swal.fire({
          title: 'Bienvenidos a Javis Videogames',
          text: 'Descubre todos nuestros juegos',
          imageUrl: 'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/senalradionica/articulo-noticia/galeriaimagen/gamers.jpg',
          imageWidth: 500,
          imageHeight: 400,
          imageAlt: 'Custom image',
        })
      },
      error =>{
        console.log("Datos incorrectos");
        Swal.fire({
          title: 'El usuario introducido no existe en nuestra base de datos',
          text: 'Regístrate para poder acceder a nuestra página',
          imageUrl: 'https://pbs.twimg.com/media/DWFMG52W0AYTClv.jpg',
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: 'Custom image',
        })
      }
    )
  }

  /**
   * Método para añadir un nuevo usuario
   * @param user
   * @returns
   */
  registrarUsuario(user : User){
    return this.http.post("http://localhost:8080/user/aniadirUsuario", user).subscribe(
      data =>{
        console.log("Datos correctos");
        this.route.navigate(["/login"]);
        Swal.fire({
          title: 'Usuario registrado satisfactoriamente',
          imageUrl: 'https://www.tuexpertoapps.com/wp-content/uploads/2016/09/clash-royale-emotes-01.jpg',
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: 'Custom image',
        })
      },
      error =>{
        console.log("Datos incorrectos");
        Swal.fire({
          title: 'El usuario introducido ya está registrado',
          text: 'Por favor, introduzca otros datos',
          imageUrl: 'https://pbs.twimg.com/media/DWFMG52W0AYTClv.jpg',
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: 'Custom image',
        })
      }
    )
  }

  /**
   * Método para obtener el valor del user
   */
  public get userValue() : User{
    return this.userSubject.value;
  }

  logOut() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.route.navigate(['/login']);
}
}
