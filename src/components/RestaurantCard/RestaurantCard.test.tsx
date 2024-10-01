import { expect } from 'vitest'
import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'


import * as stories from './RestaurantCard.stories'

const { Default} = composeStories(stories)

describe('RestaurantCard', () => {
  test('should render correctly', async () => {
    await Default.run()

    expect(screen.getByText('Burger Kingdom')).toBeInTheDocument()
  })
})