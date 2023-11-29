import styles from "@assets/styles"
import { View } from "react-native"
import RegisterFormContainer from "@components/RegisterForm/RegisterFormContainer"

const Register = () => {
    return (
        <View style={styles.container}>
            <RegisterFormContainer/>
        </View>
    )
}
export default Register
