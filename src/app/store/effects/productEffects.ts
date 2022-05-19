import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { ProductActionType, RetrieveAllProductsSuccessAction } from "../action/productActions";
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductEffects{

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionType.RETRIEVE_ALL_PRODUCTS),
    mergeMap(() => this.productService.getVideogames().pipe(map(data => {
      const products = data.map((snap) => snap.payload.doc.data());
      return new RetrieveAllProductsSuccessAction(products)
    })))
  ));

  constructor(private actions$ : Actions, private productService : ProductService){

  }

}
