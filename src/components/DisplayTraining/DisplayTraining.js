import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";
import HomeIncomingTrainingExcercise from "@components/HomeIncomingTraining/HomeIncomingTrainingExcercise";


const DisplayTraining = ({trainingData, date}) => {
    console.log(trainingData)
    return (
        <View style={styles.excercisesContainer}>
            <Text style={[styles.h3, styles.dateStyle]}>{date}</Text>
            <Text style={[styles.h3, styles.excerciseTitle]}>
                {trainingData.name}:
            </Text>
            {trainingData.excercises.map((item) => (
                <HomeIncomingTrainingExcercise key={item.id} excercise={item} />
            ))}
        </View>
    )
};
export default DisplayTraining;
