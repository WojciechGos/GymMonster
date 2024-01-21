import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatisticAccordion from '@screens/StatisticAccordion/StatisticAccordion';
import StatisticChart from '@screens/StatisticChart/StatisticChart';
import colors from '@utils/colors';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function StatisticTab({ route }) {
    console.log('StatisticTab item', route.params.data);
    const data = route.params?.data

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.background,
                },
                tabBarActiveTintColor: "white",
            }}
        >
            <Tab.Screen
                name="StatisticAccordion"
                component={StatisticAccordion}
                options={{
                    tabBarLabel: "Accordion",
                    headerShown: false,
                }}
                initialParams={data}
            />
            <Tab.Screen
                name="StatisticChart"
                component={StatisticChart}
                options={{
                    tabBarLabel: "Chart",
                    headerShown: false,
                }}
                initialParams={data}
            />
        </Tab.Navigator>
    )
}
