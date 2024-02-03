import React, { useState } from 'react';
import Training from "./Training"
// import trainingData from '@data/trainingData'

const TrainingContainer = ({route})=>{
    const training = route.params?.trainingData
    console.log("training   mmmmmmmmmmmmmmm")
    console.log(training)
 
    const handleSave = () => {
        console.log('Saved Data:', exerciseData);
    };
    
    const [exerciseData, setExerciseData] = useState({});

    const props = {
        setExerciseData: setExerciseData,
        exerciseData: exerciseData,
        handleSave: handleSave,
        trainingData: training,
    }

    return <Training {...props}/>
}

export default TrainingContainer