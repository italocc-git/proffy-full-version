import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
    container: {
        backgroundColor: '#8257e5',
        flexGrow: 1,
        justifyContent: 'center',
        padding : 40
    },
    banner: {
        width:'100%',
        resizeMode:'contain' /* Redimensionar a imagem para todo conteudo ficar visivel */
    },
    title : {
        fontFamily:'Poppins_400Regular',
        color: '#fff',
        fontSize:20,
        lineHeight:30,
        marginTop:80,
    },
    titleBold : {   
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer :{
        flexDirection:'row',
        marginTop: 40,
        justifyContent:'space-between'
    },
    button : {
        height: 150,
        width: '48%',
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 24,
        justifyContent:'space-between'
    },
    buttonPrimary :{    
        backgroundColor: '#9871f5'
    },
    buttonText : {
        fontFamily: 'Archivo_700Bold',
        color:'#fff',
        fontSize:20
    },
    buttonSecondary : {
        backgroundColor:'#04d361'
    },
    totalConnections :{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize:12,
        lineHeight:20,
        maxWidth:140,
        marginTop: 20
    }
})

export default styles;