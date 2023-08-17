import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react-native'
import { PRIMARY_COLOR_BUTTON, SECONDARY_COLOR_BUTTON } from '../../../styling/Theme'
import Button from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button testId='testxd' color="primary">Click me</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render with primary color by default', () => {
    const tree = renderer.create(<Button testId='testxd'>Click me</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render innerHTML text', () => {
    const { getByText } = render(<Button testId='testxd' color="secondary">Click me</Button>)
    expect(getByText('Click me')).toBeTruthy()
  })

  it('should render with primary color', () => {
    const { getByTestId } = render(<Button testId='button' color={'primary'}>Click me</Button>)
    expect( getByTestId('button').props.style[1].backgroundColor).toEqual(PRIMARY_COLOR_BUTTON)
  })

  it('should render with secondary color', () => {
    render(<Button testId='button' color={'secondary'}>Click me</Button>)
    expect(screen.getByTestId('button').props.style[1].backgroundColor).toEqual(SECONDARY_COLOR_BUTTON)
  })

  it('should render with custom color', () => {
    render(<Button testId='button' color={'#fff'}>Click me</Button>)
    expect(screen.getByTestId('button').props.style[1].backgroundColor).toEqual('#fff')
  })

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button testId='testxd' onClick={onClick}>Click me</Button>)
    fireEvent.press(getByTestId('testxd'))
    expect(onClick).toHaveBeenCalled()
  })

})
