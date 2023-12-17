import { Pressable } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import { AntDesign } from '@expo/vector-icons'; 

const ButtonWithCam = ({ handler})=>{

    return (
        <Pressable style={styles.primaryButton} onPress={() => handler()}>
            <Text style={styles.textButton}>
            <AntDesign name="camerao" size={24} color="white" />
            </Text>
        </Pressable>
    )
}


export default ButtonWithCam
