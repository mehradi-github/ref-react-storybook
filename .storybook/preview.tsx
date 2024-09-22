import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { GlobalStyle } from '../src/styles/GlobalStyle';
import useDarkMode from "use-dark-mode";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    (Story,context)=>{

        const { value } = useDarkMode(false, { global: globalThis.window })
        const theme = value ? darkTheme : lightTheme
        return (
            <ThemeProvider theme={theme}>
               <GlobalStyle />
               <Story {...context}/>
            </ThemeProvider>
        )
    }
]
};

export default preview;
