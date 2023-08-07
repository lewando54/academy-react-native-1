import { StyleSheet, Text, View, Pressable, Animated } from 'react-native'
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import RegisterFormStyle from './RegisterForm.style'
import Button from '../../atoms/Button/Button'
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel/CheckboxWithLabel'
import Divider from '../../atoms/Divider/Divider'
import Heading from '../../atoms/Heading/Heading'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import { ITextInputFieldRef } from '../../atoms/TextInputField/TextInputField'
import { ICheckboxRef } from '../../../components/atoms/Checkbox/Checkbox'
import SocialButtonList, { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import TextWithLink from '../../atoms/TextWithLink/TextWithLink'

export interface IRegisterFormRef{
    focusLogin: () => void
}

export interface IRegisterFormProps {
    loginText: string
    passwordText: string
    socials: TSocialsArray
    onLoginChange: (newValue: string) => void
    onPasswordChange: (newValue: string) => void
    onSubmit: () => void
}

function RegisterForm({loginText, passwordText, socials, onLoginChange, onPasswordChange, onSubmit}: IRegisterFormProps, ref: React.Ref<IRegisterFormRef>): React.ReactElement {
    const loginInputRef = useRef<ITextInputFieldRef>(null)
    
    useImperativeHandle(ref, () => {
        return {
            focusLogin() {
                loginInputRef.current?.focus()
            }
        }
    })

    return (
        <View style={RegisterFormStyle.container}>
            <Heading testId='heading' level={3}>Sign up</Heading>
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
            <Button testId='button' color={'primary'} onClick={onSubmit}>
                SIGN UP
            </Button>
            <Divider testId='divider' text={'OR'}/>
            <SocialButtonList socials={socials} testId='socialbtnlist' />
            <TextWithLink paragraphText='Already registered?' anchorText='SIGN IN' href='/login' testId='textwithlink'/>
        </View>
    )
}

export default forwardRef(RegisterForm)