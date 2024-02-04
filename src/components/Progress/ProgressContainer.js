import Progress from "./Progress"

import { useState, useEffect } from "react"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    collection,
    query,
    where,
    onSnapshot,
    updateDoc,
    doc,
    getDocs,
    orderBy
} from "firebase/firestore" 

const ProgressContainer = ({ navigation }) => {
    [progressData, setProgressData] = useState(null)
    const collectionRef = collection(FIRESTORE_DB, "dimensions")

    const getProgressData = async () => {
        const userData = await AsyncStorage.getItem("user")
        const user = JSON.parse(userData)
        // console.log(user.uid)

        const arr = []

        const q = query(
            collectionRef,
            where("userId", "==", user.uid),
              orderBy("date"),
        )
        try {
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const newDataList = []
                // Return the closest plan
                const response = querySnapshot.forEach(element => {
                     newDataList.push(element.data())
                });
                console.log("response")
                console.log(newDataList)
                setProgressData(newDataList)
            })
            return () => unsubscribe() 
            // const querySnapshot = await getDocs(q)
            // console.log("snap")

            // if (querySnapshot.empty) {
            //     return
            // }
            // const newDataList = []

            // // Return the closest plan
            // const response = querySnapshot.forEach(element => {
            //      newDataList.push(element.data())
            // });
            // console.log("response")
            // console.log(newDataList)
            // setProgressData(newDataList)
        } catch (error) {
            console.error("Error fetching closest plan:", error)
        }
    }

    useEffect(() => {
        getProgressData()
    }, [])

    const props = {
        data: progressData,
    }

    return <Progress {...props} />
}

export default ProgressContainer
