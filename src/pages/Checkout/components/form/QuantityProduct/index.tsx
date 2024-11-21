import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import { defaultTheme } from "@/styles/theme/default";

import {
  ButtonActionQuantity,
  ContainerQuantity,
  QuantityText
} from "@/pages/Checkout/components/form/QuantityProduct/styles";

interface QuantityProductProps {
  quantity: number;
}

export function QuantityProduct({ quantity }: QuantityProductProps) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  return (
    <ContainerQuantity>
      <ButtonActionQuantity
        type="button"
        onClick={() => {
          if (productQuantity > 0) {
            setProductQuantity((prev) => prev - 1);
          }
        }}
      >
        <Minus size={14} color={defaultTheme.purple} />
      </ButtonActionQuantity>

      <QuantityText>{productQuantity}</QuantityText>

      <ButtonActionQuantity
        type="button"
        onClick={() => {
          setProductQuantity((prev) => prev + 1);
        }}
      >
        <Plus size={14} color={defaultTheme.purple} />
      </ButtonActionQuantity>
    </ContainerQuantity>
  );
}
