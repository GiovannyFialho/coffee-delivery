import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";

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

interface PurchaseActionsProps {
  price: number;
  totalPrice: (price: number) => void;
}

export function PurchaseActions({ price, totalPrice }: PurchaseActionsProps) {
  const [quantity, setQuantity] = useState(0);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);

  function handleCalcFullPrice() {
    const total = quantity * price;

    if (quantity === 0) {
      setIsSubmitDisable(true);
    }

    return totalPrice(total);
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
          <ButtonActionQuantity
            onClick={() => {
              setQuantity((prev) => prev + 1);
              setIsSubmitDisable(false);
            }}
          >
            <Plus size={14} color={defaultTheme.purple} />
          </ButtonActionQuantity>
        </ContainerQuantity>

        <ButtonBuy disabled={isSubmitDisable} onClick={handleCalcFullPrice}>
          <ShoppingCart size={20} color={defaultTheme["base-card"]} weight="fill" />
        </ButtonBuy>
      </ContainerBuy>
    </Container>
  );
}
