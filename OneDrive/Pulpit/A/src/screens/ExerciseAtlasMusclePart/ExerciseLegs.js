import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseLegsFormContainer from "@components/ExerciseAtlasMusclePartForm/ExerciseLegsFormContainer"


const ExerciseLegs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseLegsFormContainer navigation={navigation}/>
        </View>
    )
}
export default ExerciseLegs
