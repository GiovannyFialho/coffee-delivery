import styled from "styled-components";

export const ContainerAddress = styled.div`
  flex: 1;

  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const ContainerAddressTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ContainerAddressTitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;

  margin-bottom: 2rem;

  h3 {
    font-size: 1rem;
    line-height: 1.12rem;
    font-weight: 400;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContainerFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const INPUT_SIZES = {
  full: "100%",
  normal: "12.5rem",
  small: "3.75rem"
};

interface FieldProps {
  size: "full" | "normal" | "small";
}

export const Field = styled.input<FieldProps>`
  width: ${(props) => INPUT_SIZES[props.size]};
  height: 2.62rem;

  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  background: ${(props) => props.theme["base-input"]};
`;

export const ContainerField = styled.div`
  display: flex;
  gap: 0.75rem;
`;
