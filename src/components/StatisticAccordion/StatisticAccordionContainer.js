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



const StatisticAccordionContainer = ({route}) => {
    const item = route.params?.item

    console.log(item)
    
    const [history, setHistory] = useState([])
    
    useEffect(()=>{
        
        // console.log(item)
        console.log("StatisticAccordionContainer item", item)

        
        

    },[item])

    const props = {
        data: excercisesHistoryListData,
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer
