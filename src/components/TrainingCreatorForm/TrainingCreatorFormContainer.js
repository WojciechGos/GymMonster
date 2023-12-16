import TrainingCreatorForm from "./TrainingCreatorForm"

const TrainingCreatorFormContainer = ()=>{

    const saveTraining = ()=>{

    }

    const props = {
        saveTraining: saveTraining,
    }
    return <TrainingCreatorForm {...props}/>
}

export default TrainingCreatorFormContainer