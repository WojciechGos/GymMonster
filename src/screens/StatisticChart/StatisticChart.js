import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import StatisticContainer from "@components/Statistic/StatisticContainer"
import StatisticAccordionContainer from "../../components/StatisticAccordion/StatisticAccordionContainer"
import StatisticChartContainer from "../../components/StatisticChart/StatisticChartContainer"

const StatisticChart = ({ route }) => {
    console.log('StatisticChart item', route.params.data.item)
    return (
        <View style={styles.container}>
            <StatisticChartContainer route={route}/>
        </View>
    )
}
export default StatisticChart
