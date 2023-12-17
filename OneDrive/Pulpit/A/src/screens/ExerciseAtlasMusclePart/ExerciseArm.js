import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseArmFormContainer from "@components/ExerciseAtlasMusclePartForm/ExerciseArmFormContainer"


const ExerciseArm = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseArmFormContainer navigation={navigation}/>
        </View>
    )
}
export default ExerciseArm
