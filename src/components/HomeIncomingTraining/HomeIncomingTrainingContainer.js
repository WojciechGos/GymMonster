import HomeIncomingTraining from "./HomeIncomingTraining"
// import trainingData from "@data/trainingData"
import { FIRESTORE_DB } from "../../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
} from "firebase/firestore"

const HomeIncomingTrainingContainer = ({ navigation }) => {
    const [trainingData, setTrainingData] = useState({ excercises: [] })
    const navigateToTrainingStart = () => {
        console.log("trainingData")
        console.log(trainingData)
        navigation.navigate("Training", {trainingData:trainingData})
        console.log("start training session")
    }

    useEffect(() => {
        const fetchTrainingData = async () => {
            const formattedCurrentDate = new Date()
            const currentDate = formattedCurrentDate.toISOString().split("T")[0] // Format current date to match "yyyy-mm-dd"

            console.log(currentDate)
            const planCollectionRef = collection(
                FIRESTORE_DB,
                "trainingPlanned"
            )
            const userData = await AsyncStorage.getItem("user")

            // Parse the JSON data
            const user = JSON.parse(userData)

            // Query to get plans ordered by date in ascending order
            const q = query(
                planCollectionRef,
                where("date", ">=", currentDate), // Filter plans with dates greater than or equal to the current date
                where("userId", '==', user.uid),
                orderBy("date"),
                limit(1) // Limit the result to 1 plan
            )

            try {
                const querySnapshot = await getDocs(q)
                console.log("snap")

                if (querySnapshot.empty) {
                    return 
                }

                // Return the closest plan
                const response = querySnapshot.docs[0].data()
                console.log("response")
                console.log(response)
                setTrainingData(response)
            } catch (error) {
                console.error("Error fetching closest plan:", error)

            }
        }

        fetchTrainingData()
        // console.log("training data home cos tam " + trainingData)

    }, [])

    const props = {
        trainingData: trainingData,
        navigateToTrainingStart: navigateToTrainingStart,
    }
    return <HomeIncomingTraining {...props} />
}

export default HomeIncomingTrainingContainer
