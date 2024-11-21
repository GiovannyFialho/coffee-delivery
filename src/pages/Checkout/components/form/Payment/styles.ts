import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ContainerTitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;

  h3 {
    font-size: 1rem;
    line-height: 1.12rem;
    font-weight: 400;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.8rem;
    line-height: 1rem;
    font-size: 400;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContainerPaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const PaymentButtonOption = styled.button`
  cursor: pointer;

  width: 11.25rem;
  height: 3.12rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: 0.75rem;
  line-height: 0.87rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};

  padding: 1rem 1.03rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
  }
`;
