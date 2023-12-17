import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseShoulderFormContainer from "../../components/ExerciseAtlasMusclePartForm/ExerciseShoulderFormContainer"

const ExerciseShoulder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseShoulderFormContainer navigation={navigation}/>
        </View>
    )
}
export default ExerciseShoulder
