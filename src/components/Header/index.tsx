import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";

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
      <img src={coffeeDeliveryLogo} alt="" />

      <HeaderContentDetail>
        <LocationContainer>
          <MapPin size={22} color={defaultTheme["purple"]} weight="fill" />

          <LocationText>São Paulo, SP</LocationText>
        </LocationContainer>

        <CartContainer>
          <ContainerQuantity visible={products.length > 0}>
            <QuantityText>{products.length}</QuantityText>
          </ContainerQuantity>

          <ShoppingCart size={22} color={defaultTheme["yellow-dark"]} weight="fill" />
        </CartContainer>
      </HeaderContentDetail>
    </HeaderContainer>
  );
}
