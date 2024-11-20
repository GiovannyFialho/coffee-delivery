import styled from "styled-components";

import { media } from "@/utils/media";

export const Container = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 3.5rem;

  @media ${media.tablet} {
    flex-direction: column;
  }

  margin: 5.8rem 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.12rem;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", serif;

  font-size: 3rem;
  line-height: 3.1rem;
  font-weight: 700;
  color: ${(props) => props.theme["base-title"]};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.3rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ContainerIntroItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;

  @media ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const ContainerIntroItemsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const INTRO_ITEMS_COLORS = {
  simpleAndSafe: "yellow-dark",
  fastAndDelivery: "yellow",
  coffeeIntact: "base-text",
  freshToYou: "purple"
} as const;

interface IntroItemsProps {
  itemsColors: keyof typeof INTRO_ITEMS_COLORS;
}

export const IntroItem = styled.div<IntroItemsProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[INTRO_ITEMS_COLORS[props.itemsColors]]};
  border-radius: 50%;
`;

export const IntroItemText = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};
`;

export const TitleSectionProducts = styled.h2`
  font-family: "Baloo 2", serif;

  font-size: 2rem;
  line-height: 2.1rem;
  font-weight: 700;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 2.12rem;
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  @media ${media.tablet} {
    justify-content: center;
  }
`;
