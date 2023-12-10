import ForgotPasswordForm from "./ForgotPasswordForm"

const ForgotPasswordFormContainer = ({ navigation }) => {
    const authenticate = () => {
        navigation.navigate('HomeStack')
    }
    const props = {
        authenticate: authenticate,
       
    }
    return <ForgotPasswordForm {...props} />
}

export default ForgotPasswordFormContainer
