import StatisticChart from "./StatisticChart"
import excercisesHistoryListData from "@data/excercisesHistoryListData" 

const StatisticChartContainer = ({ route })=>{
    const data = route.params?.data

    const props = {
        data: excercisesHistoryListData,
        route: route,
    }
    return <StatisticChart {...props}/>
}

export default StatisticChartContainer