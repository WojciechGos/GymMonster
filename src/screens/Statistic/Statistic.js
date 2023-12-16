import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import StatisticContainer from "@components/Statistic/StatisticContainer"

const Statistic = () => {
    return (
        <View style={styles.containerNoCenter}>
            <StatisticContainer />
        </View>
    )
}
export default Statistic
