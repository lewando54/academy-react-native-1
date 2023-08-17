import React from 'react'
import { render } from '@testing-library/react-native'
import * as renderer from 'react-test-renderer'
import InputWithLabel from './InputWithLabel'

describe('InputWithLabel', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<InputWithLabel labelText='Testing' testId='test' value='' onChange={() => {}}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input with label with text', () => {
    const { getByText } = render(<InputWithLabel labelText='Testing' testId='test' value='' onChange={() => {}}/>)
    expect(getByText('Testing')).toBeTruthy()
  })
})
