import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatisticAccordion from '@screens/StatisticAccordion/StatisticAccordion';
import StatisticChart from '@screens/StatisticChart/StatisticChart';
import colors from '@utils/colors';

const Tab = createBottomTabNavigator();

export default function StatisticTab({ route }) {
  const [item, setItem] = useState(route.params.data.item);

  useEffect(() => {
    setItem(route.params.data.item);
  }, [route.params.data.item]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="StatisticAccordion"
        component={StatisticAccordion}
        options={{
          tabBarLabel: 'Accordion',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="StatisticChart"
        component={StatisticChart}
        options={{
          tabBarLabel: 'Chart',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
