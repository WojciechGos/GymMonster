import AtlasListContainer from "@components/AtlasList/AtlasListContainer"
import { View } from "react-native"
import styles from "@utils/styles"

const AtlasList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AtlasListContainer navigation={navigation} />
        </View>
    )
}



export default AtlasList
