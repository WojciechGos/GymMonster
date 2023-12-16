import styles from "@utils/styles"
import { View } from "react-native"
import RegisterFormContainer from "@components/RegisterForm/RegisterFormContainer"

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <RegisterFormContainer navigation={navigation} />
        </View>
    )
}
export default Register
