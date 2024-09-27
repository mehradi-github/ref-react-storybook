import type { Meta, StoryObj } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

const meta = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/design/sOfkw8blGH6Ag1xClHWLaG/Mealdrop-github?node-id=1126-3893',
    },
  },
} satisfies Meta<typeof RestaurantCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...restaurants[0],
    name: 'Burger Kingdom',
  },
}

export const New: Story = {
  args: {
    ...Default.args,
    isNew: true,
  },
}

export const Closed: Story = {
  args: {
    ...Default.args,
    isClosed: true,
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}
