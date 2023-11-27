import { View } from "react-native"
import { Text } from "react-native-paper"
import TrainingCreatorContext from "./TrainingCreatorContext"
import { useContext, useEffect } from "react"

const TrainingDisplay = () => {
    const { excercises, getFromStorage } = useContext(TrainingCreatorContext)

    useEffect(()=>{
        getFromStorage()
    },[])

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
