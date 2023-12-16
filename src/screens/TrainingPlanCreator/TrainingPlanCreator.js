import styles from "@utils/styles"
import { View } from "react-native"
import { Text } from "react-native-paper"
import TrainingCreatorFormContainer from "@components/TrainingCreatorForm/TrainingCreatorFormContainer"

const TrainingPlanCreator = () => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingCreatorFormContainer />
        </View>
    )
}
export default TrainingPlanCreator
