import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import StatisticContainer from "@components/Statistic/StatisticContainer"
import StatisticAccordionContainer from "../../components/StatisticAccordion/StatisticAccordionContainer"
import StatisticChartContainer from "../../components/StatisticChart/StatisticChartContainer"

const Statistic = () => {
    return (
        <View style={styles.containerNoCenter}>
            <StatisticAccordionContainer />
        </View>
    )
}
export default Statistic
