import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "@screens/Home/Home"
import TrainingPlan from "@screens/TrainingPlan/TrainingPlan"
import TrainingPlanCreator from "@screens/TrainingPlanCreator/TrainingPlanCreator"

import Statistic from "@screens/Statistic/Statistic"
import Achievement from "@screens/Achievement/Achievement"

import StackAtlas from "./StackAtlas"

import AtlasList from "@screens/AtlasList/AtlasList"
import ExcerciseList from "@screens/ExcerciseList/ExcerciseList"

import styles from "@utils/styles"
import DrawerContentContainer from "../components/DrawerContent/DrawerContentContainer"
import DrawerHeaderContainer from "@components/DrawerHeader/DrawerHeaderContainer"
import ProgressForm from "@screens/ProgressForm/ProgressForm"
import ExcerciseDetails from "@screens/ExerciseDetails/ExcerciseDetails"

import StatisticTab from "./StatisticTab"

const Drawer = createDrawerNavigator()

export default function CustomDrawer(props) {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: ({ navigation, route, options }) => (
                    <DrawerHeaderContainer
                        navigation={navigation}
                        options={options}
                    />
                ),
                headerStyle: styles.drawerHeader,
                drawerStyle: styles.drawerStyle,
                drawerLabelStyle: styles.drawerLabel,
            }}
            drawerContent={(props) => <DrawerContentContainer {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Training Plan" component={TrainingPlan} />

            <Drawer.Screen 
                name="Statistic" 
                component={StatisticTab} 
                initialParams={props}
            />
            <Drawer.Screen name="Achievement" component={Achievement} />
            <Drawer.Screen
                name="Training Plan Creator"
                component={TrainingPlanCreator}
            />
            <Drawer.Screen
                name="Excercise Details"
                component={ExcerciseDetails}
            />
            <Drawer.Screen
                name="Atlas List"
                component={AtlasList}
                options={{
                    hideHeader: true,
                }}
            />
            <Drawer.Screen
                name="Excercise List"
                component={ExcerciseList}
                options={{
                    hideHeader: true,
                }}
            />
            {/* <Drawer.Screen name="Exercise Back" component={ExerciseBack} /> */}
            <Drawer.Screen name="Progress Form" component={ProgressForm} />
        </Drawer.Navigator>
    )
}
