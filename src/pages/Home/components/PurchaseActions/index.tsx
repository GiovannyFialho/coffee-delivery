import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { defaultTheme } from "@/styles/theme/default";

import {
  ButtonActionQuantity,
  ButtonBuy,
  Container,
  ContainerBuy,
  ContainerQuantity,
  Price,
  QuantityText
} from "@/pages/Home/components/PurchaseActions/styles";
import { useState } from "react";

interface PurchaseActionsProps {
  price: number;
}

export function PurchaseActions({ price }: PurchaseActionsProps) {
  const [quantity, setQuantity] = useState(0);

  const isSubmitDisable = quantity <= 0;

  function handleCalcFullPrice() {
    const total = quantity * price;

    if (total) {
      return total.toFixed(2);
    }
  }

  return (
    <Container>
      <Price>
        R$
        <span>
          {price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </span>
      </Price>

      <ContainerBuy>
        <ContainerQuantity>
          <ButtonActionQuantity
            onClick={() => {
              if (quantity > 0) {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            <Minus size={14} color={defaultTheme.purple} />
          </ButtonActionQuantity>

          <QuantityText>{quantity}</QuantityText>
          <ButtonActionQuantity onClick={() => setQuantity((prev) => prev + 1)}>
            <Plus size={14} color={defaultTheme.purple} />
          </ButtonActionQuantity>
        </ContainerQuantity>

        <ButtonBuy disabled={isSubmitDisable} onClick={handleCalcFullPrice}>
          <ShoppingCart
            size={20}
            color={defaultTheme["base-card"]}
            weight="fill"
          />
        </ButtonBuy>
      </ContainerBuy>
    </Container>
  );
}
