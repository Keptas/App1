import react from 'react'
import {View,Text} from 'react-native'
import styles from './styles'

export default function Box(props){
    return(
        
            <View style={styles.box}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        
    )
}