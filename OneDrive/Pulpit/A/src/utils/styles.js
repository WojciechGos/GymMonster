import { StyleSheet } from "react-native"
import colors from "./colors"

const styles = StyleSheet.create({
    containerDefaultBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        
    },
    containerNoCenter: {
        flex: 1,
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
    textInputForm2: {
        marginVertical: 5,
        borderColor: colors.primary,
        height: 20,
        borderWidth: 2,
        backgroundColor: colors.background,
        color: colors.text,
        borderRadius: 5,
        padding: 10,
    },
 

    textButton: {
        color: colors.text,
        fontSize: 20,
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
    buttonWithoutMargin: {
        backgroundColor: colors.primary,
        color: "#DFDFDF",
        marginVertical: 0,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 5,
    },
    textInfo: {
        fontSize: 20,
        color: colors.text,
    },
    text: {
        color: colors.text,
        
    },
  
    loginForgotPasswordWrapper: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    spacing: {
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    spacing2: {
        marginVertical: 50,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    centerContent: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    pedometerWrapper:{
        alignItems: "center",
        justifyContent:"center",
        height:150
    },
    inCommingTrainingWrapper:{

    },
    h1:{
        fontSize: 40,
        color: colors.text,
    },
    h2:{
        fontSize: 30,
        color: colors.text,
    },
    h3: {
        fontSize: 20,
        color: colors.text,
        
    },
    h4: {
        fontSize: 15,
        color: colors.text,
    },
    h5: {
        fontSize: 10,
        color: colors.text,
    },
    headerWrapper: {
        justifyContent:'center',
        height:50,
        backgroundColor: colors.secondary,
        paddingHorizontal:15
    },
    trainingListContentWrapper: {
        marginHorizontal: 20,
    },
    accordion: {
        backgroundColor: colors.secondary,
    },
    drawerStyle: {
        backgroundColor: colors.background,

    },
    drawerListItem: {
        marginVertical:20
    },
    drawerWrapper: {
        marginVertical: 50,
        marginHorizontal:20
    },
    drawerHeader : {
        backgroundColor: colors.primary,
        height:80,
        justifyContent: 'flex-end'
    },
    drawerLabel: {
        color: colors.text
    },
    drawerHeaderIconWrapper:{
        marginHorizontal:20,
        marginVertical:10
    },
    homeComponentWrapper:{
        borderColor: colors.secondary,
        borderWidth:1
    },
    progressWrapper:{
        flexDirection: 'row',
        alignItems:'center'
    },
    stonks: {
        color: colors.green,
        fontSize:15
    },
    notStonks: {

    },
    excercisesContainer:{
        marginVertical:20
    },  
    excerciseWrapper:{
        flexDirection: 'row'
    },
    excerciseTextGaps: {
        marginLeft: 30,
        marginRight:10
    },
    excerciseTitle:{
        marginLeft:10
    },
    bigWriting: {
        color: "#DFDFDF",
        fontSize: 55
    },
    imageSize: {
        width: 90,
        height: 90
    },
    exercisesWriting: {
        marginVertical: 10,
        fontSize: 34,
        color: colors.text,
    },
    rectangle: {
        justifyContent: 'flex-start',
        backgroundColor: '#aa1b18',
        padding: 10,
        width: 400
    },
    textCenter: {
        fontSize: 30,
        color: colors.text,
        textAlign: "center", 
        
    },
    smallHeader: {
        justifyContent: 'flex-start',
        textAlign: "center", 
        backgroundColor: '#aa1b18',
        padding: 10,
        width: 400,
        fontSize: 30,
        color: colors.text,

    }
    
})
export default styles
