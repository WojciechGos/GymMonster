import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseBackFormContainer from "@components/ExerciseAtlasMusclePartForm/ExerciseBackFormContainer"


const ExerciseBack = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseBackFormContainer navigation={navigation} />
        </View>
    )
}
export default ExerciseBack
