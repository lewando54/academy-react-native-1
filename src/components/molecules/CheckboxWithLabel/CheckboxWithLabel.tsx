import React, { forwardRef } from 'react'
import Checkbox, { ICheckboxProps, ICheckboxRef } from '../../atoms/Checkbox/Checkbox'
import { View, Text } from 'react-native'
import checkboxWithLabelStyle from './CheckboxWithLabel.style'

export interface ICheckboxWithLabelProps extends ICheckboxProps{
    labelText: string
}

function CheckboxWithLabel({labelText, ...props}: ICheckboxWithLabelProps, ref: React.Ref<ICheckboxRef>){
    return(
        <View style={checkboxWithLabelStyle.div}>
            <Checkbox {...props} ref={ref}/>
            <Text style={checkboxWithLabelStyle.label}>{labelText}</Text>
        </View>
    )
}

export default forwardRef(CheckboxWithLabel)