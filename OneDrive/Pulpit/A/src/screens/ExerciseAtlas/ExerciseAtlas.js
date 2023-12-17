import { View } from "react-native"
import styles from "@utils/styles"
import ExerciseAtlasFormContainer from "@components/ExerciseAtlasForm/ExerciseAtlasFormContainer"


const ExerciseAtlas = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ExerciseAtlasFormContainer navigation={navigation} />
        </View>
    )
}
export default ExerciseAtlas
