import type { StoryObj, Meta } from '@storybook/react'

import { Category } from './Category'

const meta = {
  title: 'Components/Category',
  component: Category,
  args: {
    title: 'Pizza',
    photoUrl:
      '',
  },
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figspec',
      url: '',
    },
  },
} satisfies Meta<typeof Category>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rounded: Story = {
  args: {
    round: true,
  },
}
