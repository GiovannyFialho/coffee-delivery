import { Minus, Plus } from "phosphor-react";

import { defaultTheme } from "@/styles/theme/default";

import {
  ButtonActionQuantity,
  ContainerQuantity,
  QuantityText
} from "@/components/QuantityProduct/styles";

interface QuantityProductProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityProduct({
  quantity,
  incrementQuantity,
  decrementQuantity
}: QuantityProductProps) {
  return (
    <ContainerQuantity>
      <ButtonActionQuantity type="button" onClick={decrementQuantity}>
        <Minus size={14} color={defaultTheme.purple} />
      </ButtonActionQuantity>

      <QuantityText>{quantity}</QuantityText>

      <ButtonActionQuantity type="button" onClick={incrementQuantity}>
        <Plus size={14} color={defaultTheme.purple} />
      </ButtonActionQuantity>
    </ContainerQuantity>
  );
}
