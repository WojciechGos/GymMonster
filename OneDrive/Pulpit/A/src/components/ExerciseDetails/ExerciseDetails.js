import React from "react";
import { View, Text } from "react-native";
import styles from "../../utils/styles";
import Header from "../Header/Header";


const ExerciseDetails = ({ route }) => {
  
  const { exerciseName, exerciseVideo,exerciseDescription} = route.params;

  return (
    <View style={styles.container}>

        <Header title={exerciseName} />
    
                       

      <Text style={styles.h3}> Opis ćwiczenia: {exerciseDescription}</Text>
    </View>
  );
};

export default ExerciseDetails;
