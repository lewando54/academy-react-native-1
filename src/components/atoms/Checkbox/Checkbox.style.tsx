import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR_BUTTON, SECONDARY_COLOR_BUTTON } from '../../../styling/Theme'

export default StyleSheet.create({
    base:{
        width: 25,
        height: 25,
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        borderColor: '#ddd',
        borderRadius: 4,
        borderWidth: 2,
        position: 'absolute'
    },
    checked:{
        borderColor: PRIMARY_COLOR_BUTTON,
        backgroundColor: PRIMARY_COLOR_BUTTON
    },
    disabled:{
        backgroundColor: 'gray'
    }
})