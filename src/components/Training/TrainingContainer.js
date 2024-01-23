import React, { useState } from 'react';
import Training from "./Training"
import trainingData from '@data/trainingData'
import excercisesListData from '@data/excercisesListData'

const TrainingContainer = () => {
    const currentMaxId = excercisesListData.reduce((maxId, item) => (item.id > maxId ? item.id : maxId), 0);
    const nextAvailableId = currentMaxId + 1;

    const [exerciseData, setExerciseData] = useState({
        id: nextAvailableId,
        date: new Date().toISOString().split('T')[0],
    });

    const handleSave = () => {
        console.log('Saved Data:', exerciseData);
    };

    const handleRepsChange = (reps, item, i) => {
        const matchingExercise = excercisesListData.find(exercise => {
            console.log(exercise.title.toLowerCase());
            return exercise.title.toLowerCase() === item.name.toLowerCase();
        });
        
        const exerciseName = matchingExercise?.name || 'defaultKey';

        setExerciseData(prevData => ({
            ...prevData,
            name: exerciseName
        }))
    }

    const props = {
        handleRepsChange: handleRepsChange,
        exerciseData: exerciseData,
        handleSave: handleSave,
        trainingData: trainingData[0],
        excercisesListData: excercisesListData
    }

    return <Training {...props} />
}

export default TrainingContainer