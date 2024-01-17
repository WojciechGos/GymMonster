import { Text, TextInput } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"
import Button from "@components/Button/Button"
import { Pressable, ScrollView } from "react-native"
import DatePickerContainer from "@components/DatePicker/DatePickerContainer"
import ItemListContainer from "@components/ItemList/ItemListContainer"
const TrainingCreatorForm = ({ saveTraining, addExcercise }) => {
    return (
        <ScrollView>
            <Text variant="displayLarge" style={styles.h2}>
                1. Nazwij swój trening
            </Text>
            <TextInput
                style={styles.textInputForm}
                placeholder="Nazwa"
                textColor={colors.text}
                activeUnderlineColor={colors.primary}
            />
            <Text variant="displayLarge" style={styles.h2}>
                2. Wybierz ćwiczenia z atlasu
            </Text>
            <ItemListContainer addExcercise={addExcercise} />
            <Text variant="displayLarge" style={styles.h2}>
                3. Wybierz termin treningu
            </Text>
            <DatePickerContainer />
            <Button name="Zapisz" handler={saveTraining} />
        </ScrollView>
    )
}

export default TrainingCreatorForm
