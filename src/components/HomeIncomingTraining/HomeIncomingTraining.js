import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";
import Header from "@components/Header/Header";
import HomeIncomingTrainingExcercise from "./HomeIncomingTrainingExcercise";

const HomeIncommingTraining = ({trainingData})=>{
    return (
        <View style={styles.homeComponentWrapper}>
            <Header title='Nadchodzący trening'/>
            <View style={styles.excercisesContainer} >
                <Text style={[styles.h3, styles.excerciseTitle]}>
                    {
                        trainingData.name
                    }:
                </Text>
                {
                    trainingData.excercises.map(item=>(
                        <HomeIncomingTrainingExcercise  key={item.id} excercise={item}/>
                    ))
                }
            </View>
        </View>
    )
}

export default HomeIncommingTraining