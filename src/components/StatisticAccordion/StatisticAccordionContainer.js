import StatisticAccordion from "./StatisticAccordion"
import { useState } from "react"
import pedometerData from '@data/pedometerData'

const StatisticAccordionContainer = ()=>{
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)
    
    const props = {
        expanded: expanded,
        handlePress: handlePress,
        pedometerData: pedometerData
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer