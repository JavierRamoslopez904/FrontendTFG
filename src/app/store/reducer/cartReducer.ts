import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/classes/product";
import { CartActions, CartActionsType } from "../action/cartActions";

const initialStateCart : Array<Product> = [];

export function cartReducer(state : Array<Product> = initialStateCart, action : CartActions){

  switch(action.type){
    case CartActionsType.ADD_PRODUCT_CART:
      return [...state, action.payload]
    case CartActionsType.REMOVE_PRODUCT:
      let product = action.payload
      return state.filter((el) => el.id != product.id)
    case CartActionsType.REMOVE_ALL_PRODUCTS:
      let products = action.payload
      return state.splice
    default :
      return state
  }

}
