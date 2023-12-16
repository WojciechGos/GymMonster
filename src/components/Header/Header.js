import { Text } from "react-native-paper"
import { Pressable, View } from "react-native"
import styles from "@utils/styles"

const Header = ({ title, navigation }) => {

    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.h3}>{title}</Text>
            {typeof navigation === "function" ? (
                <Pressable onPress={() => navigation()}>
                    <Text style={styles.h4}>Pokaż więcej</Text>
                </Pressable>
            ) : (
                <Text></Text>
            )}
        </View>
    )
}

export default Header
