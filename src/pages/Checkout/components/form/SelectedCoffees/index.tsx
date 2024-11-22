import { Trash } from "phosphor-react";
import { useContext } from "react";

import { CartContext } from "@/contexts/CartContext";

import { defaultTheme } from "@/styles/theme/default";

import { QuantityProduct } from "@/components/QuantityProduct";

import {
  ButtonRemoveProduct,
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
  const { products, removeProduct, incrementProductQuantity, decrementProductQuantity } =
    useContext(CartContext);

  const shippingPrice = 3.5;
  const totalProducsPrice = products.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  function handleItemIncrement(id: number) {
    incrementProductQuantity(id);
  }

  function handleItemDecrement(id: number) {
    decrementProductQuantity(id);
  }

  return (
    <>
      <ContainerProducts>
        {products.map((product) => (
          <ContentProduct key={product.id}>
            <ContentProductInfo>
              <Thumb src={product.image} alt="" />

              <ContentProductInfoText>
                <h4>{product.title}</h4>

                <ContainerActions>
                  <QuantityProduct
                    quantity={product.quantity}
                    incrementQuantity={() => handleItemIncrement(product.id)}
                    decrementQuantity={() => handleItemDecrement(product.id)}
                  />

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

      <ContainerDetailPayment>
        <div>
          <span>Total de itens</span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              currency: "BRL",
              style: "currency"
            }).format(totalProducsPrice)}
          </span>
        </div>

        <div>
          <span>Entrega</span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              currency: "BRL",
              style: "currency"
            }).format(shippingPrice)}
          </span>
        </div>

        <div>
          <span>Total</span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              currency: "BRL",
              style: "currency"
            }).format(totalProducsPrice + shippingPrice)}
          </span>
        </div>
      </ContainerDetailPayment>
    </>
  );
}
