import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container : {
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor : '#e6e6f0',
        borderRadius: 8,
        marginBottom:16,
        overflow: 'hidden',
        

    },
    profile : {
        flexDirection: 'row',
        alignItems : 'center',
        padding : 24
    },
    avatar : {
        width : 64,
        height : 64,
        borderRadius : 32,
        backgroundColor :'#eee'
    },
    profileInfo : {
        marginLeft:16
    },
    name : {
        fontWeight : 'bold',
        color: '#32264d',
        fontSize : 20
    },
    subject :{
        color: '#6a6180',
        fontSize : 12 ,
        margin : 4

    },
    bio : {
        margin :24 ,
        fontSize : 14,
        lineHeight : 24,
        color : '#6a6180',
    },
    footer : {
        backgroundColor: '#fafafc',
        padding : 24 ,
        alignItems: 'center',
        marginTop : 24,
    },
    price : {
        color: '#6a6180',
        fontSize :14,

    },
    priceValue : {
        fontWeight : 'bold',
        color : '#8257e5',
        fontSize : 16 ,

    },
    buttonsContainer  :{
        flexDirection : 'row',
        marginTop : 16 ,

    },
    favoriteButton : {
        backgroundColor : '#8257e5',
        width : 56,
        height :56 ,
        borderRadius : 8 ,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10
    },
    favorited : {
        backgroundColor : '#e33d3d'
    },
    
    contactButton : {
        backgroundColor : '#04d361',
        flexGrow : 1,
        height :56 ,
        borderRadius : 8 ,
        justifyContent : 'center',
        alignItems : 'center'
    },
    contactButtonText : {
        color : 'white',
        fontSize : 16 ,
        marginLeft : 16
    },
    
})

export default styles;