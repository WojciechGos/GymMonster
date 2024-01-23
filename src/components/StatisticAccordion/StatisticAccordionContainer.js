import StatisticAccordion from "./StatisticAccordion"
import { useState } from "react"
import excercisesHistoryListData from "@data/excercisesHistoryListData" 

const StatisticAccordionContainer = ({route, navigation}) => {
    const name = route.params.data.item.name
    const data = excercisesHistoryListData.filter((item) => item.name === name);

    console.log('StatisticAccordionContainer item', route.params.data.item.name)

    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)


    const props = {
        expanded: expanded,
        handlePress: handlePress,
        data: data,
        navigation: navigation,
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer
