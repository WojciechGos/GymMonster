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
    centerContent: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    pedometerWrapper: {
        alignItems: "center",
        justifyContent: "center",
        height: 150,
    },
    inCommingTrainingWrapper: {},
    h1: {
        fontSize: 40,
        color: colors.text,
    },
    h2: {
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        backgroundColor: colors.secondary,
        paddingHorizontal: 15,
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
        marginVertical: 20,
    },
    drawerWrapper: {
        marginVertical: 50,
        marginHorizontal: 20,
    },
    drawerHeader: {
        backgroundColor: colors.primary,
        height: 80,
        justifyContent: "flex-end",
    },
    drawerLabel: {
        color: colors.text,
    },
    drawerHeaderIconWrapper: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    homeComponentWrapper: {
        borderColor: colors.secondary,
        borderWidth: 1,
    },
    progressWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    stonks: {
        color: colors.green,
        fontSize: 15,
    },
    notStonks: {},
    excercisesContainer: {
        marginVertical: 20,
    },
    excerciseWrapper: {
        flexDirection: "row",
    },
    excerciseTextGaps: {
        marginLeft: 30,
        marginRight: 10,
    },
    excerciseTitle: {
        marginLeft: 10,
    },
    bigWriting: {
        color: "#DFDFDF",
        fontSize: 55,
    },
    imageSize: {
        width: 90,
        height: 90,
    },
    exercisesWriting: {
        marginVertical: 10,
        fontSize: 34,
        color: colors.text,
    },

    drawerItemWrapper: {
        flexDirection: "row",
    },
    iconWrapper: {
        width: 50,
        justifyContent: "center",
    },
    calendar: {
        // color:colors.text
    },
    day: {},
    emptyMessage: {
        height: 150,
    },
    dateStyle: {
        marginLeft: 10,
        marginBottom: 10,
    },
    marginRight: {
        marginRight: 5,
    },
    startTrainingWrapper: {
        height: 60,
        backgroundColor: colors.tertiary,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    avievementWrapper: {
        alignItems: "center",
        margin: 24,
        flex: 1,
    },
    achievementHead: {
        marginTop: 7,
        marginBottom: 3,
    },
    achievementHeadText: {
        color: "white",
        fontSize: 24,
        fontWeight: "500",
        lineHeight: 40,
    },
    achievementAchievementWrapper: {
        alignItems: "flex-start",
        flex: 1,
    },
    achievementAchievement: {
        flex: 1,
        flexDirection: "row",
    },
    achievementIconWrapper: {
        marginRight: 20,
    },
    achievementAchievementStatus: {
        flexDirection: "column",
    },
    achievementFirstText: {
        color: "white",
        fontSize: 24,
        fontWeight: "500",
    },
    achievementSecondText: {
        color: "white",
        fontSize: 12,
        fontWeight: "500",
    },
    mr_1: {
        marginRight: 5,
    },
    mr_2: {
        marginRight: 10,
    },
    ml_1: {
        marginLeft: 5,
    },
    ml_2: {
        marginLeft: 10,
    },
    mb_3: {
        marginBottom: 15,
    },
    excerciseListContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    editExcerciseParameterForm: {
        marginVertical: 5,
        borderColor: colors.primary,
        height: 20,
        borderWidth: 2,
        backgroundColor: colors.background,
        color: colors.text,
        borderRadius: 5,
        padding: 10,
    },
    functionWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
    },
    rectangle: {
        justifyContent: "flex-start",
        backgroundColor: "#aa1b18",
        padding: 10,
        width: 400,
    },
    textCenter: {
        fontSize: 30,
        color: colors.text,
        textAlign: "center",
    },
    smallHeader: {
        justifyContent: "flex-start",
        textAlign: "center",
        backgroundColor: "#aa1b18",
        padding: 10,
        width: 400,
        fontSize: 30,
        color: colors.text,
    },
    trainingHeader: {
        alignItems: "center",
        justifyContent: "center",
        height: 47,
        backgroundColor: "#aa1b18",
    },
    trainingSeries: {
        paddingVertical: 27,
        paddingLeft: 20,
    },
    trainingSeria: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    seriaText: {
        width: 87,
        height: 32,
        color: colors.text,
        fontSize: 20,
        marginRight: 21,
    },
    textInputForm3: {
        marginVertical: 5,
        marginRight: 21,
        borderColor: colors.primary,
        height: 32,
        width: 112,
        borderWidth: 2,
        backgroundColor: colors.background,
        color: colors.text,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    zapiszTraining: {
        backgroundColor: colors.primary,
        paddingVertical: 4,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 93,
        marginRight: 11,
        alignItems: "center",
        justifyContent: "center",
    },
    zapiszText: {
        fontSize: 14,
        color: colors.text,
        lineHeight: 22,
    },
    zapiszTrainingView: {
        alignItems: "flex-end",
    },
    containerChart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerExerciseDetails: {
        marginVertical: 30,
        marginHorizontal: 10,
        flex: 1
    },
    containerVideo: {
        height: 208,
        backgroundColor: 'white',
        marginBottom: 30,
    },
    containerVideoText: {
        flex: 1,
    },
    containerExerciseDetailsOut: {
        flex: 1
    },
    containerVideoTextText: {
        fontSize: 20,
        color: colors.text,
    }
})
export default styles
