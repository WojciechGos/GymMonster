import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import TrainingPlanAccordionContainer from "@components/TrainingPlanAccordion/TrainingPlanAccordionContainer"


const TrainingPlan = ({navigation, route}) => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingPlanAccordionContainer navigation={navigation}  route={route}/>
        </View>
    )
}
export default TrainingPlan
