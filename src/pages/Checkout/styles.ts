import styled from "styled-components";

import { media } from "@/utils/media";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-family: "Baloo 2", serif;

  font-size: 1.12rem;
  line-height: 1.25rem;
  font-weight: 700;

  margin-bottom: 1rem;
`;

export const ContainerSectionCoffee = styled.div`
  width: 100%;
  min-width: 28rem;
  height: auto;

  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme["base-card"]};

  @media ${media.tablet} {
    min-width: 100%;
  }
`;

export const CheckoutButton = styled.button`
  cursor: pointer;

  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AddressContainer = styled(FormsContainer)``;

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const PaymentContainer = styled(FormsContainer)``;

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const PaymentErrorMessage = styled.p`
  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 700;
  font-weight: 400;
  color: red;
`;
