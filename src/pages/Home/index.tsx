import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { defaultTheme } from "@/styles/theme/default";

import bannerHome from "@/assets/banner-home.png";

import { ProductCard } from "@/pages/Home/components/ProductCard";

import {
  Container,
  ContainerIntroItems,
  ContainerIntroItemsItem,
  ContainerProducts,
  ContainerTitle,
  IntroItem,
  IntroItemText,
  Subtitle,
  Title,
  TitleSectionProducts
} from "@/pages/Home/styles";

import { products } from "@/data/products";

export function Home() {
  return (
    <div>
      <Container>
        <div>
          <ContainerTitle>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>

            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Subtitle>
          </ContainerTitle>

          <ContainerIntroItems>
            <ContainerIntroItemsItem>
              <IntroItem type="simpleAndSafe">
                <ShoppingCart size={16} color={defaultTheme.background} weight="fill" />
              </IntroItem>

              <IntroItemText>Compra simples e segura</IntroItemText>
            </ContainerIntroItemsItem>

            <ContainerIntroItemsItem>
              <IntroItem type="coffeeIntact">
                <Package size={16} color={defaultTheme.background} weight="fill" />
              </IntroItem>

              <IntroItemText>Embalagem mantém o café intacto</IntroItemText>
            </ContainerIntroItemsItem>

            <ContainerIntroItemsItem>
              <IntroItem type="fastAndDelivery">
                <Timer size={16} color={defaultTheme.background} weight="fill" />
              </IntroItem>

              <IntroItemText>Embalagem mantém o café intacto</IntroItemText>
            </ContainerIntroItemsItem>

            <ContainerIntroItemsItem>
              <IntroItem type="freshToYou">
                <Coffee size={16} color={defaultTheme.background} weight="fill" />
              </IntroItem>

              <IntroItemText>Embalagem mantém o café intacto</IntroItemText>
            </ContainerIntroItemsItem>
          </ContainerIntroItems>
        </div>

        <img src={bannerHome} alt="" />
      </Container>

      <div>
        <TitleSectionProducts>Nossos cafés</TitleSectionProducts>

        <ContainerProducts>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              badges={product.badge}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </ContainerProducts>
      </div>
    </div>
  );
}
