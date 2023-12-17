import { View, ScrollView } from "react-native"
import styles from "@utils/styles"
import { List, Divider, useTheme } from "react-native-paper"
import TrainingPlanAccordionItemContainer from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItemContainer"
import TrainingPlanAccordionItemAddExcercise from "@components/TrainingPlanAccordionItem/TrainingPlanAccordionItemAddExcercise"
import colors from "@utils/colors"
import GotoTrainingCreatorIcon from "./GotoTrainingCreatorIcon"

const TrainingPlanAccordion = ({  handlePress, trainingData }) => {
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
                        // icon={({ expanded }) => (
                        //     <Text style={[{ color: "#DFDFDF" }]}>
                        //         {expanded ? "▼" : "▶"}
                        //     </Text>
                        // )}
                    >
                        {console.log(trainingSection)}
                        {trainingSection.excercises.map((excercise) => (
                            <>
                                <TrainingPlanAccordionItemContainer
                                    key={excercise.id}
                                    excerciseData={excercise}
                                />
                                <Divider key={`${excercise.id}-divider`} />
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
