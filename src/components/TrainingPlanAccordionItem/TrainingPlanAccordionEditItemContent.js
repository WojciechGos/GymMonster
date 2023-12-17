import { View } from "react-native"
import { TextInput, Text } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"

const TrainingPlanAccordionEditItemContent = ({ excerciseData }) => {
    return (
        <View>
            <View style={[styles.mb_3, styles.ml_2]}>
                <Text style={styles.h3}>{excerciseData.name}</Text>
            </View>
            <View style={[styles.excerciseListContainer, styles.ml_2]}>
                <TextInput
                    style={[styles.editExcerciseParameterForm, styles.mr_2]}
                    placeholder="serie             "
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={excerciseData.series.toString()}
                />
                <Text style={[styles.h4, styles.mr_2, styles.ml_1]}>Serie</Text>
            </View>
            <View style={[styles.excerciseListContainer, styles.ml_2]}>
                <TextInput
                    style={[styles.editExcerciseParameterForm, styles.mr_2]}
                    placeholder="powtórzenia"
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={excerciseData.reps.toString()}
                />
                <Text style={[styles.h4, styles.mr_2, styles.ml_1]}>
                    Powtórzenia
                </Text>
            </View>
            <View style={[styles.excerciseListContainer, styles.ml_2]}>
                <TextInput
                    style={[styles.editExcerciseParameterForm, styles.mr_2]}
                    placeholder="ciężar           "
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={excerciseData.weight.toString()}
                />
                <Text style={[styles.h4, styles.mr_2, styles.ml_1]}>Kg</Text>
            </View>
        </View>
    )
}

export default TrainingPlanAccordionEditItemContent
