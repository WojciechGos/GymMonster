import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from '@assets/styles'
import {Header} from '@ui'

const Pedometer = ()=>{
    return (
        <View>
            <Header title='Liczba kroków'/>
            <Text >
                Pedometer
            </Text>
        </View>
    )
}

export default Pedometer