import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import Header from "@components/Header/Header"

const Pedometer = ()=>{
    return (
        <View>
            <Header title='Liczba kroków'/>
            <Text style={styles.h3}>
                Pedometer
            </Text>
        </View>
    )
}

export default Pedometer