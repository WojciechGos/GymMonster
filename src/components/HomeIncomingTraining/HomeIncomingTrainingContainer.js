import HomeIncomingTraining from "./HomeIncomingTraining"
import trainingData from '@data/trainingData'

const HomeIncomingTrainingContainer = ({navigation})=>{
    const navigateToTrainingStart = ()=>{
        navigation.navigate('Training')
        console.log('start training session')
    }
    const props = {
        trainingData: trainingData[0],
        navigateToTrainingStart: navigateToTrainingStart
    }
    return <HomeIncomingTraining {...props}/>
}

export default HomeIncomingTrainingContainer