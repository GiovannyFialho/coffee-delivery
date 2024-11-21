import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.43rem;
`;

export const Price = styled.p`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;

  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;

  color: ${(props) => props.theme["base-text"]};

  span {
    font-family: "Baloo 2", serif;

    font-size: 1.25rem;
    line-height: 1rem;
    font-weight: 700;
  }
`;

export const ContainerBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ContainerQuantity = styled.div`
  min-width: 4.5rem;
  height: 2.37rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
`;

export const QuantityText = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 400;

  color: ${(props) => props.theme["base-title"]};
`;

export const ButtonActionQuantity = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;
`;

export const ButtonBuy = styled.button`
  cursor: pointer;
  width: 2.37rem;
  height: 2.37rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-dark"]};
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => darken(0.1, props.theme["purple-dark"])};
  }
`;
