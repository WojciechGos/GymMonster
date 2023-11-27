import {Image, View, Pressable } from "react-native"
import logo from "@public/main-logo.png"
import { TextInput, Text, Button } from "react-native-paper"
import styles from "./style"
const LoginForm = ({ auth }) => {
    return (
        <View>
            <Image source={logo} />
            <TextInput label="Login" style={styles.textInputForm} />
            <Pressable style={styles.primaryButton} onPress={() => auth()}>
                <Text>
                    Login
                </Text>
            </Pressable>
        </View>
    )
}
export default LoginForm