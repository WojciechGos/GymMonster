import styles from "@utils/styles"
import { View } from "react-native"
import { Text } from "react-native-paper"
import RegisterFormContainer from "@components/RegisterForm/RegisterFormContainer"

const Register = () => {
    return (
        <View style={styles.container}>
            <RegisterFormContainer/>
        </View>
    )
}
export default Register
