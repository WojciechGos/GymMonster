import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"

const SmallHeader = ({title, link})=>{

    return (
        <View style={styles.smallHeader}>
            <Text style={styles.textCenter}>
                {
                    title
                }
            </Text>
        </View>
    )
}


export default SmallHeader