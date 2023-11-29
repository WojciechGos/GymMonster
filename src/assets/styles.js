import { StyleSheet } from "react-native"
import colors from "./colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    textInputForm: {
        borderColor: colors.primary,
        borderWidth: 2,
        color: colors.text,
        padding: 10,
    },
    primaryButton: {
        backgroundColor: colors.primary,
        color: "#DFDFDF",
        marginVertical: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
})
export default styles