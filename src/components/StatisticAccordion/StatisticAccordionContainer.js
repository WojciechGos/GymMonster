import StatisticAccordion from "./StatisticAccordion"
import { useState } from "react"
import excercisesHistoryListData from "@data/excercisesHistoryListData" 

const StatisticAccordionContainer = ({route}) => {
    const data = route.params?.data
    console.log('Moja data', data)

const StatisticAccordionContainer = ()=>{
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)
    
    const props = {
        expanded: expanded,
        handlePress: handlePress,
        data: excercisesHistoryListData,
        route: route,
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer