import { View } from "react-native"
import styles from "@utils/styles"
import ExcerciseDetailsContainer from "@components/ExcerciseDetails/ExcerciseDetailsContainer"

const ExcerciseDetails = ({route}) => {
    return (
        <View style={styles.container}>
            <ExcerciseDetailsContainer route={route} />
        </View>
    )
}
export default ExcerciseDetails
