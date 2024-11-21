import styled from "styled-components";

export const ContainerForm = styled.form`
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
