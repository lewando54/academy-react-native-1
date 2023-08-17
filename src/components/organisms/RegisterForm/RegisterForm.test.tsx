import React, { createRef } from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { MemoryRouter } from 'react-router-native'
import RegisterForm, { IRegisterFormRef } from './RegisterForm'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import textInputFieldStyle from '../../atoms/TextInputField/TextInputField.style'

describe('RegisterForm', () => {

  const socials: TSocialsArray = [
    { id: 1, color: 'blue', href: 'Facebook', icon: 'facebook' },
    { id: 2, color: 'red', href: 'Google', icon: 'google' }
  ]
  const onSubmit = jest.fn()
  const testId = 'register-form'

  it('should render all form elements', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <RegisterForm 
            loginText='' 
            passwordText='' 
            socials={socials} 
            onLoginChange={onSubmit} 
            onPasswordChange={onSubmit} 
            onSubmit={onSubmit} 
            testId={testId} 
        />
      </MemoryRouter>
    )

    expect(getByTestId('logininput')).toBeTruthy()
    expect(getByTestId('passwordinput')).toBeTruthy()
    expect(getByTestId('button')).toBeTruthy()
    expect(getByText('OR')).toBeTruthy()
    expect(getByText('Already registered?')).toBeTruthy()
    expect(getByText('SIGN IN')).toBeTruthy()
  })

  it('should call onSubmit when the form is submitted', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <RegisterForm 
            loginText='' 
            passwordText='' 
            socials={socials} 
            onLoginChange={onSubmit} 
            onPasswordChange={onSubmit} 
            onSubmit={onSubmit} 
            testId={testId} 
        />
      </MemoryRouter>
    )
    const submitButton = getByTestId('button')
    fireEvent.press(submitButton)
    expect(onSubmit).toHaveBeenCalled()
  })

  it('should change values of inputs when text is typed', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <RegisterForm 
                loginText='' 
                passwordText='' 
                socials={socials} 
                onLoginChange={onSubmit} 
                onPasswordChange={onSubmit}  
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
    const formRef = createRef<IRegisterFormRef>()

    const { getByTestId } = render(
        <MemoryRouter>
            <RegisterForm 
                loginText='' 
                passwordText='' 
                socials={socials} 
                onLoginChange={onSubmit} 
                onPasswordChange={onSubmit} 
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
