import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "@screens/Home/Home"
import TrainingPlan from "@screens/TrainingPlan/TrainingPlan"
import TrainingPlanCreator from "@screens/TrainingPlanCreator/TrainingPlanCreator"


const Drawer = createDrawerNavigator()

export default function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="TrainingPlan" component={TrainingPlan} />
            <Drawer.Screen
                name="TrainingPlanCreator"
                component={TrainingPlanCreator}
            />
        </Drawer.Navigator>
    )
}
