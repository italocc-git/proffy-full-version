import React, { ReactNode } from 'react';
import styles from './styles';
import { View , Image,Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title : string;
    headerRight? : ReactNode;
}

const PageHeader:React.FunctionComponent<PageHeaderProps> = (props) => {

    const navigation = useNavigation();
            
    function handleGoBack(){
            navigation.navigate('Landing');
    }
    return( 
        <View style={styles.container}>
            <View style={styles.topBar} >
            <BorderlessButton onPress={handleGoBack}>
                <Image source={backIcon} resizeMode='contain'  />
            </BorderlessButton>    
            <Image source={logoImage} resizeMode='contain' />
            </View>


            <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            
            {props.headerRight }
            
            </View>
            {props.children}
        </View>
    )
}
export default PageHeader