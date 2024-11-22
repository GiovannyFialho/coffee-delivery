import { createContext } from "react";

import { ProductProps } from "@/reducers/reducer";

export interface CartContextType {
  products: ProductProps[];
  addProduct: (product: ProductProps) => void;
  incrementProductQuantity: (id: ProductProps["id"]) => void;
  decrementProductQuantity: (id: ProductProps["id"]) => void;
  removeProduct: (id: ProductProps["id"]) => void;
}

export const CartContext = createContext({} as CartContextType);
