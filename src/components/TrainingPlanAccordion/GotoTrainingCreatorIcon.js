import { Feather } from "@expo/vector-icons"
import colors from "@utils/colors"
import { Pressable, View } from "react-native"
import styles from "../../utils/styles"
const GotoTrainingCreatorIcon = ({ goToCreator }) => {
    return (
        <View style={styles.centerContent}>
            <Pressable onPress={() => goToCreator()}>
                <Feather name="plus-circle" size={70} color={colors.weakRed} />
            </Pressable>
        </View>
    )
}

export default GotoTrainingCreatorIcon
