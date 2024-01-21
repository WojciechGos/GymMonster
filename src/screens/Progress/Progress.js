import { View } from "react-native"
import styles from "@utils/styles"
import ProgressContainer from "../../components/Progress/ProgressContainer"

const Progress = ({ navigation }) => {
    return (
        <View style={styles.containerNoCenter}>
            <ProgressContainer navigation={navigation} />
        </View>
    )
}
export default Progress
