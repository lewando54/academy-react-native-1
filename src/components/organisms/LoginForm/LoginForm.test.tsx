import React, { createRef } from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { MemoryRouter } from 'react-router-native'
import LoginForm, { ILoginFormRef } from './LoginForm'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import textInputFieldStyle from '../../atoms/TextInputField/TextInputField.style'

describe('LoginForm', () => {

  const socials: TSocialsArray = [
    { id: 1, color: 'blue', href: 'Facebook', icon: 'facebook' },
    { id: 2, color: 'red', href: 'Google', icon: 'google' }
  ]
  const onSubmit = jest.fn()
  const testId = 'login-form'

  it('should render all form elements', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <LoginForm 
            loginText='' 
            passwordText='' 
            remember={false} 
            socials={socials} 
            onLoginChange={onSubmit} 
            onPasswordChange={onSubmit} 
            onRememberChange={onSubmit} 
            onSubmit={onSubmit} 
            testId={testId} 
        />
      </MemoryRouter>
    )

    expect(getByTestId('logininput')).toBeTruthy()
    expect(getByTestId('passwordinput')).toBeTruthy()
    expect(getByText('Remember me?')).toBeTruthy()
    expect(getByTestId('button')).toBeTruthy()
    expect(getByText('OR')).toBeTruthy()
    expect(getByText('Need an account?')).toBeTruthy()
    expect(getByText('SIGN UP')).toBeTruthy()
  })

  it('should call onSubmit when the form is submitted', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginForm 
            loginText='' 
            passwordText='' 
            remember={false} 
            socials={socials} 
            onLoginChange={onSubmit} 
            onPasswordChange={onSubmit} 
            onRememberChange={onSubmit} 
            onSubmit={onSubmit} 
            testId={testId} 
        />
      </MemoryRouter>
    )
    const submitButton = getByTestId('button')
    fireEvent.press(submitButton)
    expect(onSubmit).toHaveBeenCalled()
  })

  it('should clear checkbox when the clear method is called', () => {
    const formRef = createRef<ILoginFormRef>()

    const { getByTestId } = render(
      <MemoryRouter>
        <LoginForm 
            loginText='' 
            passwordText='' 
            remember={false} 
            socials={socials} 
            onLoginChange={onSubmit} 
            onPasswordChange={onSubmit} 
            onRememberChange={onSubmit} 
            onSubmit={onSubmit} 
            testId={testId}
            ref={formRef} 
        />
      </MemoryRouter>
    )

    const rememberMeCheckbox = getByTestId('checkbox')


    formRef.current?.clearCheckbox()
    expect(rememberMeCheckbox.props.accessibilityState.checked).toBe(false)
  })

  it('should change values of inputs when text is typed', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <LoginForm 
                loginText='' 
                passwordText='' 
                remember={false} 
                socials={socials} 
                onLoginChange={onSubmit} 
                onPasswordChange={onSubmit} 
                onRememberChange={onSubmit} 
                onSubmit={onSubmit} 
                testId={testId}
            />
        </MemoryRouter>
    )

    fireEvent.changeText(getByTestId('logininput'),'email@test.com')
    expect(onSubmit).toBeCalledWith('email@test.com')
    fireEvent.changeText(getByTestId('passwordinput'),'somepassword')
    expect(onSubmit).toBeCalledWith('somepassword')
  })

  it('should focus on the email input when the focus method is called', () => {
    const formRef = createRef<ILoginFormRef>()

    const { getByTestId } = render(
        <MemoryRouter>
            <LoginForm 
                loginText='' 
                passwordText='' 
                remember={false} 
                socials={socials} 
                onLoginChange={onSubmit} 
                onPasswordChange={onSubmit} 
                onRememberChange={onSubmit} 
                onSubmit={onSubmit} 
                testId={testId}
                ref={formRef}
            />
        </MemoryRouter>
    )

    const emailInput = getByTestId('logininput')
    const passwordInput = getByTestId('passwordinput')
    fireEvent(passwordInput, 'focus')

    formRef.current.focusLogin()
    waitFor(() => {
        expect(emailInput.props.style).toContain(textInputFieldStyle.focused)
    })
  })
})
