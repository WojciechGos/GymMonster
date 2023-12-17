import { List } from "react-native-paper"
import { Pressable } from "react-native"
import TrainingPlanAccordionItemContent from "./TrainingPlanAccordionItemContent"
import { Feather } from "@expo/vector-icons"
import colors from "@utils/colors"

const TrainingPlanAccordionItem = ({ excerciseData, showForm }) => {

    return (
        <>
            <List.Item
                key={excerciseData.id}
                left={() => (
                    <TrainingPlanAccordionItemContent
                        excerciseData={excerciseData}
                    />
                )}
                right={() => (
                    <Pressable onPress={() => showForm()}>
                        <Feather name="edit-3" size={24} color={colors.text} />
                    </Pressable>
                )}
            />
        </>
    )
}

export default TrainingPlanAccordionItem
