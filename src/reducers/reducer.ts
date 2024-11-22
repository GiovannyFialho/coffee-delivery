import { produce } from "immer";

import { ActionTypes, type ProductAction } from "@/reducers/actions";

import { OrderInfo } from "@/pages/Checkout";

export interface ProductProps {
  id: number;
  title: string;
  subtitle: string;
  badges: string[];
  image: string;
  price: number;
  quantity: number;
}

export interface Order extends OrderInfo {
  id: number;
  items: ProductProps[];
}

interface ProductState {
  products: ProductProps[];
  orders: Order[];
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

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.products,
          ...action.payload.order
        };
        draft.orders.push(newOrder);
        draft.products = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });

    default:
      return state;
  }
}
