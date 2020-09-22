import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f7',
        flexGrow: 1
    },
    teacherList : {
        marginTop : -40,
        marginBottom : 200
        
    },
    searchForm : {
        marginBottom : 24,

    },
    label : {
        color : '#d4c2ff',

    },
    input : {
        height:54,
        backgroundColor : 'white',
        borderRadius : 8 ,
        justifyContent : 'center',
        paddingHorizontal : 16,
        marginTop: 4,
        marginBottom : 16
    },
    inputGroup : {
        flexDirection : 'row',
        justifyContent : 'space-between',

    },
    inputBlock : {
        width : '48%',
    },
    submitButton : {
        backgroundColor : '#04d361',
        flexGrow : 1,
        height :56 ,
        borderRadius : 8 ,
        justifyContent : 'center',
        alignItems : 'center'
    },
    submitButtonText : {
        color: 'white',
        fontWeight: '700',
        fontSize : 16
    }
    
})



export default styles