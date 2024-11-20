import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["base-title"]};
  }

  body {
    width: 100%;
    color: ${(props) => props.theme["base-title"]};
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme["background"]};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    outline: none;
    box-shadow: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
