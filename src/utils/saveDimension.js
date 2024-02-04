import {FIRESTORE_DB} from "../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
} from "firebase/firestore"

const saveDimension = async (data) => {
   console.log(data)
    const collectionPlanRef = collection(FIRESTORE_DB, "dimensions")
    console.log(collectionPlanRef)

    const userData = await AsyncStorage.getItem("user")
    const user = JSON.parse(userData)

    try {
        const docRef = await addDoc(collectionPlanRef, {
            date: getCurrentDate(),
            ...data,
            userId: user.uid,
        })
       console.log(docRef)
       console.log("kmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
    } catch (error) {
        console.log(error)
    }
}

function getCurrentDate() {
    const currentDate = new Date()

    // Get the components of the date
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, "0") // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, "0")

    // Format the date as "YYYY-MM-DD"
    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
}

export default saveDimension
