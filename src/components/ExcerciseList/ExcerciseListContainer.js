import ExcerciseList from "./ExcerciseList"
import excercisesListData from "@data/excercisesListData.json"
import { useEffect, useState } from "react"

const ExcerciseListContainer = ({ navigation, route }) => {
    const name = route.params?.name
    const intent = route.params?.intent
    const additional = route.params?.additional

    // console.log("name" + name)
    const [excercises, setExcercises] = useState([])

    useEffect(() => {
        const response = excercisesListData.filter(
            (exercise) => exercise.partName === name
        )

        // console.log(response)
        try {
            if (response) {
                // console.log("response")
                // console.log(response)
                setExcercises(response)
            } else {
                console.error(`No data found for exercise with name: ${name}`)
            }
        } catch (error) {
            console.error("Error fetching and setting exercise data:", error)
        }
    }, [name])

    const goToIntent = (item) => {
        if (intent) {
            navigation.navigate(intent, { data: { item }, additional: additional })
        } else {
            navigation.navigate("Excercise Details", { item })
        }
    }
    
    const props = {
        goToIntent: goToIntent,
        excercises: excercises ? excercises : [],
        title: excercises ? excercises.partTitle : "",
    }
    return <ExcerciseList {...props} />
}

export default ExcerciseListContainer
