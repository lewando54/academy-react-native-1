import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react-native'
import SocialButton from './SocialButton'
import { Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

describe('Social Button', () => {
  it('should render social button element', () => {
    render(<SocialButton size={25} color='blue' href='https://www.facebook.com' icon='facebook' testId='social-button'/>)
    expect(screen.getByTestId('social-button')).toBeTruthy()
  })

  it('should have correct color', () => {
    render(<SocialButton size={25} color='red' href='https://www.facebook.com' icon='facebook' testId='social-button'/>)
    expect(screen.getByTestId('pressable-social-button').props.style[1].borderColor).toEqual('red')
  })

  it('should open correct URL by click', () => {
    const openURLSpy = jest.spyOn(Linking, 'openURL');
    const { getByTestId } = render(
      <SocialButton
        color='blue'
        href='https://www.example.com'
        icon='facebook'
        testId='social-button'
        size={40}
      />
    );
    fireEvent.press(getByTestId('pressable-social-button'));
    expect(openURLSpy).toHaveBeenCalledWith('https://www.example.com');
  })

  it('should have correct size', () => {
    render(<SocialButton size={25} color='blue' href='https://www.linkedin.com' icon='linkedin' testId='social-button'/>)
    expect(screen.getByTestId('pressable-social-button').props.style[1].borderRadius).toEqual(43.75)
    expect(screen.getByTestId('pressable-social-button').props.style[1].height).toEqual(43.75)
    expect(screen.getByTestId('pressable-social-button').props.style[1].width).toEqual(43.75)
  })

  it('should render the correct icon', () => {
    const { getByTestId } = render(
      <SocialButton
        color='blue'
        href='https://www.example.com'
        icon='facebook'
        testId='social-button'
        size={40}
      />
    );
    expect(getByTestId('social-button').findByType(FontAwesome5).props.name).toBe('facebook-f');
  });
})
