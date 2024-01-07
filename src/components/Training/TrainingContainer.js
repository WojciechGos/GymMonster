import React, { useState } from 'react';
import Training from "./Training"
import trainingData from '@data/trainingData'

const TrainingContainer = ()=>{
    const handleSave = () => {
        console.log('Saved Data:', exerciseData);
    };
    
    const [exerciseData, setExerciseData] = useState({});

    const props = {
        setExerciseData: setExerciseData,
        exerciseData: exerciseData,
        handleSave: handleSave,
        trainingData: trainingData[0]
    }

    return <Training {...props}/>
}

export default TrainingContainer