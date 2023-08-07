import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { TextInput } from 'react-native'
import textInputFieldStyle from './TextInputField.style'

export interface ITextInputFieldRef {
    focus: () => void
}
export interface IInputProps {
    name?: string
    required?: boolean
    testId?: string
    placeholder?: string
    value: string
    secureTextEntry?: boolean
    onChange: (newValue: string) => void
}

function TextInputField({name, required, testId, placeholder, secureTextEntry=false, value='', onChange}: IInputProps, ref: React.Ref<ITextInputFieldRef>): React.ReactElement{
    const [isFocused, setIsFocused] = useState(false)

    const TextInputRef = useRef<TextInput>(null)

    useImperativeHandle(ref, () => {
        return {
            focus() {
                TextInputRef.current?.focus()
            }
        }
    })

    const onFocus = () => {
        setIsFocused((prev) => !prev)
    }

    const onBlurred = () => {
        setIsFocused((prev) => !prev)
    }

    const handleOnChange = (newValue: string) => {
        if(onChange){
            onChange(newValue)
        }
    }

    return (
        <TextInput value={value}
        placeholder={placeholder}
        onChangeText={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlurred}
        testID={testId}
        ref={TextInputRef}
        secureTextEntry={secureTextEntry}
        style={[
            textInputFieldStyle.base,
            isFocused && textInputFieldStyle.focused
        ]}/>
    )
}

export default forwardRef(TextInputField)