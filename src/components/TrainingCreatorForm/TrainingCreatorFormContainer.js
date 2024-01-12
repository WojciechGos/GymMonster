import TrainingCreatorForm from "./TrainingCreatorForm"

const TrainingCreatorFormContainer = ({ navigation, route }) => {
    const data = route.params?.data
    console.log(data)
    const saveTraining = () => {}

    const addExcercise = ()=>{
        navigation.navigate("Atlas List", { intent: "Training Plan Creator" })
    }

    const props = {
        saveTraining: saveTraining,
        addExcercise: addExcercise,
    }
    return <TrainingCreatorForm {...props} />
}

export default TrainingCreatorFormContainer
