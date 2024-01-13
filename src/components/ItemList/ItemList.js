import { View } from "react-native"
import styles from "@utils/styles"
import colors from "@utils/colors"
import { Text } from "react-native-paper"
import { List } from "react-native-paper"
import TrainingPlanAccordionItemContainer from "../TrainingPlanAccordionItem/TrainingPlanAccordionItemContainer"
import TrainingPlanAccordionItemAddExcercise from "@components/TrainingPlanCreatorList/TrainingPlanAccordionItemAddExcercise"
const ItemList = ({
    addExcercise,
    excercises,
    updateExcercise,
    deleteExcercise,
}) => {
    // console.log(excercises)
    return (
        <>
            <List.Section>
                {excercises.map((item) => (
                    <TrainingPlanAccordionItemContainer
                        excerciseData={item}
                        updateExcercise={updateExcercise}
                        deleteExcercise={deleteExcercise}
                    />
                ))}
            </List.Section>
            <List.Section>
                <TrainingPlanAccordionItemAddExcercise
                    addExcercise={addExcercise}
                />
            </List.Section>
        </>
    )
}

export default ItemList
