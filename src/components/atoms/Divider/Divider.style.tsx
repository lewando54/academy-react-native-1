import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    div:{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    hr:{
        flex: 1,
        height: 2,
        backgroundColor: '#e5e7eb'
    },
    text:{
        padding: 4,
        borderWidth: 2, 
        borderColor: '#e5e7eb',
        borderRadius: 6,
        fontSize: 14,
        lineHeight: 20,
        margin: 0,
        textAlign: 'center',
        color: 'rgb(156 163 175)'
    }
})