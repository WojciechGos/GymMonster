import { Pressable, View } from "react-native"
import styles from "../../utils/styles"
import { AntDesign } from "@expo/vector-icons"
import colors from "@utils/colors"

const StartTraining = ({clickHandler}) => {
    return (
        <View style={styles.startTrainingWrapper}>
            <Pressable onPress={()=>clickHandler()}>
                <AntDesign name="caretright" size={40} color={colors.text} />
            </Pressable>
        </View>
    )
}

export default StartTraining
