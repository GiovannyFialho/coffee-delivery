import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "@/Router";

import { GlobalStyles } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";

import { CartContextProvider } from "@/contexts/CartProvider";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
