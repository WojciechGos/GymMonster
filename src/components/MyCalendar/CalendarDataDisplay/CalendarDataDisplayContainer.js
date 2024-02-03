import { useEffect, useState } from "react"
import CalendarDataDisplay from "./CalendarDataDisplay"
import trainingData from "@data/trainingData.json"
import trainingPlanData from "@data/trainingPlanData.json"

import { FIRESTORE_DB } from "../../../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    collection,
    getDocs,
    query,
    where,
    onSnapshot,
} from "firebase/firestore"

const CalendarDataDisplayContainer = ({ selectedDay }) => {
    const [training, setTraining] = useState({})
    useEffect(() => {
        const getTrainingFromGivenDate = async () => {

            const collectionRef = collection(FIRESTORE_DB, "trainingPlanned")

            const userData = await AsyncStorage.getItem("user")
            const user = JSON.parse(userData)

            const q = query(
                collectionRef,
                where("userId", "==", user.uid),
                where("date", "==", selectedDay)
            )
            try {
                const unsubscribe = onSnapshot(q, (querySnapshot) => {

                  if (querySnapshot.docs.length === 1){

                    setTraining(querySnapshot.docs[0].data())
                  }else{
                    setTraining("")
                  }
                   
                })

                // if (trainingInGivenDate !== "null") {
                //     console.log("///////////////////////////////////")
                  
                // } else setTraining("")

                return () => unsubscribe() // Unsubscribe when component unmounts
            } catch (error) {
                console.error(error)
            }
        }

        getTrainingFromGivenDate()
    }, [selectedDay])

    const props = {
        trainingData: training,
        selectedDay: selectedDay,
    }

    return <CalendarDataDisplay {...props} />
}

export default CalendarDataDisplayContainer
