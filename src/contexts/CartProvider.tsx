import { ReactNode, useReducer } from "react";

import { CartContext } from "@/contexts/CartContext";
import { addProductAction, removeProductAction } from "@/reducers/actions";
import { type ProductProps, productReducer } from "@/reducers/reducer";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsState, dispatch] = useReducer(productReducer, {
    products: []
  });

  const { products } = productsState;

  function addProduct(product: ProductProps) {
    dispatch(addProductAction(product));
  }

  function removeProduct(id: number) {
    dispatch(removeProductAction(id));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
