import { MapPin, ShoppingCart } from "phosphor-react";

import coffeeDeliveryLogo from "@/assets/coffeeDeliveryLogo.svg";

import {
  CartContainer,
  HeaderContainer,
  HeaderContentDetail,
  LocationContainer,
  LocationText
} from "@/components/Header/styles";
import { defaultTheme } from "@/styles/theme/default";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />

      <HeaderContentDetail>
        <LocationContainer>
          <MapPin size={22} color={defaultTheme["purple"]} weight="fill" />

          <LocationText>São Paulo, SP</LocationText>
        </LocationContainer>

        <CartContainer>
          <ShoppingCart
            size={22}
            color={defaultTheme["yellow-dark"]}
            weight="fill"
          />
        </CartContainer>
      </HeaderContentDetail>
    </HeaderContainer>
  );
}
