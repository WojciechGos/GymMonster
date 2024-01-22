import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatisticAccordion from '@screens/StatisticAccordion/StatisticAccordion';
import StatisticChart from '@screens/StatisticChart/StatisticChart';
import colors from '@utils/colors';
import { useEffect } from 'react';


const Tab = createBottomTabNavigator();

export default function StatisticTab({ route, navigation }) {
    console.log("StatisticTab item", route.params.data)
    const item = route.params?.data

    useEffect(() => {
        // You can update the route params dynamically here
        navigation.setParams({ item: item })
    }, [item]) // Update this dependency array based on when you want to update params

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
                initialParams={item}
            />
            <Tab.Screen
                name="StatisticChart"
                component={StatisticChart}
                options={{
                    tabBarLabel: "Chart",
                    headerShown: false,
                }}
                initialParams={item}
            />
        </Tab.Navigator>
    )
}
