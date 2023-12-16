import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
const HomeIncomingTrainingExcercise = ({excercise})=>{
    return (
        <View style={styles.excerciseWrapper}>
            <Text style={[styles.h3, styles.excerciseTextGaps]}>
                {"\u2022"}
            </Text>
            <Text style={[styles.h4, styles.marginRight]}>
                {excercise.name}
            </Text>

            <Text style={styles.h4}>
                {excercise.series}x{excercise.reps}x{excercise.weight}
            </Text>
        </View>
    )
}

export default HomeIncomingTrainingExcercise