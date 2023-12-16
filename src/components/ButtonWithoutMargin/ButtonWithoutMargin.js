import { Pressable } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
const ButtonWithoutMargin = ({ name, handler }) => {

    return (
        <Pressable style={styles.buttonWithoutMargin} onPress={() => handler()}>
            <Text style={styles.textButton}>
                {name}
            </Text>
        </Pressable>
    )
}


export default ButtonWithoutMargin
