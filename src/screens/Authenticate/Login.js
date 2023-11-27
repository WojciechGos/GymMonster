import LoginFormContainer from "../../components/LoginForm/LoginFormContainer"
import { View } from "react-native"
import styles from "./style"

const Login = () => {
    return (
        <View style={styles.container}>
            <LoginFormContainer />
        </View>
    )
}
export default Login

