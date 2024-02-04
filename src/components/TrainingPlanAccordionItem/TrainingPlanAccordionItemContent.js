import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"

const TrainingPlanAccordionItemContent = ({ excerciseData }) => {
    return (
        <View style={styles.trainingListContentWrapper}>
            <Text style={styles.h4}>{excerciseData.title}:</Text>
            <View style={styles.trainingListContentWrapper}>
                <Text style={styles.h4}>
                    {"\u2022"} {excerciseData.series} serie
                </Text>
                <Text style={styles.h4}>
                    {"\u2022"} {excerciseData.reps} powtórzeń
                </Text>
                <Text style={styles.h4}>
                    {"\u2022"} {excerciseData.weight} kg
                </Text>
            </View>
        </View>
    )
}

export default TrainingPlanAccordionItemContent
