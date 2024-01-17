import React from "react"
import AtlasList from "./AtlasList"

const AtlasListContainer = ({ navigation, route }) => {
    
    const intent = route.params?.intent
    
    const goToExerciseList = (name) => {
        console.log(name)
        navigation.navigate("Excercise List", {name:name, intent:intent})
    }



    const props = {
        goToExerciseList: goToExerciseList,
    }
    return <AtlasList {...props} />
}



export default AtlasListContainer
