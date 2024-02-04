import { View } from "react-native"
import styles from "@utils/styles"
import CameraContainer from "@components/Camera/CameraContainer"

const Camera = ({navigation, route}) => {
    return (
        <View style={styles.container}>
        <CameraContainer navigation={navigation} route={route} />
        </View>
    )
}

export default Camera