import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { defaultTheme } from "@/styles/theme/default";

import bannerHome from "@/assets/banner-home.png";

import {
  Container,
  ContainerIntroItems,
  ContainerIntroItemsItem,
  ContainerTitle,
  IntroItem,
  IntroItemText,
  Subtitle,
  Title
} from "@/pages/Home/styles";

export function Home() {
  return (
    <Container>
      <div>
        <ContainerTitle>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </ContainerTitle>

        <ContainerIntroItems>
          <ContainerIntroItemsItem>
            <IntroItem itemsColors="simpleAndSafe">
              <ShoppingCart
                size={16}
                color={defaultTheme.background}
                weight="fill"
              />
            </IntroItem>

            <IntroItemText>Compra simples e segura</IntroItemText>
          </ContainerIntroItemsItem>

          <ContainerIntroItemsItem>
            <IntroItem itemsColors="coffeeIntact">
              <Package
                size={16}
                color={defaultTheme.background}
                weight="fill"
              />
            </IntroItem>

            <IntroItemText>Embalagem mantém o café intacto</IntroItemText>
          </ContainerIntroItemsItem>

          <ContainerIntroItemsItem>
            <IntroItem itemsColors="fastAndDelivery">
              <Timer size={16} color={defaultTheme.background} weight="fill" />
            </IntroItem>

            <IntroItemText>Embalagem mantém o café intacto</IntroItemText>
          </ContainerIntroItemsItem>

          <ContainerIntroItemsItem>
            <IntroItem itemsColors="freshToYou">
              <Coffee size={16} color={defaultTheme.background} weight="fill" />
            </IntroItem>

            <IntroItemText>Embalagem mantém o café intacto</IntroItemText>
          </ContainerIntroItemsItem>
        </ContainerIntroItems>
      </div>

      <img src={bannerHome} alt="" />
    </Container>
  );
}
