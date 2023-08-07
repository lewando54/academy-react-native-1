import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    div:{
        display: 'flex',
        gap: 4,
        lineHeight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text:{
        color: 'rgb(107 114 128)',
        fontSize: 14
    },
    link:{
        color: 'rgb(107 114 128)',
        textDecorationLine: 'underline',
        fontSize: 14
    }
})