import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { AppState } from '../store/app.state';
import * as CartActions from '../store/action/cartActions';
import Swal from 'sweetalert2';
import { User } from '../classes/user';
import { ProductGroup, selectCountProducts, selectGroupedCartEntries, selectTotalPrice } from '../store/selector/cartSelector';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts$ : Observable<ProductGroup[]>;
  countProducts$ : Observable<number>;
  totalPrice$ : Observable<number>;

  constructor(private route : Router, private store : Store<AppState>) {
    this.cartProducts$ = store.select(selectGroupedCartEntries);
    this.countProducts$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice);
  }

  ngOnInit(): void {
  }

  goToShop(){
    this.route.navigate(['/main'])
  }

  deleteFromCart(product){
    //this.store.dispatch(new CartActions.RemoveProductCartAction(product));
  }

  goToCart(){
    this.route.navigate(['/cart']);
  }

  cerrarSesion(){
    this.route.navigate(['/login']).then(() => {
      window.location.reload();
    })
  }

  comprar(product){
    Swal.fire({
      title: '¿Quiere realizar su compra?',
      text: "Asegúrese antes de comprar nuestro producto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Comprar YA!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Compra realizada con éxito',
          'Revise el apartado de Mis compras',
          'success'
        )
      }
    })

    console.log(product.user.email)

  }

  aniadir(entry : any){
    this.store.dispatch(CartActions.addProduct(entry.product));
  }

  quitar(entry : any){
    this.store.dispatch(CartActions.removeProduct(entry.product));
  }
}
