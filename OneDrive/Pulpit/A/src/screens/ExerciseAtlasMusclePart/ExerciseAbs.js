import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseAbsFormContainer from "@components/ExerciseAtlasMusclePartForm/ExerciseAbsFormContainer"


const ExerciseAbs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseAbsFormContainer navigation={navigation} />
        </View>
    )
}
export default ExerciseAbs
