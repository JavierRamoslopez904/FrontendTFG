import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product : Product;

  // Creación del endPoint
  private urlEndpoint : string = 'http://localhost:8080/product';

  constructor(private http:HttpClient, private router : Router) { }

  /**
   * Método para obtener todos los videojuegos registrados en la BBDD
   * @returns
   */
  getVideogames() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.urlEndpoint}/getAll`);
  }

  subirFoto(archivo : File, id) : Observable<HttpEvent<{}>>{
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);

    const req = new HttpRequest('POST',`${this.urlEndpoint}/upload`,formData,{
      reportProgress : true
    });
    return this.http.request(req);
  }
}

