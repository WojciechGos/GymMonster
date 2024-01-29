import React from 'react';
import { Text } from "react-native-paper"
import styles from "@utils/styles";
import { View, Dimensions, Pressable } from "react-native";
import { LineChart } from "react-native-chart-kit";

const StatisticChart = ({ data, navigation, maxWeights }) => {
  const dataMax = maxWeights;
  const labels = dataMax.map((value, index) => index + 1);

  return (
    <View>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataMax,
            }
          ]
        }}
        width={Dimensions.get("window").width * 0.8} // from react-native
        height={Dimensions.get("window").height * 0.7}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#000000"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <Pressable style={styles.chartButtonWrapper} onPress={() => navigation.goBack()}>
        <View style={styles.chartButton}>
          <Text style={styles.chartButtonText}>
            Powrócić
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default StatisticChart;