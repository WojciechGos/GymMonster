import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseChestFormContainer from "@components/ExerciseAtlasMusclePartForm/ExerciseChestFormContainer"


const ExerciseChest = () => {
    return (
        <View style={styles.container}>
            <ExerciseChestFormContainer />
        </View>
    )
}
export default ExerciseChest
