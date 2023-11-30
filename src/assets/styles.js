import { StyleSheet } from "react-native"
import colors from "./colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
    },
    containerNoCenter:{
        flex:1,
        backgroundColor: colors.background,
    },
    textInputForm: {
        marginVertical: 5,
        borderColor: colors.primary,
        height: 30,
        borderWidth: 2,
        backgroundColor: colors.background,
        color: colors.text,
        borderRadius: 5,
        padding: 10,
    },
    textButton : {
        color: colors.text,
        fontSize: 20
    },
    primaryButton: {
        backgroundColor: colors.primary,
        color: "#DFDFDF",
        marginVertical: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 5,
    },
    textInfo:{
        fontSize: 20,
        color: colors.text
    },
    text : {
        color: colors.text
    },
    loginForgotPasswordWrapper: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    centerContent: {
        flexDirection: 'row',
        justifyContent: "center",
        marginVertical:20
    },
    h3: {
        fontSize:20,
        color: colors.text
    },
    headerWrapper:{
        flex: 1,
        width:'100%',
        backgroundColor:colors.secondary
    }


})
export default styles