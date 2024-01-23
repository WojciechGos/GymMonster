import React from 'react';
import { Text, List, Divider, useTheme } from "react-native-paper"
import { View, ScrollView, Pressable } from 'react-native';
import styles from "@utils/styles";
import colors from "@utils/colors"

const StatisticAccordion = ({ handlePress, data, navigation }) => {
    const theme = useTheme()
    console.log('StatisticAccordion data', data)
    return (
        <View style={styles.containerVideoText}>
            <ScrollView style={styles.containerVideoText}>
                {data.map((historicData) => {
                    return (
                        <List.Accordion
                            key={historicData.id}
                            title={historicData.date}
                            titleStyle={styles.h2}
                            style={styles.accordion}
                            theme={{ colors: { primary: "#DFDFDF" } }}
                        >
                            <View style={styles.drawerHeaderIconWrapper}>
                                <Text style={styles.h4}>
                                    {historicData.name}:
                                </Text>
                                {historicData.series.map((seria) => (
                                    <Text style={styles.h4} key={seria.seria}>
                                        Seria {seria.seria}: {seria.reps} {seria.weight === 0 ? null : `po ${seria.weight}kg`}
                                    </Text>
                                ))}
                            </View>
                        </List.Accordion>
                    )
                })}
            </ScrollView>
            <Pressable style={styles.chartButtonWrapper} onPress={() => navigation.navigate("StatisticChart", {data})}>
                <View style={styles.chartButton}>
                    <Text style={styles.chartButtonText}>
                        Wykres
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default StatisticAccordion