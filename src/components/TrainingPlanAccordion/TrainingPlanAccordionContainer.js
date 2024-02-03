import TrainingPlanAccordion from "./TrainingPlanAccordion"
import { useState, useEffect } from "react"
// import trainingData from "@data/trainingData"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    collection,
    query,
    where,
    onSnapshot,
    updateDoc,
    doc,
    getDoc,
} from "firebase/firestore"

const TrainingPlanAccordionContainer = ({ navigation, route }) => {
    const excerciseRequest = route.params?.data
    const additional = route.params?.additional // in this case document ID

    const [oldExcercise, setOldExcercise] = useState({ name: "" })

    const [trainingData, setTrainingData] = useState([])

    const collectionRef = collection(FIRESTORE_DB, "plan")

    // id it is documentId
    const updateExcercise = async (name, series, reps, weight, id) => {
        try {
            const docRef = doc(collectionRef, id)
            const docSnap = await getDoc(docRef)
            const data = docSnap.data()

            // console.log(data)

            // console.log(data)
            // Modify the array locally
            const exerciseIndex = data.excercises.findIndex(
                (exercise) => exercise.id === name
            )

            if (exerciseIndex !== -1) {
                // Update the specific exercise
                data.excercises[exerciseIndex].series = series
                data.excercises[exerciseIndex].reps = reps
                data.excercises[exerciseIndex].weight = weight
            }

            // Update the entire array in the document
            await updateDoc(docRef, {
                excercises: data.excercises,
            })

            console.log("Exercise updated successfully")
        } catch (error) {
            console.error("Error updating exercise:", error)
        }
    }

    const deleteExcercise = async (name, id) => {
        try {
            const docRef = doc(collectionRef, id)
            const docSnap = await getDoc(docRef)
            const data = docSnap.data()

            const exerciseIndex = data.excercises.findIndex(
                (exercise) => exercise.name === name
            )

            if (exerciseIndex !== -1) {
                data.excercises.splice(exerciseIndex, 1)

                await updateDoc(docRef, {
                    excercises: data.excercises,
                })

                console.log("Exercise deleted successfully")
            } else {
                console.error("Exercise with the given name not found")
            }
        } catch (error) {
            console.error("Error deleting exercise:", error)
        }
    }

    const addExcerciseToDatabase = async () => {
        
        
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
        console.log(additional)
        console.log(excerciseRequest)
        const docRef = doc(collectionRef, additional)
        try {
            const docSnap = await getDoc(docRef)
            const data = docSnap.data()

            data.excercises.push(excerciseRequest)

            await updateDoc(docRef, {
                excercises: data.excercises,
            })

            console.log("Exercise added successfully")
        } catch (error) {
            console.error("Error adding exercise:", error)
        }
    }

    useEffect(() => {
        const handleAddExcercise = async () => {
            if (excerciseRequest) {
                if (oldExcercise.name !== data.item.name) {
                    setOldExcercise(data.item)
                    addExcerciseToDatabase(excerciseRequest)
                }
            }
        }
        handleAddExcercise()

        const getTrainingData = async () => {
            const userData = await AsyncStorage.getItem("user")
            const user = JSON.parse(userData)
            // console.log(user.uid)

            const arr = []
            const q = query(collectionRef, where("userId", "==", user.uid))
            try {
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const updatedArr = []
                    querySnapshot.forEach((doc) => {
                        const dataWithId = { ...doc.data(), documentId: doc.id }
                        // console.log(dataWithId)
                        if (typeof dataWithId === "undefined") return null
                        const exercisesWithId = dataWithId.excercises.map(
                            (exercise) => ({
                                ...exercise,
                                documentId: doc.id,
                            })
                        )
                        dataWithId.excercises = exercisesWithId
                        updatedArr.push(dataWithId)
                    })
                    setTrainingData(updatedArr)
                })

                return () => unsubscribe() // Unsubscribe when component unmounts
            } catch (error) {
                console.error(error)
            }
        }
        getTrainingData()
    }, [excerciseRequest])

    const goToCreator = () => {
        navigation.navigate("Training Plan Creator")
    }
    const addExcercise = (documentId) => {
        navigation.navigate("Atlas List", {
            intent: "Training Plan",
            additional: documentId
        })
    }

    const props = {
        trainingData: trainingData,
        updateExcercise: updateExcercise,
        deleteExcercise: deleteExcercise,
        goToCreator: goToCreator,
        addExcercise: addExcercise,
    }
    return <TrainingPlanAccordion {...props} />
}

export default TrainingPlanAccordionContainer
