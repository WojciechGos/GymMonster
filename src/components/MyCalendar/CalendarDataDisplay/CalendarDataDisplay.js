import { View } from "react-native"
import styles from "@utils/styles";
import colors from "@utils/colors";
import { Text } from "react-native-paper";
import DisplayTrainingContainer from "@components/DisplayTraining/DisplayTrainingContainer";
const CalendarDataDisplay = ({trainingData, selectedDay})=>{
    return (
        <View style={styles.homeComponentWrapper}>
            <Text style={styles.h2}>
                <DisplayTrainingContainer trainingData={trainingData} date={selectedDay}/>
            </Text>
        </View>
    )
}

export default CalendarDataDisplay