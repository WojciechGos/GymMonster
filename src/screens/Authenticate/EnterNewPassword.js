import EnterNewPasswordFormContainer from "@components/EnterNewPasswordForm/EnterNewPasswordFormContainer"
import { View } from "react-native"
import styles from "@utils/styles"

const  EnterNewPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <EnterNewPasswordFormContainer navigation={navigation} />
        </View>
    )
}
export default EnterNewPassword

