import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import StatisticAccordion from '@screens/StatisticAccordion/StatisticAccordion';
import StatisticChart from '@screens/StatisticChart/StatisticChart';

const Tab = createMaterialBottomTabNavigator();

const optionScreen = {
    headerShown: false,
}

export default function StatisticTab(props) {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen name="StatisticAccordion" component={StatisticAccordion} options={optionScreen} />
            <Tab.Screen name="StatisticChart" component={StatisticChart} options={optionScreen} />
        </Tab.Navigator>
    );
}