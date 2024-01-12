import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import StatisticContainer from "@components/Statistic/StatisticContainer"
import StatisticAccordionContainer from "../../components/StatisticAccordion/StatisticAccordionContainer"
import StatisticChartContainer from "../../components/StatisticChart/StatisticChartContainer"

const Statistic = ({route}) => {
    return (
        <View style={styles.containerNoCenter}>
            <StatisticAccordionContainer route={route} />
        </View>
    )
}
export default Statistic
