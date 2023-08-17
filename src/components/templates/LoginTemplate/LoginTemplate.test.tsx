import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { MemoryRouter } from 'react-router-native'
import * as renderer from 'react-test-renderer'
import LoginTemplate from './LoginTemplate'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'

describe('LoginForm Template', () => {
    const socials: TSocialsArray = [
        { id: 1, color: 'blue', href: 'Facebook', icon: 'facebook' },
        { id: 2, color: 'red', href: 'Google', icon: 'google' }
    ]

    const onSubmit = jest.fn()

    const testId = 'login-testid'

    it('should render correctly', () => {
      const tree = renderer.create( 
        <MemoryRouter>
            <LoginTemplate 
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
      expect(tree).toMatchSnapshot()
    })

    it('should call onSubmit when the form is submitted', () => {
        const { getByTestId } = render(
            <MemoryRouter>
            <LoginTemplate 
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
})