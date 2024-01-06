import React from 'react';
import { Text, List, Divider, useTheme} from "react-native-paper"
import { View, ScrollView } from 'react-native';
import styles from "@utils/styles";
import colors from "@utils/colors"

const StatisticAccordion = ({  handlePress, pedometerData }) => {
    const theme = useTheme()
    return (
        <ScrollView>
            <List.Section key={0}>
                {pedometerData.map((pedometerSection) => (
                    <List.Accordion
                    key={pedometerSection.id}
                    title={pedometerSection.date}
                    titleStyle={styles.h2}
                    style={styles.accordion}
                    theme={{ colors: { primary: "#DFDFDF" } }}
                >
                    {console.log(pedometerSection)}
                    {}
                    
                    <View style={styles.drawerHeaderIconWrapper}>
                        <Text style={styles.h4}>
                            Ilość kroków: {pedometerSection.steps}
                        </Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={styles.h4}>
                                Dzien {pedometerSection.id}
                            </Text>
                        </View>
                    </View>
                </List.Accordion>
                ))}
            </List.Section>
        </ScrollView>
    )
}

export default StatisticAccordion