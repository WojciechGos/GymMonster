import { View } from "react-native";
import DisplayTraining from "./DisplayTraining";
import DisplayNoTraining from "./DisplayNoTraining";
import { useState } from "react";

const DisplayTrainingContainer = ({ trainingData, date }) => {
  console.log(`display training: ${trainingData}`);
  console.log(trainingData);
  console.log("empty?");
  return (
      <View>
          {typeof trainingData !== "undefined" ? (
              typeof trainingData.excercises !== "undefined" ? (
                  <DisplayTraining trainingData={trainingData} date={date}/>
              ) : (
                  <DisplayNoTraining date={date} />
              )
          ) : (
              <DisplayNoTraining date={date} />
          )}
      </View>
  )
};

export default DisplayTrainingContainer;
