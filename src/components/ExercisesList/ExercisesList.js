import { View } from "react-native"
import styles from "@utils/styles"
import colors from "@utils/colors"
import { Text } from "react-native-paper"
import { List } from "react-native-paper"
import TrainingPlanAccordionItem from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItem"
import TrainingPlanAccordionItemAddExcercise from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItemAddExcercise"
const ExercisesList = ()=>{
    return (
        // <View>
        //     <Text style={styles.h2}>
                
        //     </Text>
        // </View>
        <List.Section>
            {/* <TrainingPlanAccordionItem/> */}
            <TrainingPlanAccordionItemAddExcercise/>
        </List.Section>
    )
}

export default ExercisesList