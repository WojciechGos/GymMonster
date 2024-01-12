import ExcerciseDetails from "./ExcerciseDetails"

const ExcerciseDetailsContainer = ({ route }) => {
    const item = route.params?.item

    const props = {
        exerciseName: item.title,
        exerciseDescription: item.description,
        url: item.url
    }

    return <ExcerciseDetails {...props} />
}

export default ExcerciseDetailsContainer
