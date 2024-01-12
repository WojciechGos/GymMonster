import AtlasListContainer from "@components/AtlasList/AtlasListContainer"
import { View } from "react-native"
import styles from "@utils/styles"

const AtlasList = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <AtlasListContainer navigation={navigation} route={route} />
        </View>
    )
}



export default AtlasList
