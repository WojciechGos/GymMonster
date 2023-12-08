import HomeIncomingTraining from "./HomeIncomingTraining"
import trainingData from '@data/trainingData'

const HomeIncomingTrainingContainer = ()=>{
    const props = {
        trainingData: trainingData[0]
    }
    return <HomeIncomingTraining {...props}/>
}

export default HomeIncomingTrainingContainer