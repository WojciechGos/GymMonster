import TrainingPlanAccordion from "./TrainingPlanAccordion"
import { useState } from "react"
import trainingData from "./trainingData"

const TrainingPlanAccordionContainer = () => {
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)
    const props = {
        expanded: expanded,
        handlePress: handlePress,
        trainingData: trainingData
    }
    return <TrainingPlanAccordion {...props} />
}

export default TrainingPlanAccordionContainer