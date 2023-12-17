import { List } from "react-native-paper"
import { Entypo } from "@expo/vector-icons"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"
import { View } from "react-native"

const TrainingPlanAccordionItemAddExcercise = () => {
    return (
        <List.Item
            key={0}
            left={() => (
                <View style={styles.trainingListContentWrapper}>
                    <Text style={styles.h4}>Dodaj ćwiczenie</Text>
                </View>
            )}
            right={() => <Entypo name="plus" size={24} color={colors.text} />}
        />
    )
}
export default TrainingPlanAccordionItemAddExcercise
