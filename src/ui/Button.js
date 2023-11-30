import { Pressable } from "react-native"
import { Text } from "react-native-paper"
import styles from "@assets/styles"
const Button = ({name, handler})=>{

    return (
        <Pressable style={styles.primaryButton} onPress={() => handler()}>
            <Text style={styles.textButton}>
                {name}
            </Text>
        </Pressable>
    )
}


export default Button