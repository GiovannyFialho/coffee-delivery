import { createContext } from "react";

import { ProductProps } from "@/reducers/reducer";

export interface CartContextType {
  products: ProductProps[];
  addProduct: (product: ProductProps) => void;
  removeProduct: (id: number) => void;
}

export const CartContext = createContext({} as CartContextType);
