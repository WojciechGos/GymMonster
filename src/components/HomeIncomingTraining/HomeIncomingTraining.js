import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";
import Header from "@components/Header/Header";
import HomeIncomingTrainingExcercise from "./HomeIncomingTrainingExcercise";
import DisplayTraining from "@components/DisplayTraining/DisplayTraining";
import StartTraining from "./StartTraining";

const HomeIncommingTraining = ({trainingData, navigateToTrainingStart})=>{
    return (
        <View style={styles.homeComponentWrapper}>
            <Header title="Nadchodzący trening" />
            <DisplayTraining trainingData={trainingData} />
            <StartTraining clickHandler={navigateToTrainingStart} />
        </View>
    )
}

export default HomeIncommingTraining