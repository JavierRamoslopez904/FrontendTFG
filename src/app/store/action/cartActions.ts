import { Action, createAction, props } from "@ngrx/store";
import { Product } from "src/app/classes/product";

export enum CartActionsType{
  ADD_PRODUCT_CART = 'ADD PRODUCT',
  REMOVE_PRODUCT = 'REMOVE PRODUCT',
  REMOVE_ALL_PRODUCTS = 'REMOVE ALL PRODUCTS'
}

export class AddProductCartAction implements Action{
  readonly type = CartActionsType.ADD_PRODUCT_CART;
  constructor(public payload : any){

  }
}

export class RemoveProductCartAction implements Action{
  readonly type = CartActionsType.REMOVE_PRODUCT;
  constructor(public payload : any){

  }
}

export class RemoveAllProductsCartAction implements Action{
  readonly type = CartActionsType.REMOVE_ALL_PRODUCTS;
  constructor(public payload : any){

  }
}

export type CartActions = AddProductCartAction | RemoveProductCartAction | RemoveAllProductsCartAction
export function addProduct(product: any): any {
  throw new Error('Function not implemented.');
}

