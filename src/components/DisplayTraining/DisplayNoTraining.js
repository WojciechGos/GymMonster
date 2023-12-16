import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"

const DisplayNoTraining = ({date})=>{
    return (
        <View style={styles.excercisesContainer}>
            <Text style={[styles.h3, styles.dateStyle]}>{date}</Text>
        </View>
    )
}

export default DisplayNoTraining 