import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"

const Header = ({title, link})=>{

    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.h3}>
                {
                    title
                }
            </Text>
        </View>
    )
}


export default Header