import ForgotPasswordForm from "./ForgotPasswordForm"
import { FIREBASE_AUTH } from "../../../firebaseConfig"
import { useState } from "react"
import { sendPasswordResetEmail } from "firebase/auth"

const ForgotPasswordFormContainer = ({ navigation }) => {
    const [email, setEmail] = useState("")

    const authenticate = (email) => {
        console.log(email)
        sendPasswordResetEmail(FIREBASE_AUTH, email).catch((error) => {
            console.log(error)
        })
        navigation.navigate("Login")
    }
    const props = {
        authenticate: authenticate,
        email: email,
        setEmail: setEmail,
    }
    return <ForgotPasswordForm {...props} />
}

export default ForgotPasswordFormContainer
