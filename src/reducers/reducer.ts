import { produce } from "immer";

import { ActionTypes, type ProductAction } from "@/reducers/actions";

export interface ProductProps {
  id: number;
  title: string;
  subtitle: string;
  badges: string[];
  image: string;
  price: number;
}

interface ProductState {
  products: ProductProps[];
}

export function productReducer(state: ProductState, action: ProductAction) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const existingProduct = state.products.findIndex(
        (product) => product.id === action.payload.product.id
      );

      if (existingProduct < 0) {
        return produce(state, (draft) => {
          draft.products.push(action.payload.product);
        });
      }

      return produce(state, (draft) => {
        draft.products[existingProduct].price = action.payload.product.price;
      });
    }

    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.products = draft.products.filter((product) => product.id !== action.payload.id);
      });

    default:
      return state;
  }
}
