import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@screens/Home/Home";
import TrainingPlan from "@screens/TrainingPlan/TrainingPlan";
import TrainingPlanCreator from "@screens/TrainingPlanCreator/TrainingPlanCreator";
import Statistic from "@screens/Statistic/Statistic";
import Achievement from "@screens/Achievement/Achievement";
import styles from "@utils/styles";
import DrawerContentContainer from "../components/DrawerContent/DrawerContentContainer";
import DrawerHeaderContainer from "@components/DrawerHeader/DrawerHeaderContainer";
const Drawer = createDrawerNavigator();

export default function CustomDrawer(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation }) => (
          <DrawerHeaderContainer navigation={navigation} />
        ),
        headerStyle: styles.drawerHeader,
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabel,
      }}
      drawerContent={(props) => <DrawerContentContainer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Training Plan" component={TrainingPlan} />
      <Drawer.Screen name="Statistic" component={Statistic} />
      <Drawer.Screen name="Achievement" component={Achievement} />
      <Drawer.Screen
        name="Training Plan Creator"
        component={TrainingPlanCreator}
      />
    </Drawer.Navigator>
  );
}
