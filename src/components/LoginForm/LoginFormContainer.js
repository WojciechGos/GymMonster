import LoginForm from "./LoginForm"

const LoginFormContainer = ({ navigation }) => {
    const auth = () => {
        navigation.navigate('Home')
    }

    return <LoginForm auth={auth} />
}
export default LoginFormContainer
