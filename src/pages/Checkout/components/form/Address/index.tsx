import { MapPinLine } from "phosphor-react";

import { defaultTheme } from "@/styles/theme/default";

import {
  ContainerAddress,
  ContainerAddressTitle,
  ContainerAddressTitleText,
  ContainerField,
  ContainerFields,
  Field
} from "@/pages/Checkout/components/form/Address/styles";

export function Address() {
  return (
    <ContainerAddress>
      <ContainerAddressTitle>
        <MapPinLine size={22} color={defaultTheme["yellow-dark"]} />

        <ContainerAddressTitleText>
          <h3>Endereço de Entrega</h3>

          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContainerAddressTitleText>
      </ContainerAddressTitle>

      <ContainerFields>
        <Field type="number" placeholder="CEP" size="normal" />

        <Field type="text" placeholder="Rua" size="full" />

        <ContainerField>
          <Field type="number" placeholder="Número" size="normal" />
          <Field type="text" placeholder="Complemento" size="full" />
        </ContainerField>

        <ContainerField>
          <Field type="text" placeholder="Bairro" size="normal" />
          <Field type="text" placeholder="Cidade" size="full" />
          <Field type="text" placeholder="UF" size="small" />
        </ContainerField>
      </ContainerFields>
    </ContainerAddress>
  );
}
