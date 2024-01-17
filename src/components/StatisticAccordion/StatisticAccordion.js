import React from 'react';
import { Text, List, Divider, useTheme } from "react-native-paper"
import { View, ScrollView } from 'react-native';
import styles from "@utils/styles";
import colors from "@utils/colors"

const StatisticAccordion = ({ handlePress, data, route }) => {
    const theme = useTheme()
    return (
            <View>
                <Text style={styles.text}>StatisticAccordion:</Text>
                <Text style={styles.text}>{route.params.data.item.title}</Text>                
            </View>
        /*<ScrollView>
            <List.Section key={0}>
                {data.map((historicData) => {
                    if (historicData.name === route.params?.data.item.name) {
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
                                        {route.params?.data.item.title}:
                                    </Text>
                                    {historicData.series.map((seria) => (
                                        <Text style={styles.h4} key={seria.seria}>
                                            Seria {seria.seria}: {seria.reps} {seria.weight === 0 ? null : `po ${seria.weight}kg`}
                                        </Text>
                                    ))}
                                </View>
                            </List.Accordion>
                        );
                    }
                    else {
                        return null;
                    }
                })}
            </List.Section>
        </ScrollView>*/
    )
}

export default StatisticAccordion