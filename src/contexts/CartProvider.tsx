import { ReactNode, useReducer } from "react";

import { CartContext } from "@/contexts/CartContext";
import {
  addProductAction,
  decrementProductQuantityAction,
  incrementProductQuantityAction,
  removeProductAction
} from "@/reducers/actions";
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

  function incrementProductQuantity(id: ProductProps["id"]) {
    dispatch(incrementProductQuantityAction(id));
  }

  function decrementProductQuantity(id: ProductProps["id"]) {
    dispatch(decrementProductQuantityAction(id));
  }

  function removeProduct(id: ProductProps["id"]) {
    dispatch(removeProductAction(id));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        incrementProductQuantity,
        decrementProductQuantity,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
