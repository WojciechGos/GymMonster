import { View } from "react-native"
import styles from "@utils/styles"
import TrainingContainer from "@components/Training/TrainingContainer"

const Training = ({route}) => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingContainer route={route} />
        </View>
    )
}
export default Training
