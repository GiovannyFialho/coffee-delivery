import { ReactNode, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "@/contexts/CartContext";
import {
  addProductAction,
  checkoutCartAction,
  decrementProductQuantityAction,
  incrementProductQuantityAction,
  removeProductAction
} from "@/reducers/actions";
import { type ProductProps, productReducer } from "@/reducers/reducer";

import { OrderInfo } from "@/pages/Checkout";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    productReducer,
    {
      products: [],
      orders: []
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem("@coffee-delivery");

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );

  const navigate = useNavigate();

  const { products, orders } = cartState;

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

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        orders,
        addProduct,
        incrementProductQuantity,
        decrementProductQuantity,
        removeProduct,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
