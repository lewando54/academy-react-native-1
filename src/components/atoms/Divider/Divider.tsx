import React from 'react'
import { Text, View } from 'react-native'
import dividerStyle from './Divider.style'

interface IDividerProps {
    text?: string
    testId: string
}

function Checkbox(props: IDividerProps): React.ReactElement{
    return (
            <View style={dividerStyle.div}>
                <View style={dividerStyle.hr}></View>
                {props.text && <Text style={dividerStyle.text}>{props.text}</Text>}
                <View style={dividerStyle.hr}></View>
            </View>
    )
}

export default Checkbox