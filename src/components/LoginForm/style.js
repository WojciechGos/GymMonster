import { StyleSheet } from "react-native"
import colors from "@assets/colors"

const styles = StyleSheet.create({
    textInputForm: {
        borderColor: colors.primary,
        borderWidth: 2,
        color:colors.text,
        padding: 10
    },
    primaryButton :{
        backgroundColor: colors.primary,
        color: colors.text,
        marginVertical:10,
        height:60,
    }
})
export default styles
