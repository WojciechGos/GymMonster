import {Image, View, Pressable } from "react-native"
import logo from "@public/main-logo.png"
import { TextInput, Text, Button } from "react-native-paper"
import styles from "@assets/styles"
const LoginForm = ({ authenticate, goToRegister, goToForgorPassword }) => {
    return (
        <View>
            <Image source={logo} />
            <TextInput label="Login" style={styles.textInputForm} />
            <Pressable style={styles.primaryButton} onPress={() => authenticate()}>
                <Text>
                    Login
                </Text>
            </Pressable>
            <Pressable style={styles.primaryButton} onPress={() => goToRegister()}>
                <Text>
                    register
                </Text>
            </Pressable>
            <Pressable  style={styles.primaryButton} onPress={() => goToForgorPassword()}>
                <Text>
                    ForgotPassword
                </Text>
            </Pressable>

        </View>
    )
}
export default LoginForm