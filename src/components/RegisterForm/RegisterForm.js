import { Image, View} from "react-native"
import minilogo from "@public/mini-logo.png"
import { TextInput, Text } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"
import ButtonWithoutMargin from "../ButtonWithoutMargin/ButtonWithoutMargin"

const RegisterForm = ({
    createAccount,
    goToLogin,
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <View>
            <Image source={minilogo} />

            <View>
                <Text></Text>

                <Text style={styles.h4}>Imie</Text>
                <TextInput
                    style={styles.textInputForm2}
                    placeholder="Wprowadź Imie"
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                />
            </View>
            <View>
                <Text style={styles.h4}>Nazwisko</Text>
                <TextInput
                    style={styles.textInputForm2}
                    placeholder="Wprowadź nazwisko"
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                />
            </View>

            <View>
                <Text style={styles.h4}>Email</Text>
                <TextInput
                    style={styles.textInputForm2}
                    placeholder="Wprowadź email"
                    textColor={colors.text}
                    value={email}
                    onChangeText={setEmail}
                    activeUnderlineColor={colors.primary}
                />
            </View>

            <View>
                <Text style={styles.h4}>Haslo</Text>
                <TextInput
                    style={styles.textInputForm2}
                    placeholder="Wprowadź hasło"
                    textColor={colors.text}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    activeUnderlineColor={colors.primary}
                />
            </View>

            <View>
                <Text style={styles.h4}>Powtórz haslo</Text>
                <TextInput
                    style={styles.textInputForm2}
                    placeholder="Powtorz hasło"
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary}
                />
            </View>

            <View style={styles.spacing}>
                <ButtonWithoutMargin
                    name="Zarejestruj"
                    handler={createAccount}
                />
            </View>

            <View style={styles.centerContent}>
                <Text style={styles.text}>lub</Text>
            </View>

            <ButtonWithoutMargin name="Zaloguj" handler={goToLogin} />
        </View>
    )
}

export default RegisterForm
