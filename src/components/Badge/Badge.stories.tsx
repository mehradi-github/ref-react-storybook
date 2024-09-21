import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { GlobalStyle } from '../../styles/GlobalStyle';
import useDarkMode from "use-dark-mode";

const meta={
    title:'components/Badge',
    component: Badge,
    args:{
        text:'Comfort food'
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
} satisfies Meta<typeof Badge>;

export default meta;

type Story= StoryObj<typeof Badge>

export const Primary:Story={
    args:{
        text:'Primary Comfort food'
    }
}

