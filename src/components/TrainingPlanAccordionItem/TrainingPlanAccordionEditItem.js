import { List } from "react-native-paper"
import TrainingPlanAccordionEditItemContent from "./TrainingPlanAccordionEditItemContent"
import { Feather } from "@expo/vector-icons"
import { Pressable, View } from "react-native"
import colors from "@utils/colors"
import { AntDesign } from "@expo/vector-icons"
import styles from "@utils/styles"

const TrainingPlanAccordionEditItem = ({
    excerciseData,
    showForm,
    updateExcercise,
    series,
    setSeries,
    reps,
    setReps,
    weight,
    setWeight,
    deleteExcercise,
}) => {
    const props = {
        excerciseData: excerciseData,
        updateExcercise: updateExcercise,
        showForm: showForm,
        series: series,
        setSeries: setSeries,
        reps: reps,
        setReps: setReps,
        weight: weight,
        setWeight: setWeight,
    }

    return (
        <>
            <List.Item
                key={excerciseData.id}
                left={() => <TrainingPlanAccordionEditItemContent {...props} />}
                right={() => (
                    <View style={styles.editControlsWrapper}>
                        <View style={styles.functionWrapper}>
                            <Pressable onPress={() => showForm()}>
                                <AntDesign
                                    name="close"
                                    size={30}
                                    color={colors.text}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    updateExcercise(
                                        excerciseData.name,
                                        series,
                                        reps,
                                        weight
                                    )
                                    showForm()
                                }}
                            >
                                <AntDesign
                                    name="check"
                                    size={30}
                                    color={colors.text}
                                />
                            </Pressable>
                        </View>
                        <Pressable onPress={()=>{
                            deleteExcercise(excerciseData.name)
                            showForm()
                        }} >
                            <AntDesign
                                name="delete"
                                size={30}
                                color={colors.text}
                            />
                        </Pressable>
                    </View>
                )}
            />
        </>
    )
}

export default TrainingPlanAccordionEditItem
