import { Image, View, Pressable } from "react-native"
import logo from "@public/main-logo.png"
import { TextInput, Text } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/styles"
import Button from "@components/Button/Button"

const ForgotPasswordForm = ({ authenticate })=>{
    return (

        <View>
        <Image source ={logo} />

        

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
                    Kod
                </Text>
                <TextInput
                    style={styles.textInputForm}
                    placeholder="Wprowadź otrzymany kod"
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                />
            </View>

            <View style={styles.loginForgotPasswordWrapper}>
                <Button name='Wyślij' handler={authenticate} />
            </View>

        </View>

    )
}

export default ForgotPasswordForm
