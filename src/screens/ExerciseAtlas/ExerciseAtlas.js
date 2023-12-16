import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseAtlasFormContainer from "@components/ExerciseAtlasForm/ExerciseAtlasFormContainer"


const ExerciseAtlas = () => {
    return (
        <View style={styles.container}>
            <ExerciseAtlasFormContainer />
        </View>
    )
}
export default ExerciseAtlas
