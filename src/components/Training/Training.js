import React, { useState } from 'react';
import { Text, List } from "react-native-paper"
import styles from "@utils/styles";
import { View, ScrollView, TextInput, Pressable } from "react-native";
import colors from '@utils/colors';
import Button from "@components/Button/Button";

const Training = ({ trainingData, handleSave, setExerciseData }) => {

    return (
        <View style={styles.containerNoCenter}>
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
                        <View key={item.id}>
                            <View style={styles.trainingHeader}>
                                <Text style={styles.h3}>
                                    {item.name}
                                </Text>
                            </View>
                            <View style={styles.trainingSeries}>
                                {
                                    (() => {
                                        const seriesArray = [];

                                        for (let i = 1; i <= item.series; i++) {
                                            seriesArray.push(
                                                <View key={i} style={styles.trainingSeria}>
                                                    <Text style={styles.seriaText}>Seria {i}: </Text>
                                                    <TextInput
                                                        style={styles.textInputForm3}
                                                        placeholder="powtórzenia"
                                                        textColor={colors.text}
                                                        activeUnderlineColor={colors.primary}
                                                        onChangeText={(reps) => setExerciseData(prevData => ({
                                                            ...prevData,
                                                            [item.name]: {
                                                                ...prevData[item.name],
                                                                [`seria${i}`]: {
                                                                    repetitions: reps,
                                                                    weight: prevData[item.name]?.[`seria${i}`]?.weight || ''
                                                                }
                                                            }
                                                        }))}
                                                    />
                                                    <TextInput
                                                        style={styles.textInputForm3}
                                                        placeholder="ciężar"
                                                        textColor={colors.text}
                                                        activeUnderlineColor={colors.primary}
                                                        onChangeText={(weight) => setExerciseData(prevData => ({
                                                            ...prevData,
                                                            [item.name]: {
                                                                ...prevData[item.name],
                                                                [`seria${i}`]: {
                                                                    ...prevData[item.name][`seria${i}`],
                                                                    weight: weight,
                                                                    repetitions: prevData[item.name]?.[`seria${i}`]?.repetitions || ''
                                                                }
                                                            }
                                                        }))}
                                                    />
                                                </View>
                                            );
                                        }

                                        return seriesArray;
                                    })()
                                }
                            </View>
                        </View>
                    ))}
                </List.Section>
                <View style={styles.zapiszTrainingView}>
                    <Pressable style={styles.zapiszTraining} onPress={handleSave}>
                        <Text style={styles.zapiszText}>Zapisz</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

export default Training;