import LoginFormContainer from "@components/LoginForm/LoginFormContainer"
import { View } from "react-native"
import styles from "@assets/styles"

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <LoginFormContainer navigation={navigation} />
        </View>
    )
}
export default Login

