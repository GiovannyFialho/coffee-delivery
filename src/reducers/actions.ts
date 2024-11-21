import { ProductProps } from "@/reducers/reducer";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT"
}

export interface AddNewProductAction {
  type: ActionTypes.ADD_PRODUCT;
  payload: { product: ProductProps };
}

export interface RemoveProductAction {
  type: ActionTypes.REMOVE_PRODUCT;
  payload: { id: number };
}

export type ProductAction = AddNewProductAction | RemoveProductAction;

export function addProductAction(product: ProductProps): AddNewProductAction {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: { product }
  };
}

export function removeProductAction(id: number): RemoveProductAction {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: { id }
  };
}
