import { View } from "react-native"
import { Text } from "react-native-paper"
import TrainingChooseExcercise from "./TrainingChooseExcercise"
import TrainingDisplay from "./TrainingDisplay"

const TrainingCreatorForm = ()=>{
    return (
        <View>
            <Text variant="displayLarge">Training creator</Text>
            <TrainingDisplay/>
            <TrainingChooseExcercise/>
        </View>
    )
}
export default TrainingCreatorForm