import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { AppState } from '../store/app.state';
import * as CartActions from '../store/action/cartActions';
import Swal from 'sweetalert2';
import { ModalService } from '../detalle/modal-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productoSeleccionado : Product;

  products : Product[] = [];

  constructor(private productService : ProductService, private route : Router, private store : Store<AppState>, private modalService : ModalService) { }

  ngOnInit(): void {

    this.getAllVideogames();
  }

  /**
   * Método para obtener todos los videojuegos disponibles
   */
  getAllVideogames(){
    this.productService.getVideogames().subscribe(
      response => {
        console.log(response)
        return this.products = response;
      }
    )
  }

  goToCart(){
    this.route.navigate(['/cart']);
  }

  addToCart(product){
    Swal.fire({
      title: 'Producto correctamente añadido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    console.log(product.id);
    this.store.dispatch(new CartActions.AddProductCartAction(product));
  }

  cerrarSesion(product){
    this.route.navigate(['/login']);
  }


  abrirModal(product : Product){
    this.productoSeleccionado = product;
    this.modalService.abrirModal();
    console.log(product.foto);
  }

}
