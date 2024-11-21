import styled from "styled-components";

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
