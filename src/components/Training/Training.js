import React from 'react';
import { Text, List } from "react-native-paper"
import styles from "@utils/styles";
import { View, ScrollView } from "react-native";

const Training = ({trainingData}) => {
      return (
        <View style={styles.wrapper}>
            <View style={{
                marginTop: 40
            }}>
          <Text style={styles.smallHeader}>
              Trening
          </Text>
          </View>
          <ScrollView>
            <List.Section key={0}>
                {trainingData.excercises.map((item) => (
                    <View >
                        <View style={styles.trainingHeader}>
                    <Text style={styles.h3}>
                        {item.name}
                    </Text>
                    </View>
                    <View style={{height: 50}}>

                    </View>
                    </View>
                ))}
                </List.Section>
                </ScrollView>
        </View>
      );
}

export default Training ;