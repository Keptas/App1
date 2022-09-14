import react from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Button1(props){
    return(
        <TouchableOpacity onPress={()=>props.click()}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )

    
}
