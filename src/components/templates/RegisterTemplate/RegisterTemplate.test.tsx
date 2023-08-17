import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { MemoryRouter } from 'react-router-native'
import * as renderer from 'react-test-renderer'
import RegisterTemplate from './RegisterTemplate'
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
            <RegisterTemplate 
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
      expect(tree).toMatchSnapshot()
    })

    it('should call onSubmit when the form is submitted', () => {
        const { getByTestId } = render(
            <MemoryRouter>
            <RegisterTemplate 
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
})