import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatisticAccordion from '@screens/StatisticAccordion/StatisticAccordion';
import StatisticChart from '@screens/StatisticChart/StatisticChart';
import colors from '@utils/colors';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function StatisticTab({ route }) {
    console.log('StatisticTab item', route.params.data.item);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.background
                },
                tabBarActiveTintColor: 'white'
            }}
        >
            <Tab.Screen
                name="StatisticAccordion"
                component={StatisticAccordion}
                options={{
                    tabBarLabel: 'Accordion',
                    headerShown: false
                }}
                initialParams={route.params}
            />
            <Tab.Screen
                name="StatisticChart"
                component={StatisticChart}
                options={{
                    tabBarLabel: 'Chart',
                    headerShown: false
                }}
                initialParams={route.params}
            />
        </Tab.Navigator >
    );
}
