import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { CartContext } from "@/contexts/CartContext";

import { Radio } from "@/components/Radio";
import { TextInput } from "@/components/TextInput";
import { SelectedCoffees } from "@/pages/Checkout/components/form/SelectedCoffees";

import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CheckoutButton,
  Container,
  ContainerSectionCoffee,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
  Section,
  SectionTitle
} from "@/pages/Checkout/styles";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento"
  })
});

export type OrderInfo = z.infer<typeof newOrder>;

export function Checkout() {
  const { products, checkout } = useContext(CartContext);

  const formCheckout = useForm<FormInputs>({
    resolver: zodResolver(newOrder)
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = formCheckout;

  const selectedPaymentMethod = watch("paymentMethod");

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (products.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }

    checkout(data);
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
                error={errors.cep}
                {...register("cep", { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: "street" } }}
                error={errors.street}
                {...register("street")}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
                error={errors.number}
                {...register("number")}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: "fullAddress" } }}
                error={errors.fullAddress}
                {...register("fullAddress")}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                error={errors.neighborhood}
                {...register("neighborhood")}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
                error={errors.city}
                {...register("city")}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: "state" } }}
                error={errors.state}
                {...register("state")}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>

                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === "credit"}
                  {...register("paymentMethod")}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === "debit"}
                  {...register("paymentMethod")}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === "cash"}
                  {...register("paymentMethod")}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>

              {errors.paymentMethod ? (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              ) : null}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </Section>

      <Section>
        <SectionTitle>Cafés selecionados</SectionTitle>

        <ContainerSectionCoffee>
          <SelectedCoffees />

          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </ContainerSectionCoffee>
      </Section>
    </Container>
  );
}
