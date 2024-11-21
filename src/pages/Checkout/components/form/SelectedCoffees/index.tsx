import { Trash } from "phosphor-react";
import { useContext } from "react";

import { CartContext } from "@/contexts/CartContext";

import { defaultTheme } from "@/styles/theme/default";

import { QuantityProduct } from "@/pages/Checkout/components/form/QuantityProduct";

import {
  ButtonRemoveProduct,
  Container,
  ContainerActions,
  ContainerDetailPayment,
  ContainerProducts,
  ContentProduct,
  ContentProductInfo,
  ContentProductInfoText,
  ProductPrice,
  Thumb
} from "@/pages/Checkout/components/form/SelectedCoffees/styles";

export function SelectedCoffees() {
  const { products, removeProduct } = useContext(CartContext);

  return (
    <Container>
      <ContainerProducts>
        {products.map((product) => (
          <ContentProduct key={product.id}>
            <ContentProductInfo>
              <Thumb src={product.image} alt="" />

              <ContentProductInfoText>
                <h4>{product.title}</h4>

                <ContainerActions>
                  <QuantityProduct quantity={product.quantity} />

                  <ButtonRemoveProduct type="button" onClick={() => removeProduct(product.id)}>
                    <Trash size={16} color={defaultTheme.purple} />
                    Remover
                  </ButtonRemoveProduct>
                </ContainerActions>
              </ContentProductInfoText>
            </ContentProductInfo>

            <ProductPrice>
              {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </ProductPrice>
          </ContentProduct>
        ))}
      </ContainerProducts>

      <ContainerDetailPayment></ContainerDetailPayment>
    </Container>
  );
}
