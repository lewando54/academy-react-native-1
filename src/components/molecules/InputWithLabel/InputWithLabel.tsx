import React, { forwardRef } from 'react'
import TextInputField, { IInputProps, ITextInputFieldRef } from '../../atoms/TextInputField/TextInputField'
import { View, Text } from 'react-native'
import inputWithLabelStyle from './InputWithLabel.style'

export interface IInputWithLabelProps extends IInputProps{
    labelText: string
}

function InputWithLabel({labelText, ...props}: IInputWithLabelProps, ref: React.Ref<ITextInputFieldRef>){
    return(
        <View style={inputWithLabelStyle.div}>
            <Text style={inputWithLabelStyle.label}>{labelText}</Text>
            <TextInputField {...props} ref={ref} />
        </View>
    )
}

export default forwardRef(InputWithLabel)