import React from "react"
import AtlasList from "./AtlasList"

const AtlasListContainer = ({ navigation, route }) => {
    
    const intent = route.params?.intent
    const additional = route.params?.additional
    
    const goToExerciseList = (name) => {
        // console.log(name)
        navigation.navigate("Excercise List", {name:name, intent:intent, additional:additional})
    }



    const props = {
        goToExerciseList: goToExerciseList,
    }
    return <AtlasList {...props} />
}



export default AtlasListContainer
