import Training from "./Training"
import trainingData from '@data/trainingData'

const TrainingContainer = ()=>{
    const props = {
        trainingData: trainingData[0]
    }
    return <Training {...props}/>
}

export default TrainingContainer