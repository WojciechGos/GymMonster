import StatisticChart from "./StatisticChart"

const StatisticChartContainer = ({ route, navigation }) => {
    const data = route.params.data
    const maxWeights = data
        .map((matchingExercise) =>
            Math.max(...matchingExercise.series.map((serie) => serie.weight))
        );

    const props = {
        data: data,
        maxWeights: maxWeights,
        navigation: navigation
    }

    return <StatisticChart {...props} />
}

export default StatisticChartContainer