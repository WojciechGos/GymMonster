import RegisterForm from "./RegisterForm"
import auth from "../../../firebaseConfig"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import saveUserToAsyncStorage from "@utils/saveUserToAsyncStorage"

const RegisterFormContainer = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const createAccount = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log(response)
            // saveUserToAsyncStorage(response)
            navigation.navigate("HomeStack")

        } catch (error) {
            // console.error(error)
            alert("Sign up failed: " + error.message)
        }
    }
    const goToLogin = () => {
        navigation.navigate("Login")
    }

    const props = {
        createAccount: createAccount,
        goToLogin: goToLogin,
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
    }

    return <RegisterForm {...props} />
}
export default RegisterFormContainer
