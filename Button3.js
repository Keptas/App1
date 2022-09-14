import react from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Button3(props){
    return(
        <TouchableOpacity onPress={()=>props.click()}>
            <View style={styles.button3}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )

    
}
