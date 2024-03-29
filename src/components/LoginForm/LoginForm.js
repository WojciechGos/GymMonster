import {Image, View, Pressable } from "react-native"
import logo from "@public/main-logo.png"
import { TextInput, Text } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"
import Button from  "@components/Button/Button"

const LoginForm = ({
    authenticate,
    goToRegister,
    goToForgorPassword,
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <View>
            <Image source={logo} />

            <View>
                <Text style={styles.h3}>Email</Text>
                <TextInput
                    style={styles.textInputForm}
                    placeholder="Wprowadź Email"
                    keyboardType="email-address"
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View>
                <Text style={styles.h3}>Haslo</Text>
                <TextInput
                    style={styles.textInputForm}
                    placeholder="Wprowadź hasło"
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.loginForgotPasswordWrapper}>
                <Button name="Zaloguj" handler={authenticate} />

                <Pressable onPress={() => goToForgorPassword()}>
                    <Text style={styles.text}>Zapomniałem hasło</Text>
                </Pressable>
            </View>

            <View style={styles.centerContent}>
                <Text style={styles.text}>lub</Text>
            </View>

            <Button name="Zarejestruj" handler={goToRegister} />
        </View>
    )
}
export default LoginForm
