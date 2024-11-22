import { produce } from "immer";

import { ActionTypes, type ProductAction } from "@/reducers/actions";

export interface ProductProps {
  id: number;
  title: string;
  subtitle: string;
  badges: string[];
  image: string;
  price: number;
  quantity: number;
}

interface ProductState {
  products: ProductProps[];
}

export function productReducer(state: ProductState, action: ProductAction) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.products.find(
          (product) => product.id === action.payload.product.id
        );

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.product.quantity;
        } else {
          draft.products.push(action.payload.product);
        }
      });

    case ActionTypes.INCREMENT_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productToIncrement = draft.products.find(
          (product) => product.id === action.payload.id
        );

        if (productToIncrement?.id) {
          productToIncrement.quantity += 1;
        }
      });

    case ActionTypes.DECREMENT_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productToDecrement = draft.products.find(
          (product) => product.id === action.payload.id
        );

        if (productToDecrement?.id && productToDecrement.quantity > 1) {
          productToDecrement.quantity -= 1;
        }
      });

    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.products = draft.products.filter((product) => product.id !== action.payload.id);
      });

    default:
      return state;
  }
}
