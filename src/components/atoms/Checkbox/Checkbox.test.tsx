import React, { useState, createRef, forwardRef } from 'react'
import * as renderer from 'react-test-renderer'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import Checkbox, { ICheckboxRef } from './Checkbox'

interface ICheckboxMockProps {
  checked: boolean
  checkmarkColor?: string
  bgColor?: string
  disabled?: boolean
  ref?: React.Ref<ICheckboxRef>
}

const StatefulCheckbox = forwardRef(({checked=false, checkmarkColor, bgColor, disabled=false}: ICheckboxMockProps, ref: React.Ref<ICheckboxRef>) => {
  const [checkedValue, setCheckedValue] = useState(checked)
  return(
    <Checkbox testId="checkbox" checked={checked} disabled={disabled} checkmarkColor={checkmarkColor} ref={ref} bgColor={bgColor} onChange={(newValue) => setCheckedValue(newValue)} />
  )
})

describe('Checkbox', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<StatefulCheckbox checked={false}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should be checked if clicked when is unchecked', () => {
    const { getByTestId } = render(<StatefulCheckbox checked={false} />)
    const checkbox = getByTestId('checkbox')
    fireEvent.press(checkbox)
    waitFor(() => {
      expect(getByTestId('checkbox-view').props.style.opacity).toEqual(1)
      expect(checkbox.props.accessibilityState.checked).toEqual(true)
    })
})

  it('should be unchecked if clicked twice', () => {
    let checked = false
    const { getByTestId } = render(<StatefulCheckbox checked={checked}/>)
    fireEvent.press(getByTestId('checkbox'))
    waitFor(() => {
      expect(getByTestId('checkbox-view').props.style.opacity).toEqual(1)
    })
    fireEvent.press(getByTestId('checkbox'))
    waitFor(() => {
      expect(getByTestId('checkbox-view').props.style.opacity).toEqual(0)
    })
  })

  it('should have correct default color when checked', () => {
    let checked = false
    const { getByTestId } = render(<StatefulCheckbox checked={checked}/>)
    fireEvent.press(getByTestId('checkbox'))
    waitFor(() => {
      expect(getByTestId('checkbox-view').props.style.backgroundColor).toEqual('rgb(236, 72, 153)')
      expect(getByTestId('checkbox-view').props.style.opacity).toEqual(1)
    })
  })

  it('should have correct passed props color when checked', () => {
    let checked = false
    const { getByTestId } = render(<StatefulCheckbox bgColor='#fff' checked={checked}/>)
    fireEvent.press(getByTestId('checkbox'))
    waitFor(() => {
      expect(getByTestId('checkbox-view').props.style.backgroundColor).toEqual('#fff')
      expect(getByTestId('checkbox-view').props.style.opacity).toEqual(1)
    })
  })

  it('should have not called onChange when pressed if disabled', () => {
    const onChangeMock = jest.fn()
    const { getByTestId } = render(<Checkbox testId="checkbox" checked={false} disabled={true} onChange={onChangeMock} />)
    const checkbox = getByTestId('checkbox')
    fireEvent.press(checkbox)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should clear the check if clear() is called', () => {
    const checkboxRef = createRef<ICheckboxRef>()
    const { getByTestId } = render(<StatefulCheckbox ref={checkboxRef} checked={true}/>)
    expect(getByTestId('checkbox').props.accessibilityState.checked).toEqual(true)
    checkboxRef.current.clear()
    waitFor(() => {
      expect(getByTestId('checkbox').props.accessibilityState.checked).toEqual(false)
    })
  })
})
