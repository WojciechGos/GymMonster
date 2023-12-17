import React from "react"
import ExerciseAtlasForm from "./ExerciseAtlasForm"

const ExerciseAtlasFormContainer = ({ navigation }) => {
    const goToExerciseBack = () => {
        navigation.navigate("ExerciseBack")
    }
    const goToExerciseChest = () => {
        navigation.navigate("ExerciseChest")
    }
    const goToExerciseShoulder = () => {
        navigation.navigate("ExerciseShoulder")
    }
    const goToExerciseArm = () => {
        navigation.navigate("ExerciseArm")
    }
    const goToExerciseAbs = () => {
        navigation.navigate("ExerciseAbs")
    }
    const goToExerciseLegs = () => {
        navigation.navigate("ExerciseLegs")
    }

    const props = {
        goToExerciseBack: goToExerciseBack,
        goToExerciseChest: goToExerciseChest,
        goToExerciseShoulder: goToExerciseShoulder,
        goToExerciseArm: goToExerciseArm,
        goToExerciseAbs: goToExerciseAbs,
        goToExerciseLegs: goToExerciseLegs,
    }
    return <ExerciseAtlasForm {...props} />
}
export default ExerciseAtlasFormContainer
