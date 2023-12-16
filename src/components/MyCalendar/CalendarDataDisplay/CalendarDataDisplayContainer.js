import { useEffect, useState } from "react";
import CalendarDataDisplay from "./CalendarDataDisplay";
import trainingData from "@data/trainingData.json";
import trainingPlanData from "@data/trainingPlanData.json";

const CalendarDataDisplayContainer = ({ selectedDay }) => {
  const [training, setTraining] = useState({});
  useEffect(() => {
    const swapWithAxios = () => {
      // console.log(data)
      const trainingInGivenDate = trainingPlanData.find(
        (item) => item.date == selectedDay
      );
    //   console.log(trainingData[trainingInGivenDate.trainingId]);
      if (trainingInGivenDate) {
        setTraining(trainingData[trainingInGivenDate.trainingId]);
      } else setTraining("");
    //   console.log(trainingInGivenDate);
    };
    // console.log(selectedDay);
    swapWithAxios();
  }, [selectedDay]);

  const props = {
    trainingData: training,
  };

  return <CalendarDataDisplay {...props} />;
};

export default CalendarDataDisplayContainer;
