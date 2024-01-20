import TrainingPlanAccordion from "./TrainingPlanAccordion"
import { useState, useEffect } from "react"
// import trainingData from "@data/trainingData"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    collection,
    getDocs,
    query,
    where,
    onSnapshot,
} from "firebase/firestore"

const TrainingPlanAccordionContainer = ({ navigation }) => {
    const [expanded, setExpanded] = useState(true)
    const [trainingData, setTrainingData] = useState([])
    const handlePress = () => setExpanded(!expanded)

    const updateExcercise = async () => {}

    const deleteExcercise = async () => {}

    useEffect(() => {
        const getTrainingData = async () => {
            const collectionRef = collection(FIRESTORE_DB, "plan")
            const userData = await AsyncStorage.getItem("user")
            const user = JSON.parse(userData)
            console.log(user.uid)

            const arr = []
            const q = query(collectionRef, where("userId", "==", user.uid))
            try {
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const updatedArr = []
                    querySnapshot.forEach((doc) => {
                        updatedArr.push(doc.data())
                    })
                    setTrainingData(updatedArr)
                })

                return () => unsubscribe() // Unsubscribe when component unmounts
            } catch (error) {
                console.error(error)
            }

            // querySnapshot.forEach((doc) => {
            //     console.log(`${doc.id} => ${doc.data()}`)
            // })
        }
        getTrainingData()
    }, [])

    const goToCreator = () => {
        navigation.navigate("Training Plan Creator")
    }

    const props = {
        expanded: expanded,
        handlePress: handlePress,
        trainingData: trainingData,
        updateExcercise: updateExcercise,
        deleteExcercise: deleteExcercise,
        goToCreator: goToCreator,
    }
    return <TrainingPlanAccordion {...props} />
}

export default TrainingPlanAccordionContainer
