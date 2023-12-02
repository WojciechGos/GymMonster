import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import TrainingPlanAccordionContainer from "@components/TrainingPlanAccordion/TrainingPlanAccordionContainer"


const TrainingPlan = () => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingPlanAccordionContainer />
        </View>
    )
}
export default TrainingPlan
