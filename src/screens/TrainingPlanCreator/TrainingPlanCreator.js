import styles from "@utils/styles"
import { View } from "react-native"
import { Text } from "react-native-paper"
import TrainingCreatorFormContainer from "@components/TrainingCreatorForm/TrainingCreatorFormContainer"

const TrainingPlanCreator = ({navigation, route}) => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingCreatorFormContainer navigation={navigation} route={route} />
        </View>
    )
}
export default TrainingPlanCreator
