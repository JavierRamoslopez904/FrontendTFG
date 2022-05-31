import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { Product } from 'src/app/classes/product';
import { addProduct,clearCart, removeProduct } from '../action/cartActions';

export const intialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  intialCartEntries,

  on(clearCart, _ => [] ),

  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.id == product.id);
    if (found) {
        entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  }),
)
