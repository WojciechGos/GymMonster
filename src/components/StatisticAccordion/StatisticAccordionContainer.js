import StatisticAccordion from "./StatisticAccordion"

import excercisesHistoryListData from "@data/excercisesHistoryListData"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
} from "firebase/firestore"

const StatisticAccordionContainer = ({ route }) => {
    const item = route.params?.item

    console.log(item)

    const [history, setHistory] = useState([])

    useEffect(() => {
        const fetchTrainingHistory = async (userId, exerciseName) => {
            const trainingHistoryCollection = collection(
                FIRESTORE_DB,
                "trainingHistoric"
            )

            // Create a query to get documents where userId matches and name is equal to item.name
            const q = query(
                trainingHistoryCollection,
                where("userId", "==", userId),
                where("name", "==", exerciseName),
                orderBy("timestamp", "desc") // You can adjust the ordering based on your needs
            )

            try {
                const querySnapshot = await getDocs(q)
                const historyData = []

                querySnapshot.forEach((doc) => {
                    // Assuming each document has a data() method to get its data
                    const data = doc.data()
                    historyData.push(data)
                })

                return historyData
            } catch (error) {
                console.error("Error fetching training history:", error)
                return []
            }
        }

        // console.log(item)
        console.log("StatisticAccordionContainer item", item)
    }, [item])

    const props = {
        data: excercisesHistoryListData,
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer
