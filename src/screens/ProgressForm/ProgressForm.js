import { View } from "react-native"
import styles from "@utils/styles"
import ProgressFormContainer from "../../components/ProgressForm/ProgressFormContainer"

const ProgressForm = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ProgressFormContainer navigation={navigation} />
        </View>
    )
}
export default ProgressForm
