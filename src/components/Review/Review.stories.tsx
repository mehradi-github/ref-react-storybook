import type { Meta, StoryObj } from '@storybook/react'

import { Review } from './Review'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { GlobalStyle } from '../../styles/GlobalStyle';
import useDarkMode from "use-dark-mode";

const meta = {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: '',
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
} satisfies Meta<typeof Review>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Excellent: Story = {
  args: {
    rating: 5,
  },
}

export const VeryGood: Story = {
  args: {
    rating: 4.3,
  },
}

export const Adequate: Story = {
  args: {
    rating: 2.5,
  },
}

export const Poor: Story = {
  args: {
    rating: 1.5,
  },
}
