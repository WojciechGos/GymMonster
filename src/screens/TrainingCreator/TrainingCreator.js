import { View } from "react-native"
import TrainingCreatorFormContainer from "../../components/TrainingCreatorForm/TrainingCreatorFormContainer"
import { TrainingCreatorProvider } from "../../components/TrainingCreatorForm/TrainingCreatorContext"
import styles from "@assets/styles"

const TrainingCreator = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TrainingCreatorProvider>
                <TrainingCreatorFormContainer navigation={navigation} />
            </TrainingCreatorProvider>
        </View>
    )
}
export default TrainingCreator
