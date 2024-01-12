import { View } from "react-native"
import styles from "@utils/styles"
import ExcerciseListContainer from "@components/ExcerciseList/ExcerciseListContainer"


const ExcerciseList = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <ExcerciseListContainer navigation={navigation} route={route} />
        </View>
    )
}
export default ExcerciseList
