import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { Product } from 'src/app/classes/product';
import { addProduct, clearCart, removeProduct } from '../action/cartActions';

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
  })
)

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};

/**const initialStateCart : Array<Product> = [];

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

} **/
