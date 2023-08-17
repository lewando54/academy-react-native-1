/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState, useRef } from 'react'
import { StoryObj, Meta } from '@storybook/react'

import RegisterForm from './RegisterForm'

import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import { MemoryRouter } from 'react-router-dom'

interface ILoginFormMockupProps {
    socials: TSocialsArray,
    onSubmit: () => void
}

function RouterWrapLoginForm({socials, onSubmit}: ILoginFormMockupProps){
    const [loginText, setLoginText] = useState('')
	const [passwordText, setPasswordText] = useState('')

	const handleOnLoginChange = (login: string) => {
		setLoginText(login)
	}

	const handleOnPasswordChange = (password: string) => {
		setPasswordText(password)
	}

    return (
        <MemoryRouter initialEntries={['/']}>
            <RegisterForm 
                onSubmit={onSubmit} 
                loginText={loginText} 
                passwordText={passwordText} 
                onLoginChange={handleOnLoginChange}
                onPasswordChange={handleOnPasswordChange}
                socials={socials}/>
        </MemoryRouter>
    )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: RouterWrapLoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    socials: { control: 'array' },
    onSubmit: { action: 'submitted form' }
  },
} satisfies Meta<typeof RouterWrapLoginForm>

export default meta
type Story = StoryObj<typeof meta>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Default = {
    args: {
        socials: [
            { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
            { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
            { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
          ]
    }
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
