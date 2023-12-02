import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "@screens/Home/Home"
import TrainingPlan from "@screens/TrainingPlan/TrainingPlan"
import TrainingPlanCreator from "@screens/TrainingPlanCreator/TrainingPlanCreator"
import styles from "@utils/styles"
import colors from "@utils/colors"

const Drawer = createDrawerNavigator()

export default function DrawerStack() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: styles.drawerStyle,
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="TrainingPlan" component={TrainingPlan} />
            <Drawer.Screen
                name="TrainingPlanCreator"
                component={TrainingPlanCreator}
            />
        </Drawer.Navigator>
    )
}
