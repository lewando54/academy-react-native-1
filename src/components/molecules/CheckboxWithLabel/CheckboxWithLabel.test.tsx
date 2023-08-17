import React from 'react'
import { render } from '@testing-library/react-native'
import * as renderer from 'react-test-renderer'
import CheckboxWithLabel from './CheckboxWithLabel'

describe('CheckboxWithLabel', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CheckboxWithLabel labelText='Testing' onChange={() => {}} checked={false} testId='test' />)
    expect(tree).toMatchSnapshot()
  })

  it('should render label with text', () => {
    const { getByText } = render(<CheckboxWithLabel labelText='Testing' onChange={() => {}} checked={false} testId='test' />)
    expect(getByText('Testing')).toBeTruthy()
  })
})