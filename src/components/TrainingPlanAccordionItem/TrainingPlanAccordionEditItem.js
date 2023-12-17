import { List } from "react-native-paper"
import TrainingPlanAccordionEditItemContent from "./TrainingPlanAccordionEditItemContent"
import { Feather } from "@expo/vector-icons"
import { Pressable, View } from "react-native"
import colors from "@utils/colors"
import { AntDesign } from "@expo/vector-icons"
import styles from "@utils/styles"

const TrainingPlanAccordionEditItem = ({ excerciseData, showForm }) => {
    return (
        <>
            <List.Item
                key={excerciseData.id}
                left={() => (
                    <TrainingPlanAccordionEditItemContent
                        excerciseData={excerciseData}
                    />
                )}
                right={() => (
                    <View style={styles.functionWrapper}>
                        <Pressable onPress={() => showForm()}>
                            <AntDesign
                                name="close"
                                size={30}
                                color={colors.text}
                            />
                        </Pressable>
                        <Pressable onPress={() => showForm()}>
                            <AntDesign
                                name="check"
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
