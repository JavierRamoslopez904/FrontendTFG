import { Action } from "@ngrx/store";

export enum ProductActionType{
  RETRIEVE_ALL_PRODUCTS = "[PRODUCT] Retrieve all products",
  RETRIEVE_ALL_PRODUCTS_SUCCESS = "[PRODUCT] Retrieve all products success"
}

export class RetrieveAllProductsAction implements Action{
  readonly type = ProductActionType.RETRIEVE_ALL_PRODUCTS;
  constructor(){

  }

}

export class RetrieveAllProductsSuccessAction implements Action{
  readonly type = ProductActionType.RETRIEVE_ALL_PRODUCTS_SUCCESS;
  constructor(public payload : any){

  }
}

export type ProductActions = RetrieveAllProductsAction | RetrieveAllProductsSuccessAction
