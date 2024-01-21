import LoginForm from "./LoginForm"
import auth from "../../../firebaseConfig"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import saveUserToAsyncStorage from "@utils/saveUserToAsyncStorage"

const LoginFormContainer = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const authenticate = async () => {
        try {
            // const response = await signInWithEmailAndPassword(
            //     auth,
            //     email,
            //     password
            // )
            // console.log(response)
            // saveUserToAsyncStorage(response)
            navigation.navigate("HomeStack")
        } catch (error) {
            // console.error(error)
            alert("Sign in failed: " + error.message)
        }
    }
    const goToRegister = () => {
        navigation.navigate("Register")
    }
    const goToForgorPassword = () => {
        navigation.navigate("ForgotPassword")
    }
    const props = {
        authenticate: authenticate,
        goToRegister: goToRegister,
        goToForgorPassword: goToForgorPassword,
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
    }
    return <LoginForm {...props} />
}
export default LoginFormContainer
