import { View } from "react-native"
import logo from "@public/main-logo.png"
import { Image, TextInput } from "react-native"
import styles from "./style"
const LoginForm = ({})=>{

    return (
        <View>
            <Image source={logo} />
            <TextInput label='Login' style={styles.textInputForm} />
        </View>
    )

}
export default LoginForm