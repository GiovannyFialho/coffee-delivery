import { Address } from "@/pages/Checkout/components/form/Address";
import { Payment } from "@/pages/Checkout/components/form/Payment";
import { SelectedCoffees } from "@/pages/Checkout/components/form/SelectedCoffees";

import { ContainerForm, Section, SectionTitle } from "@/pages/Checkout/styles";

export function Checkout() {
  return (
    <ContainerForm>
      <Section>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <Address />

        <Payment />
      </Section>

      <Section>
        <SectionTitle>Cafés selecionados</SectionTitle>

        <SelectedCoffees />
      </Section>
    </ContainerForm>
  );
}
