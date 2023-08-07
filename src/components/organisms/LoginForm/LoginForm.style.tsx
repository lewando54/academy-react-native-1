import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 20,
      padding: '10%',
      backgroundColor: 'white',
      width: 320,
      borderRadius: 8,
      shadowColor: 'rgba(0,0,0,0.6)',
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 8
    }
});