import React from "react"
import AtlasList from "./AtlasList"

const AtlasListContainer = ({ navigation }) => {
    const goToExerciseList = (name) => {
        console.log(name)
        navigation.navigate("Excercise List", {name})
    }


    const props = {
        goToExerciseList: goToExerciseList,
    }
    return <AtlasList {...props} />
}



export default AtlasListContainer
