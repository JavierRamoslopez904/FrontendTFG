import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/classes/product";

export interface ProductGroup {
  product: Product;
  count: number;
}

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

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartProducts'),
  (state: Product[]) => {
    var map: Map<number, ProductGroup> = new Map;

    state.forEach(p => {
      if (map.get(p.id)) {
        (map.get(p.id) as ProductGroup).count++;
      } else {
        map.set(p.id, { product: p, count: 1 });
      }
    })

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
)
