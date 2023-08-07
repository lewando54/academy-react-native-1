import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR_BUTTON, SECONDARY_COLOR_BUTTON } from '../../../styling/Theme'

export default StyleSheet.create({
    base: {
        borderRadius: 6,
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 4,
        shadowOffset: {width: 0, height: 4},
        shadowBlur: 6,
        shadowColor: 'rgba(0,0,0,0.3)',
        border: 0,
    },
    text:{
        color: 'white',
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
        lineHeight: 20,
        textAlign: 'center'
    },
    primary: {
        backgroundColor: PRIMARY_COLOR_BUTTON,
    },
    secondary: {
        backgroundColor: SECONDARY_COLOR_BUTTON,
    }
})