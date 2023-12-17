import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import styles from "@utils/styles";
import Header from "../Header/Header"; 
import exercisesData from "src/data/InfoExercises.json";

const ExerciseLegsForm = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const navigation = useNavigation();

  const handleExercisePress = (exerciseName) => {
    const selectedExerciseInfo = exercisesData.legs.find(
      (exercise) => exercise.name === exerciseName
    );

    setSelectedExercise(selectedExerciseInfo);
    
    
    navigation.navigate("ExerciseDetails", {
      exerciseName: selectedExerciseInfo.name,
      exerciseDescription: selectedExerciseInfo.description,
    });
  };

  return (
    <View style={styles.container}>
      <Header title={"Ćwiczenia brzucha"} />
      

      {exercisesData.legs.map((exercise) => (
        <View key={exercise.name}>
          <Pressable onPress={() => handleExercisePress(exercise.name)}>
            <View style={styles.spacing}>
              <Text style={styles.exercisesWriting}>{exercise.name}</Text>
            </View>
          </Pressable>
          <Text></Text>
        </View>
      ))}
    </View>
  );
};

export default ExerciseLegsForm;
