import { useContext, useState } from "react"
import { Pressable, View } from "react-native"
import { TextInput, Text } from "react-native-paper"
import TrainingCreatorContext from "./TrainingCreatorContext"
import styles from "@assets/styles"



const TrainingChooseExcercise = ({navigation}) => {
    const { addExcercise } = useContext(TrainingCreatorContext)
    const [name, setName] = useState("")
    return (
        <View>
            <TextInput
                label={"excercise"}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Pressable
                style={styles.primaryButton}
                onPress={() => addExcercise(name)}
            >
                <Text>add</Text>
            </Pressable>
        </View>
    )
}
export default TrainingChooseExcercise
