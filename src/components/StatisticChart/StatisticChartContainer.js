import StatisticChart from "./StatisticChart"
import excercisesHistoryListData from "@data/excercisesHistoryListData"

const StatisticChartContainer = ({ route }) => {
    const data = route.params?.data

    const maxWeights = () => {
        return excercisesHistoryListData
            .filter((historyExercise) => historyExercise.name === data.item.name)
            .map((matchingExercise) =>
                Math.max(...matchingExercise.series.map((serie) => serie.weight))
            );
    }
    console.log('maxWeights ' + maxWeights())

    const props = {
        data: excercisesHistoryListData,
        maxWeights: maxWeights,
        route: route,
    }
    return <StatisticChart {...props} />
}

export default StatisticChartContainer