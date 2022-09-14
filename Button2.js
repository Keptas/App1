import react from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Button2(props){
    return(
        <TouchableOpacity onPress={()=>props.click()}>
            <View style={styles.button2}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )

    
}
