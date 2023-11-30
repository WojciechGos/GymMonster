import {Image, View, Pressable } from "react-native"
import logo from "@public/main-logo.png"
import { TextInput, Text } from "react-native-paper"
import styles from "@assets/styles"
import colors from "@assets/colors"
import {Button} from "@ui"

const LoginForm = ({ authenticate, goToRegister, goToForgorPassword }) => {
    return (
        <View>
            <Image source={logo} />
            
            <View >
                <Text style={styles.h3} >
                    Email
                </Text>
                <TextInput 
                    style={styles.textInputForm} 
                    placeholder="Wprowadź Email" 
                    textColor={colors.text} 
                    activeUnderlineColor={colors.primary}
                />
            </View>

            <View >
                <Text style={styles.h3} >
                    Haslo
                </Text>
                <TextInput 
                    style={styles.textInputForm} 
                    placeholder="Wprowadź hasło" 
                    textColor={colors.text} 
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary} />
            </View>

            <View style={styles.loginForgotPasswordWrapper}>
                <Button name='Zaloguj' handler={authenticate}/>

                <Pressable onPress={() => goToForgorPassword()}>
                    <Text style={styles.text}>
                        Zapomniałem hasło
                    </Text>
                </Pressable>
            </View>

            <View style={styles.centerContent}>
                <Text style={styles.text}>
                    lub
                </Text>
            </View>

            <Button name='Zarejestruj' handler={goToRegister}/>
            
        </View>
    )
}
export default LoginForm