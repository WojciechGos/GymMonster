import RegisterForm from "./RegisterForm"
import { FIREBASE_AUTH } from "../../../firebaseConfig"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"

const RegisterFormContainer = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = FIREBASE_AUTH

    const createAccount = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.error(error)
            alert("Sign up failed: " + error.message)
        }

        // navigation.navigate("HomeStack")
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
