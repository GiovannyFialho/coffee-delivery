import { createContext } from "react";

import { Order, ProductProps } from "@/reducers/reducer";

import { OrderInfo } from "@/pages/Checkout";

export interface CartContextType {
  products: ProductProps[];
  orders: Order[];
  addProduct: (product: ProductProps) => void;
  incrementProductQuantity: (id: ProductProps["id"]) => void;
  decrementProductQuantity: (id: ProductProps["id"]) => void;
  removeProduct: (id: ProductProps["id"]) => void;
  checkout: (order: OrderInfo) => void;
}

export const CartContext = createContext({} as CartContextType);
