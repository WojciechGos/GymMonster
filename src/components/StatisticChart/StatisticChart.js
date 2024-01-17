import React from 'react';
import { Text } from "react-native-paper"
import styles from "@utils/styles";
import { View } from "react-native";

const StatisticChart = ({ route }) => {
      return (
        <View>
          <Text style={styles.text}>StatisticChart:</Text>
          <Text style={styles.text}>{route.params.data.item.title}</Text>           
        </View>
      );
}

export default StatisticChart ;