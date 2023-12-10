import RegisterForm from "./RegisterForm"

const RegisterFormContainer = ({ navigation }) => {
    const authenticate = () => {
        navigation.navigate('HomeStack')
    }
    const goToLogin = () => {
        navigation.navigate('Login')

    }

    const props = {
        authenticate: authenticate,
        goToLogin: goToLogin,
    }

    return <RegisterForm {...props} />
}
export default RegisterFormContainer
