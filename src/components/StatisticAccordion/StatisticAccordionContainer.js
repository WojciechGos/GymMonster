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
    query,
    where,
    orderBy
} from "firebase/firestore"

const StatisticAccordionContainer = ({ route }) => {
    const item = route.params?.item

    console.log("item")
    console.log(item)

    const [history, setHistory] = useState([])
 


    useEffect(() => {

        const tmp = async ()=>{
            const collectionPlanRef = collection(FIRESTORE_DB, "plan")
            const collectionTrainingPlannedRef = collection(
                FIRESTORE_DB,
                "trainingHistoric"
            )
        }

        const fetchTrainingHistory = async ( ) => {
            const trainingHistoryCollection = collection(
                FIRESTORE_DB,
                "trainingHistoric"
            )
            const userData = await AsyncStorage.getItem("user")

            // Parse the JSON data
            const user = JSON.parse(userData)

            // Create a query to get documents where userId matches and name is equal to item.name
            
            console.log(user.uid)
            console.log(item.name)
            const q = query(
                trainingHistoryCollection,
                where("userId", "==", user.uid),
                where("name", "==", item.name ),
                // orderBy("date", "desc") // You can adjust the ordering based on your needs
            )

            try {
                const querySnapshot = await getDocs(q)
                const historyData = []

                querySnapshot.forEach((doc) => {
                    // Assuming each document has a data() method to get its data
                    const data = doc.data()
                    historyData.push(data) 
                })
                setHistory(historyData)
                console.log("histrory ")
                console.log(history)
                
            } catch (error) {
                console.error("Error fetching training history:", error)

            }
        }
        fetchTrainingHistory()

        // console.log(item)
        console.log("StatisticAccordionContainer item", item)
    }, [item])

    const props = {
        data: history
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer
