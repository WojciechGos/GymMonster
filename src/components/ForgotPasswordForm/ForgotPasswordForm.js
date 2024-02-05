import { Image, View, Pressable } from "react-native"
import logo from "@public/main-logo.png"
import { TextInput, Text } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"
import Button from "@components/Button/Button"

const ForgotPasswordForm = ({ authenticate, email, setEmail })=>{
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
                value={email}
                onChangeText={setEmail}
            />
            </View>


            <View style={styles.loginForgotPasswordWrapper}>
                <Button name='Wyślij' handler={()=>authenticate(email)} />
            </View>

        </View>

    )
}

export default ForgotPasswordForm
