import TrainingPlanAccordionItem from "./TrainingPlanAccordionItem"
import TrainingPlanAccordionEditItem from "./TrainingPlanAccordionEditItem"
import { useState } from "react"

const TrainingPlanAccordionItemContainer = ({
    excerciseData,
    updateExcercise,
    deleteExcercise,
}) => {
    const [showEditForm, setShowEditForm] = useState()

    const [series, setSeries] = useState(excerciseData.series)
    const [reps, setReps] = useState(excerciseData.reps)
    const [weight, setWeight] = useState(excerciseData.weight)

    const showForm = () => {
        setShowEditForm(!showEditForm)
    }

    const props = {
        excerciseData: excerciseData,
        showForm: showForm,
    }
    const propsEdit = {
        excerciseData: excerciseData,
        updateExcercise: updateExcercise,
        deleteExcercise:deleteExcercise,
        showForm: showForm,
        series: series,
        setSeries: setSeries,
        reps: reps,
        setReps: setReps,
        weight: weight,
        setWeight: setWeight,
    }
    return (
        <>
            {showEditForm ? (
                <TrainingPlanAccordionEditItem {...propsEdit} />
            ) : (
                <TrainingPlanAccordionItem {...props} />
            )}
        </>
    )
}

export default TrainingPlanAccordionItemContainer
