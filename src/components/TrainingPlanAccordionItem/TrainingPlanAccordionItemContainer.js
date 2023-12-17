import TrainingPlanAccordionItem from "./TrainingPlanAccordionItem"
import TrainingPlanAccordionEditItem from "./TrainingPlanAccordionEditItem"
import { useState } from "react"

const TrainingPlanAccordionItemContainer = ({ excerciseData }) => {
    const [showEditForm, setShowEditForm] = useState()
    const showForm = () => {
        setShowEditForm(!showEditForm)
    }
    const props = {
        excerciseData: excerciseData,
        showForm: showForm,
    }
    return (
        <>
            {showEditForm ? (
                <TrainingPlanAccordionEditItem {...props} />
            ) : (
                <TrainingPlanAccordionItem {...props} />
            )}
        </>
    )
}

export default TrainingPlanAccordionItemContainer
