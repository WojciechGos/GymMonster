import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import TrainingPlanAccordionContainer from "@components/TrainingPlanAccordion/TrainingPlanAccordionContainer"


const TrainingPlan = ({navigation}) => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingPlanAccordionContainer navigation={navigation}/>
        </View>
    )
}
export default TrainingPlan
