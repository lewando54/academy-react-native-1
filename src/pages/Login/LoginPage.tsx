import React, { useState, useRef } from 'react'

import LoginTemplate from '../../components/templates/LoginTemplate/LoginTemplate'
import { ILoginFormRef } from '../../components/organisms/LoginForm/LoginForm'

import { TSocialsArray } from '../../components/molecules/SocialButtonList/SocialButtonList'


function LoginPage(): React.ReactElement{
	const [loginText, setLoginText] = useState('')
	const [passwordText, setPasswordText] = useState('')
	const [remember, setRemember] = useState(false)

	const loginRef = useRef<ILoginFormRef>(null)

	const handleOnLoginChange = (login: string) => {
		setLoginText(login)
	}

	const handleOnPasswordChange = (password: string) => {
		setPasswordText(password)
	}

	const handleOnRememberChange = (remember: boolean) => {
		setRemember(remember)
	}

	const clearFormFields = () => {
		setLoginText('')
		setPasswordText('')
		loginRef.current?.clearCheckbox()
	}

	const handleOnSubmit = () => {
		console.log('LOGIN: ', loginText, passwordText, remember)
		clearFormFields()
		loginRef.current?.focusLogin()
	}

	const socials: TSocialsArray = [
		{ id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
		{ id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
		{ id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
	]

	return (
		<LoginTemplate 
			socials={socials} 
			loginText={loginText} 
			passwordText={passwordText} 
			remember={remember} 
			onLoginChange={handleOnLoginChange}
			onPasswordChange={handleOnPasswordChange}
			onRememberChange={handleOnRememberChange}
			onSubmit={handleOnSubmit}
			ref={loginRef}/>
	)
}

export default LoginPage