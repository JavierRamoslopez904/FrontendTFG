import { Product } from "src/app/classes/product";
import { ProductActions, ProductActionType } from "../action/productActions";

const initialStateProducts : Array<Product> = [];

export function productsReducer(state: Array<Product> = initialStateProducts, action : ProductActions){
  switch(action.type){
    case ProductActionType.RETRIEVE_ALL_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
