import TrainingPlanAccordion from "./TrainingPlanAccordion"
import { useState } from "react"
import trainingData from '@data/trainingData'
import axios from "axios"


const TrainingPlanAccordionContainer = () => {
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)

    const updateExcercise = async ()=>{

    }
    const deleteExcercise = async ()=>{

    }

    const props = {
        expanded: expanded,
        handlePress: handlePress,
        trainingData: trainingData,
        updateExcercise: updateExcercise,
        deleteExcercise: deleteExcercise,
    }
    return <TrainingPlanAccordion {...props} />
}

export default TrainingPlanAccordionContainer