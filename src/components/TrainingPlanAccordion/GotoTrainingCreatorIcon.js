import { Feather } from "@expo/vector-icons"
import colors from "@utils/colors"
import { View } from "react-native"
import styles from "../../utils/styles"
const GotoTrainingCreatorIcon = () => {
    return (
        <View style={styles.centerContent}>
            <Feather name="plus-circle" size={70} color={colors.weakRed} />
        </View>
    )
}

export default GotoTrainingCreatorIcon
