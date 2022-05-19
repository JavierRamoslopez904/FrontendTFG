import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // Creación del endPoint
  public urlEndpoint : string = 'http://localhost:8080/user';

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'})

  constructor(private http : HttpClient, private route : Router) { }

  /**
   * Método para subir una foto
   *
   * @param archivo
   * @param id
   * @returns
   */
  subirFoto(archivo : File, id) : Observable<HttpEvent<{}>>{
    let formData = new FormData();
    formData.append("archivo",archivo);
    formData.append("id",id);

    const req = new HttpRequest('POST',`${this.urlEndpoint}/upload`, formData, {
      reportProgress : true
    });

    return this.http.request(req);
  }

}
