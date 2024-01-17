import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import StatisticAccordion from '@screens/StatisticAccordion/StatisticAccordion';
import StatisticChart from '@screens/StatisticChart/StatisticChart';

const Tab = createMaterialBottomTabNavigator();

const optionScreen = {
    headerShown: false,
}

export default function StatisticTab({ route }) {
    return (
        <Tab.Navigator swipeEnabled={true}>
            <Tab.Screen 
                name="StatisticAccordion" 
                component={StatisticAccordion} 
                options={optionScreen}
                initialParams={route.params}
            />
            <Tab.Screen 
                name="StatisticChart" 
                component={StatisticChart} 
                options={optionScreen}
                initialParams={route.params}
            />
        </Tab.Navigator>
    );
}