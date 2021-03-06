import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight+20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    input: {
  background: '#f2f2f2',
  width: '100%',
  border: 0,
  padding: 15,
  fontSize: 14
    },  

    buttonText: {
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: 'blue',
        marginTop: '5%',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: '40%'
    },
});