import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 0;
  background: ${(props) => props.theme.background};
  z-index: 10;
`;

export const HeaderContentDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  width: 8.9rem;
  height: 2.35rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.6rem 0.5rem;
  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
`;

export const LocationText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  color: ${(props) => props.theme["purple-dark"]};
`;

export const CartContainer = styled.div`
  position: relative;
  width: 2.3rem;
  height: 2.35rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
`;

interface ContainerQuantityProps {
  visible: boolean;
}

export const ContainerQuantity = styled.div<ContainerQuantityProps>`
  position: absolute;
  top: -10px;
  right: -10px;

  width: max-content;
  min-width: 1.25rem;
  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.1rem;
  border-radius: 50%;
  background: ${(props) => props.theme["yellow-dark"]};

  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
`;

export const QuantityText = styled.p`
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 700;

  color: ${(props) => props.theme.white};
`;
