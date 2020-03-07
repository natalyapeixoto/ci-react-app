import React from 'react'
import { render } from '@testing-library/react'
import Product from '../product'

describe('component: Product', () => {
  test('should render', () => {
    const { getByTestId } = render(<Product />)

    expect(getByTestId).toBeDefined()
  })
})