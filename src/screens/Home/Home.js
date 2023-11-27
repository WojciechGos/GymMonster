import { Text } from "react-native-paper"
import { Pressable, View } from "react-native"
import { useEffect } from "react"
import axios from 'axios'

const Home = ({navigation})=>{

    useEffect(()=>{

        const req = async ()=>{
            const response = await axios.get(
                " http://localhost:3000/excercises"
            )
        }
        req()
    },[])

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