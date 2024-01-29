import React, { useState } from 'react';
import Training from "./Training"
import trainingData from '@data/trainingData'
import excercisesListData from '@data/excercisesListData'
import excercisesHistoryListData from '@data/excercisesHistoryListData'
import * as FileSystem from "expo-file-system"
import { FIRESTORE_DB } from "../../../firebaseConfig"
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
} from "firebase/firestore"

const TrainingContainer = ({ navigation }) => {
    const filePath = FileSystem.documentDirectory + "excercisesHistoryListData.json"
    const [exerciseData, setExerciseData] = useState({});

    const handleSave = async () => {
        const newData = transformData(exerciseData);
        const updatedHistoryListData = [...excercisesHistoryListData, ...newData];
        const collectionTrainingHistoricRef = collection(FIRESTORE_DB, "trainingHistoric")
        // const userData = await AsyncStorage.getItem("user")
        // const user = JSON.parse(userData)
        // console.log(user)

        try {
            const docRef = await addDoc(collectionTrainingHistoricRef, {
                excercises: updatedHistoryListData,
                userId: 'user.uid',
            })
            console.log("ref: " + docRef.id)
        } catch (error) {
            console.error(error)
        }

        // await clearVariables()
        navigation.navigate("Home")
    };


    const transformData = (exerciseData) => {
        const today = new Date();
        const todayFormatted = today.toISOString().split('T')[0];
        let id = 0;
        return Object.entries(exerciseData).map(([exerciseName, seriesData]) => {
            const series = Object.entries(seriesData).map(([serieName, serie]) => ({
                seria: parseInt(serieName.slice(-1)), // Extract and parse the seria number
                reps: parseInt(serie.repetitions),
                weight: parseInt(serie.weight),
            }));

            const exerciseNameEng = excercisesListData.find(item => item.title === exerciseName)?.name;
            id += 1;

            return {
                id: excercisesHistoryListData.length + id,
                date: todayFormatted,
                name: exerciseNameEng,
                series: series,
            };
        });
    }

    const props = {
        setExerciseData: setExerciseData,
        exerciseData: exerciseData,
        handleSave: handleSave,
        trainingData: trainingData[0]
    }

    return <Training {...props} />
}

export default TrainingContainer