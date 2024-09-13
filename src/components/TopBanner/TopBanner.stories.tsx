import type { Meta, StoryObj } from '@storybook/react'

import { TopBanner } from './TopBanner'

const meta = {
  title: 'Components/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: '',
    },
  },
} satisfies Meta<typeof TopBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Categories',
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    photoUrl:
      '',
  },
}
