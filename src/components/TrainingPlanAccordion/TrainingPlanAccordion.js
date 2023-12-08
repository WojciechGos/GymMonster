import { View, ScrollView } from "react-native"
import styles from "@utils/styles"
import { List, Divider } from "react-native-paper"
import TrainingPlanAccordionItem from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItem"
import TrainingPlanAccordionItemAddExcercise from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItemAddExcercise"
import colors from "@utils/colors"
import GotoTrainingCreatorIcon from "./GotoTrainingCreatorIcon"

const TrainingPlanAccordion = ({ expanded, handlePress, trainingData }) => {
    return (
        <ScrollView>
            <List.Section>
                {trainingData.map((trainingSection) => (
                    <List.Accordion
                        key={trainingSection.id}
                        title={trainingSection.name}
                        style={styles.accordion}
                        titleStyle={styles.h3}
                        icon={({ expanded }) => (
                            <Text style={{ color: colors.text }}>
                                {expanded ? "▼" : "▶"}
                            </Text>
                        )}
                    >
                        {trainingSection.excercises.map((excercise) => (
                            <>
                                <TrainingPlanAccordionItem
                                    key={excercise.id}
                                    excerciseData={excercise}
                                />
                                <Divider />
                            </>
                        ))}
                        <TrainingPlanAccordionItemAddExcercise />
                    </List.Accordion>
                ))}
            </List.Section>
            <GotoTrainingCreatorIcon />
        </ScrollView>
    )
}

export default TrainingPlanAccordion
