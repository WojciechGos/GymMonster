import StatisticAccordion from "./StatisticAccordion"
import { useState, useEffect } from "react"
import excercisesHistoryListData from "@data/excercisesHistoryListData" 
import { getFirestore, collection, query, getDocs, where  } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../../firebaseConfig"

const StatisticAccordionContainer = ({route, navigation}) => {
    const name = route.params.data.item.name
    const data = excercisesHistoryListData.filter((item) => item.name === name);

    console.log('StatisticAccordionContainer item', route.params.data.item.name)

    const [expanded, setExpanded] = useState(true)
    const [history, setHistory] = useState([])
    const handlePress = () => setExpanded(!expanded)

    useEffect(() => {
        const tmp = async () => {
            const collectionPlanRef = collection(FIRESTORE_DB, "plan")
            const collectionTrainingPlannedRef = collection(
                FIRESTORE_DB,
                "trainingHistoric"
            )
        }

        const fetchTrainingHistory = async () => {
            const trainingHistoryCollection = collection(
                FIRESTORE_DB,
                "trainingHistoric"
            )
            // const userData = await AsyncStorage.getItem("user")

            // // Parse the JSON data
            // const user = JSON.parse(userData)

            // Create a query to get documents where userId matches and name is equal to item.name

            // console.log(user.uid)
            // console.log(item.name)
            const q = query(
                trainingHistoryCollection,
                // where("userId", "==", user.uid),
                where("name", "==", name)
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

        console.log("useEffect")
        // console.log("StatisticAccordionContainer item", item)
    }, [name])

    const props = {
        expanded: expanded,
        handlePress: handlePress,
        data: history,
        navigation: navigation,
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer