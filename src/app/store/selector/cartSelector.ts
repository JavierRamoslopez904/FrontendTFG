import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/classes/product";

export const selectCountProducts = createSelector(
  createFeatureSelector('cartProducts'),
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartProducts'),
  (state: Product[]) => {
    var totalPrice = 0;
    state.forEach(p => totalPrice += p.price);
    return totalPrice;
  }
)
