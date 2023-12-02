import { List, Text } from "react-native-paper"
import { View } from "react-native"
import TrainingPlanAccordionItemContent from "./TrainingPlanAccordionItemContent"
import { Feather } from '@expo/vector-icons'; 
import colors from "@utils/colors"

const TrainingPlanAccordionItem = ({ excerciseData }) => {
    return (
        <>
            <List.Item
                left={() => (
                    <TrainingPlanAccordionItemContent
                        excerciseData={excerciseData}
                    />
                )}
                right={() => <Feather name="edit-3" size={24} color={colors.text} />}
            />
        </>
    )
}

export default TrainingPlanAccordionItem
