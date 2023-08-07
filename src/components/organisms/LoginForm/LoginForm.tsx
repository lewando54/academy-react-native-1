import { StyleSheet, Text, View, Pressable, Animated } from 'react-native'
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import loginFormStyle from './LoginForm.style'
import Button from '../../atoms/Button/Button'
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel/CheckboxWithLabel'
import Divider from '../../atoms/Divider/Divider'
import Heading from '../../atoms/Heading/Heading'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import { ITextInputFieldRef } from '../../atoms/TextInputField/TextInputField'
import { ICheckboxRef } from '../../../components/atoms/Checkbox/Checkbox'
import SocialButtonList, { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import TextWithLink from '../../atoms/TextWithLink/TextWithLink'

export interface ILoginFormRef{
    focusLogin: () => void
    clearCheckbox: () => void
}

export interface ILoginFormProps {
    loginText: string
    passwordText: string
    remember: boolean
    socials: TSocialsArray
    onLoginChange: (newValue: string) => void
    onPasswordChange: (newValue: string) => void
    onRememberChange: (newValue: boolean) => void
    onSubmit: () => void
}

function LoginForm({loginText, passwordText, remember, socials, onLoginChange, onPasswordChange, onRememberChange, onSubmit}: ILoginFormProps, ref: React.Ref<ILoginFormRef>): React.ReactElement {
    const loginInputRef = useRef<ITextInputFieldRef>(null)
    const checkboxRef = useRef<ICheckboxRef>(null)
    
    useImperativeHandle(ref, () => {
        return {
            focusLogin() {
                loginInputRef.current?.focus()
            },
            clearCheckbox() {
                checkboxRef.current?.clear()
            }
        }
    })

    return (
        <View style={loginFormStyle.container}>
            <Heading testId='heading' level={3}>Login</Heading>
            <InputWithLabel 
                labelText='Email' 
                value={loginText} 
                onChange={(newValue) => onLoginChange(newValue)}
                ref={loginInputRef} 
                testId='logininput'/>
            <InputWithLabel 
                labelText='Password' 
                value={passwordText} 
                secureTextEntry={true} 
                onChange={(newValue) => onPasswordChange(newValue)}/>
            <CheckboxWithLabel 
                labelText='Remember me?' 
                testId='checkbox' 
                checkmarkColor='white' 
                checked={remember} 
                ref={checkboxRef}
                onChange={(newValue) => onRememberChange(newValue)}/>
            <Button testId='button' color={'primary'} onClick={onSubmit}>
                Login
            </Button>
            <Divider testId='divider' text={'OR'}/>
            <SocialButtonList socials={socials} testId='socialbtnlist' />
            <TextWithLink paragraphText='Need an account?' anchorText='SIGN UP' href='/test' testId='textwithlink'/>
        </View>
    )
}

export default forwardRef(LoginForm)