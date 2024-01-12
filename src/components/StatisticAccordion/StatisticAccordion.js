import React from 'react';
import { Text, List, Divider, useTheme} from "react-native-paper"
import { View, ScrollView } from 'react-native';
import styles from "@utils/styles";
import colors from "@utils/colors"

const StatisticAccordion = ({  handlePress, data }) => {
    const theme = useTheme()
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
                    {/* {console.log(historicData)} */}
                    {}
                    
                    <View style={styles.drawerHeaderIconWrapper}>
                        <Text style={styles.h4}>
                            Ilość kroków: {historicData.steps}
                        </Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={styles.h4}>
                                Dzien {historicData.id}
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