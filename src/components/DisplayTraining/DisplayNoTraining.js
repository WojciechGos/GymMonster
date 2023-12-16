import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"

const DisplayNoTraining = ()=>{
    return (
        <View style={styles.emptyMessage}>
            <Text style={styles.h3}>
            </Text>
        </View>
    )
}

export default DisplayNoTraining