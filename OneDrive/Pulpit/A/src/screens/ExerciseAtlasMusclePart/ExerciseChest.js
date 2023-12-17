import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseChestFormContainer from "@components/ExerciseAtlasMusclePartForm/ExerciseChestFormContainer"


const ExerciseChest = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseChestFormContainer navigation={navigation}/>
        </View>
    )
}
export default ExerciseChest
