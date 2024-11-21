import styled from "styled-components";

import { media } from "@/utils/media";

export const Container = styled.div`
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

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContentProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ContentProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const Thumb = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const ContentProductInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    font-size: 1rem;
    line-height: 1.12rem;
    font-weight: 400;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ContainerActions = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ButtonRemoveProduct = styled.button`
  cursor: pointer;

  width: 100%;
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;

  padding: 0.4rem 0.5rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
  }
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  line-height: 1.12rem;
  font-weight: 700;

  color: ${(props) => props.theme["base-text"]};
`;

export const ContainerDetailPayment = styled.div``;