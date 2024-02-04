import { View } from "react-native"
import styles from "@utils/styles"
import TrainingContainer from "@components/Training/TrainingContainer"

const Training = ({navigation, route}) => {
    return (
        <View style={styles.containerNoCenter}>
            <TrainingContainer route={route} navigation={navigation}/>
        </View>
    )
}
export default Training
