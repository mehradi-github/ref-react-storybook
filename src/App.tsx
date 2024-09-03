import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const { value } = useDarkMode(false, { global: globalThis.window })
  const theme = value ? darkTheme : lightTheme
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
