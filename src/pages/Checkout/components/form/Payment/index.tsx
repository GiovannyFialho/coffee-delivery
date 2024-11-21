import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { defaultTheme } from "@/styles/theme/default";

import {
  Container,
  ContainerPaymentOptions,
  ContainerTitle,
  ContainerTitleText,
  PaymentButtonOption
} from "@/pages/Checkout/components/form/Payment/styles";

export function Payment() {
  return (
    <Container>
      <ContainerTitle>
        <CurrencyDollar size={22} color={defaultTheme.purple} />

        <ContainerTitleText>
          <h3>Pagamento</h3>

          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </ContainerTitleText>
      </ContainerTitle>

      <ContainerPaymentOptions>
        <PaymentButtonOption>
          <CreditCard size={16} color={defaultTheme.purple} />
          Cartão de crédito
        </PaymentButtonOption>

        <PaymentButtonOption>
          <Bank size={16} color={defaultTheme.purple} />
          Cartão de débito
        </PaymentButtonOption>

        <PaymentButtonOption>
          <Money size={16} color={defaultTheme.purple} />
          Dinheiro
        </PaymentButtonOption>
      </ContainerPaymentOptions>
    </Container>
  );
}
