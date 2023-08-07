import React, { useState, useRef } from 'react'

import RegisterTemplate from '../../components/templates/RegisterTemplate/RegisterTemplate'
import { IRegisterFormRef } from '../../components/organisms/RegisterForm/RegisterForm'

import { TSocialsArray } from '../../components/molecules/SocialButtonList/SocialButtonList'


function RegisterPage(): React.ReactElement{
	const [loginText, setLoginText] = useState('')
	const [passwordText, setPasswordText] = useState('')

	const registerRef = useRef<IRegisterFormRef>(null)

	const handleOnLoginChange = (login: string) => {
		setLoginText(login)
	}

	const handleOnPasswordChange = (password: string) => {
		setPasswordText(password)
	}

	const clearFormFields = () => {
		setLoginText('')
		setPasswordText('')
	}

	const handleOnSubmit = () => {
		console.log(`REGISTER: "${loginText}", "${passwordText}"`)
		clearFormFields()
		registerRef.current?.focusLogin()
	}

	const socials: TSocialsArray = [
		{ id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
		{ id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
		{ id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
	]

	return (
		<RegisterTemplate 
			socials={socials} 
			loginText={loginText} 
			passwordText={passwordText}  
			onLoginChange={handleOnLoginChange}
			onPasswordChange={handleOnPasswordChange}
			onSubmit={handleOnSubmit}
			ref={registerRef}/>
	)
}

export default RegisterPage