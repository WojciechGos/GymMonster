import { View } from "react-native"
import { Text } from "react-native-paper"
import TrainingCreatorContext from "./TrainingCreatorContext"
import { useContext } from "react"

const TrainingDisplay = () => {
    const { excercises } = useContext(TrainingCreatorContext)
    return (
        <View>
            {
                excercises.map(item=>(
                    <Text>
                        {
                            item
                        }
                    </Text>
                ))
            }

        </View>
    )
}
export default TrainingDisplay
