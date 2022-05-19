import { Product } from "../classes/product";

export interface AppState{
  readonly cartProducts : Array<Product>
  readonly mainProducts : Array<Product>
}
