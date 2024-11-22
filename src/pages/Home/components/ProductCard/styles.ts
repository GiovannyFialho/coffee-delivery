import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(prosp) => prosp.theme["base-card"]};
`;

export const Thumb = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -2.18rem;
  margin-bottom: 0.75rem;
`;

export const ContainerBadge = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const Badge = styled.div`
  width: max-content;
  height: auto;

  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme["yellow-light"]};
`;

export const BadgeText = styled.p`
  font-size: 0.6rem;
  line-height: 0.8rem;
  font-weight: 700;

  color: ${(props) => props.theme["yellow-dark"]};

  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-family: "Baloo 2", serif;

  font-size: 1.25rem;
  line-height: 1.35rem;
  font-weight: 700;

  color: ${(props) => props.theme["base-subtitle"]};
  text-align: center;

  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;

  color: ${(props) => props.theme["base-label"]};
  text-align: center;

  margin-bottom: 2.6rem;
`;

export const Control = styled.div`
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

export const Order = styled.div`
  min-width: 4.5rem;
  height: 2.37rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
`;

interface ButtonBuyProps {
  purchased: "true" | "false";
}

export const ButtonBuy = styled.button<ButtonBuyProps>`
  cursor: pointer;
  width: 2.37rem;
  height: 2.37rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;
  background: ${(props) =>
    props.purchased === "true" ? props.theme["yellow-dark"] : props.theme["purple-dark"]};
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    background: ${(props) =>
      props.purchased === "true"
        ? darken(0.1, props.theme["yellow-dark"])
        : darken(0.1, props.theme["purple-dark"])};
  }
`;
