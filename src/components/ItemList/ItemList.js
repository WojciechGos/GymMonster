import { View } from "react-native"
import styles from "@utils/styles"
import colors from "@utils/colors"
import { Text } from "react-native-paper"
import { List } from "react-native-paper"
import TrainingPlanAccordionItem from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItem"
import TrainingPlanAccordionItemAddExcercise from "@components/TrainingPlanCreatorList/TrainingPlanAccordionItemAddExcercise"
const ItemList = ({ addExcercise }) => {
    return (
        // <View>
        //     <Text style={styles.h2}>

        //     </Text>
        // </View>
        <List.Section>
            {/* <TrainingPlanAccordionItem/> */}
            <TrainingPlanAccordionItemAddExcercise addExcercise={addExcercise}/>
        </List.Section>
    )
}

export default ItemList