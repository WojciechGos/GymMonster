import LoginForm from "./LoginForm"

const LoginFormContainer = ({ navigation }) => {
    const authenticate = () => {
        navigation.navigate('Home')
    }
    const goToRegister = ()=>{
        navigation.navigate('Register')
        
    }
    const goToForgorPassword = ()=>{
        navigation.navigate('ForgotPassword')

    }
    const props = {
        authenticate: authenticate,
        goToRegister:goToRegister,
        goToForgorPassword:goToForgorPassword
    }
    return <LoginForm {...props} />
}
export default LoginFormContainer
