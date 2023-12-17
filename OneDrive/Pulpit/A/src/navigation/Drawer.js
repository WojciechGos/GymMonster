import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@screens/Home/Home";
import TrainingPlan from "@screens/TrainingPlan/TrainingPlan";
import TrainingPlanCreator from "@screens/TrainingPlanCreator/TrainingPlanCreator";
import ExerciseAtlas from "@screens/ExerciseAtlas/ExerciseAtlas";
import ProgressForm from "@screens/ProgressForm/ProgressForm";

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
      <Drawer.Screen name="Training Plan Creator" component={TrainingPlanCreator} />
      <Drawer.Screen name="Exercise Atlas" component={ExerciseAtlas} />
      <Drawer.Screen name="Save Progress" component={ProgressForm} />
          
    </Drawer.Navigator>
  );
}
