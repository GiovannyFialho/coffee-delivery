import { ProductProps } from "@/reducers/reducer";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY"
}

export interface AddNewProductAction {
  type: ActionTypes.ADD_PRODUCT;
  payload: { product: ProductProps };
}

export interface IncrementProductQuantityAction {
  type: ActionTypes.INCREMENT_PRODUCT_QUANTITY;
  payload: { id: ProductProps["id"] };
}
export interface DecrementProductQuantityAction {
  type: ActionTypes.DECREMENT_PRODUCT_QUANTITY;
  payload: { id: ProductProps["id"] };
}

export interface RemoveProductAction {
  type: ActionTypes.REMOVE_PRODUCT;
  payload: { id: ProductProps["id"] };
}

export type ProductAction =
  | AddNewProductAction
  | IncrementProductQuantityAction
  | DecrementProductQuantityAction
  | RemoveProductAction;

export function addProductAction(product: ProductProps): AddNewProductAction {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: { product }
  };
}

export function incrementProductQuantityAction(
  id: ProductProps["id"]
): IncrementProductQuantityAction {
  return {
    type: ActionTypes.INCREMENT_PRODUCT_QUANTITY,
    payload: {
      id
    }
  };
}

export function decrementProductQuantityAction(
  id: ProductProps["id"]
): DecrementProductQuantityAction {
  return {
    type: ActionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload: {
      id
    }
  };
}

export function removeProductAction(id: ProductProps["id"]): RemoveProductAction {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: { id }
  };
}
