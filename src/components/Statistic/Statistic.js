import React from 'react';
import { Text, List } from "react-native-paper"
import { View, ScrollView } from 'react-native';
import styles from "@utils/styles";
import colors from '@utils/colors';

const Statistic = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (
        <ScrollView>
            <List.Accordion
                title="20.10.2023"
                titleStyle={{
                    textAlign: 'center',
                    fontSize: 26,
                    color: colors.text
                }}
                onPress={handlePress}
                style={{
                    backgroundColor: colors.secondary,
                    height: 47,
                    paddingVertical: 0
                }}
            >
                <View style={{
                    width: "100%",
                    height: 137,
                    backgroundColor: "#16151A",
                    paddingHorizontal: 12,
                    paddingVertical: 9
                }}>
                    <Text style={{ color: colors.text }}>
                        Wyciskanie żolnierskie:
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 1: 10 po 15kg
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 2: 10 po 12,5kg
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 3: 8 po 10 kg
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={{ color: colors.text }}>
                            Dzien 3
                        </Text>
                    </View>
                </View>
            </List.Accordion>
            <List.Accordion
                title="17.09.2023"
                titleStyle={{
                    textAlign: 'center',
                    fontSize: 26,
                    color: colors.text
                }}
                onPress={handlePress}
                style={{
                    backgroundColor: colors.secondary,
                    height: 47,
                    paddingVertical: 0
                }}
            >
                <View style={{
                    width: "100%",
                    height: 137,
                    backgroundColor: "#16151A",
                    paddingHorizontal: 12,
                    paddingVertical: 9
                }}>
                    <Text style={{ color: colors.text }}>
                        Wyciskanie żolnierskie:
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 1: 10 po 12,5kg
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 2: 10 po 12,5kg
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 3: 10 po 10 kg
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={{ color: colors.text }}>
                            Dzien 2
                        </Text>
                    </View>
                </View>
            </List.Accordion>
            <List.Accordion
                title="12.08.2023"
                titleStyle={{
                    textAlign: 'center',
                    fontSize: 26,
                    color: colors.text
                }}
                onPress={handlePress}
                style={{
                    backgroundColor: colors.secondary,
                    height: 47,
                    paddingVertical: 0
                }}
            >
                <View style={{
                    width: "100%",
                    height: 137,
                    backgroundColor: "#16151A",
                    paddingHorizontal: 12,
                    paddingVertical: 9
                }}>
                    <Text style={{ color: colors.text }}>
                        Wyciskanie żolnierskie:
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 1: 10 po 10kg
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 2: 10 po 10kg
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Seria 3: 8 po 10 kg
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={{ color: colors.text }}>
                            Dzien 1
                        </Text>
                    </View>
                </View>
            </List.Accordion>
        </ScrollView>
    )
}

export default Statistic