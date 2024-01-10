import React from 'react';
import { Text } from "react-native-paper"
import styles from "@utils/styles";
import { View } from "react-native";

const StatisticChart = () => {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.smallHeader}>
              Ilość kroków
          </Text>
      </View>
      );
}

export default StatisticChart ;