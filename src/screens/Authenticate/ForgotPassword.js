import ForgotPasswordFormContainer from "@components/ForgotPasswordForm/ForgotPasswordFormContainer"
import styles from "@utils/styles"
import { View } from "react-native"

const ForgorPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ForgotPasswordFormContainer navigation={navigation} />
        </View>
    )
}
export default ForgorPassword
