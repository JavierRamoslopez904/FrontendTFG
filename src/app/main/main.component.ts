import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { AppState } from '../store/app.state';
import * as CartActions from '../store/action/cartActions';
import Swal from 'sweetalert2';
import { ModalService } from '../detalle/modal-service';
import { Observable } from 'rxjs';
import { ProductGroup, selectCountProducts, selectGroupedCartEntries, selectTotalPrice } from '../store/selector/cartSelector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productoSeleccionado : Product;

  products : Product[] = [];

  constructor(private productService : ProductService, private route : Router, private store : Store, private modalService : ModalService) {
   }

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

  addToCart(product : Product){
    let timerInterval
      Swal.fire({
      title: 'Añadiendo al carrito de la compra',
      html: 'Revise su carrito cuando acabe el proceso',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
      }, 30)
      this.store.dispatch(CartActions.addProduct(product))
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    console.log(product.id);
  }

  cerrarSesion(product){
    this.route.navigate(['/login']);
  }


  abrirModal(product : Product){
    this.productoSeleccionado = product;
    this.modalService.abrirModal();
    console.log(product.foto);
  }

  goToPerfil(){
    this.route.navigate(['/perfil'])
  }

}
