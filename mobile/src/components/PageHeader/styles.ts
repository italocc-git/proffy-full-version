import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container : {
        padding: 40,
        backgroundColor: '#8257e5'
    },
    topBar :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title :{
        fontWeight : 'bold',
        color : '#FFF',
        fontSize:  24,
        maxWidth : 160,
        marginVertical : 40,
        lineHeight : 32

    },
    header: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    }

})

export default styles