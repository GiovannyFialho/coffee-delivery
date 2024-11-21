import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CartContext } from "@/contexts/CartContext";

import coffeeDeliveryLogo from "@/assets/coffeeDeliveryLogo.svg";

import { defaultTheme } from "@/styles/theme/default";

import {
  CartContainer,
  ContainerQuantity,
  HeaderContainer,
  HeaderContentDetail,
  LocationContainer,
  LocationText,
  QuantityText
} from "@/components/Header/styles";

export function Header() {
  const { products } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <HeaderContentDetail>
        <LocationContainer>
          <MapPin size={22} color={defaultTheme["purple"]} weight="fill" />

          <LocationText>São Paulo, SP</LocationText>
        </LocationContainer>

        <NavLink to={products.length > 0 ? "/checkout" : "/"} title="Checkout">
          <CartContainer>
            <ContainerQuantity visible={products.length > 0 ? "show" : "no-show"}>
              <QuantityText>{products.length}</QuantityText>
            </ContainerQuantity>

            <ShoppingCart size={22} color={defaultTheme["yellow-dark"]} weight="fill" />
          </CartContainer>
        </NavLink>
      </HeaderContentDetail>
    </HeaderContainer>
  );
}
