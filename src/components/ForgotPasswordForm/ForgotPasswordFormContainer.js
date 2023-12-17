import ForgotPasswordForm from "./ForgotPasswordForm"

const ForgotPasswordFormContainer = () => {
        const authenticate = () => {
            navigation.navigate("HomeStack")
        }
        const props = {
            authenticate: authenticate,
        }
    return <ForgotPasswordForm {...props} />
}

export default ForgotPasswordFormContainer
