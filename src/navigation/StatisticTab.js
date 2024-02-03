import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation"
import StatisticAccordion from "@screens/StatisticAccordion/StatisticAccordion"
import StatisticChart from "@screens/StatisticChart/StatisticChart"
import colors from "@utils/colors"
import { useEffect, useState } from "react"

const Tab = createMaterialBottomTabNavigator()

export default function StatisticTab({ route }) {
    console.log("StatisticTab item", route.params.data.item)

    return (
        <Tab.Navigator
            swipeEnabled={true}
            activeColor={colors.text}
            barStyle={{
                backgroundColor: colors.background,
            }}
        >
            <Tab.Screen
                name="StatisticAccordion"
                component={StatisticAccordion}
                options={{
                    tabBarLabel: "Accordion",
                }}
                initialParams={route.params}
            />
            <Tab.Screen
                name="StatisticChart"
                component={StatisticChart}
                options={{
                    tabBarLabel: "Chart",
                }}
                initialParams={route.params}
            />
        </Tab.Navigator>
    )
}
