import styled from "styled-components";

export const Container = styled.label`
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};

  padding: 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme["base-button"]};
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  &[data-state="true"] {
    background-color: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;