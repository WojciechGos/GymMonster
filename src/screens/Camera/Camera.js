import { View } from "react-native"
import styles from "@utils/styles"
import CameraContainer from "@components/Camera/CameraContainer"

const Camera = ({navigation}) => {
    return (
        <View style={styles.container}>
        <CameraContainer navigation={navigation} />
        </View>
    )
}

export default Camera