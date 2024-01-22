import React from "react"
import { Text, List, Divider, useTheme } from "react-native-paper"
import { View, ScrollView } from "react-native"
import styles from "@utils/styles"
import colors from "@utils/colors"

const StatisticAccordion = ({ data }) => {
    const theme = useTheme()
    console.log("data")
    console.log(data) 
    return (
        <ScrollView>
            <List.Section key={0}>
                {data.map((historicData) => (
   
                    <List.Accordion
                        key={historicData.id}
                        title={historicData.date}
                        titleStyle={styles.h2}
                        style={styles.accordion}
                        theme={{ colors: { primary: "#DFDFDF" } }}
                    >
                        <View style={styles.drawerHeaderIconWrapper}>
                            <Text style={styles.h4}>
                                {data.title}:
                            </Text>
                            {historicData.series.map((seria) => (
                                <Text style={styles.h4} key={seria.seria}>
                                    Seria {seria.seria}: {seria.reps}{" "}
                                    {seria.weight === 0
                                        ? null
                                        : `po ${seria.weight}kg`}
                                </Text>
                            ))}
                        </View>
                    </List.Accordion>
                ))}
            </List.Section>
        </ScrollView>
    )
}

export default StatisticAccordion
