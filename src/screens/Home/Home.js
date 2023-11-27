import { Text } from "react-native-paper"
import { Pressable, View } from "react-native"

const Home = ({navigation})=>{

    return (
        <View>
            <Text variant="displayLarge"> Home</Text>
            <Pressable onPress={()=>{navigation.navigate("TrainingCreator")}}>
                <Text>
                    go to training creator
                </Text>
            </Pressable>
        </View>
    )
}
export default Home