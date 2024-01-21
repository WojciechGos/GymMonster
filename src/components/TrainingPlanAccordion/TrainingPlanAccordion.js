import { View, ScrollView } from "react-native"
import styles from "@utils/styles"
import { List, Divider, useTheme } from "react-native-paper"
import TrainingPlanAccordionItemContainer from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItemContainer"
import TrainingPlanAccordionItemAddExcercise from "@components/TrainingPlanCreatorList/TrainingPlanAccordionItemAddExcercise"
import colors from "@utils/colors"
import GotoTrainingCreatorIcon from "./GotoTrainingCreatorIcon"

const TrainingPlanAccordion = ({
    trainingData,
    updateExcercise,
    deleteExcercise,
    goToCreator,
    addExcercise,
}) => {
    const theme = useTheme()
    return (
        <ScrollView>
            <List.Section key={0}>
                {trainingData.map((trainingSection) => (
                    <List.Accordion
                        key={trainingSection.id}
                        title={trainingSection.name}
                        style={styles.accordion}
                        theme={{ colors: { primary: "#DFDFDF" } }}
                        titleStyle={styles.h3}
                    >
                        {trainingSection.excercises.map((excercise) => (
                            <>
                                <TrainingPlanAccordionItemContainer
                                    key={excercise.documentId}
                                    excerciseData={excercise}
                                    updateExcercise={updateExcercise}
                                    deleteExcercise={deleteExcercise}
                                />
                                <Divider key={`${excercise.id}-divider`} />
                            </>
                        ))}

                        <TrainingPlanAccordionItemAddExcercise
                            key={1} 
                            addExcercise={addExcercise}
                            documentId={trainingSection.documentId}
                        />
                    </List.Accordion>
                ))}
            </List.Section>
            <GotoTrainingCreatorIcon key={2} goToCreator={goToCreator} />
        </ScrollView>
    )
}

export default TrainingPlanAccordion
