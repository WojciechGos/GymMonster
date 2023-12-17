import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "@screens/Authenticate/Login"
import ForgotPassword from '@screens/Authenticate/ForgotPassword'
import Home from '@screens/Home/Home'
import Register from '@screens/Authenticate/Register'
import CustomDrawer from "./Drawer"
import ExerciseBack from "../screens/ExerciseAtlasMusclePart/ExerciseBack"
import ExerciseChest from "../screens/ExerciseAtlasMusclePart/ExerciseChest"
import ExerciseShoulder from "../screens/ExerciseAtlasMusclePart/ExerciseShoulder"
import ExerciseArm from "../screens/ExerciseAtlasMusclePart/ExerciseArm"
import ExerciseAbs from "../screens/ExerciseAtlasMusclePart/ExerciseAbs"
import ExerciseLegs from "../screens/ExerciseAtlasMusclePart/ExerciseLegs"

import ProgressForm from "../screens/ProgressForm/ProgressForm"

import ExerciseDetails from "../components/ExerciseDetails/ExerciseDetails"

const Stack = createNativeStackNavigator()

const optionScreen = {
    headerShown: false,
}

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={optionScreen}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={optionScreen}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={optionScreen}
            />
            <Stack.Screen
                name="HomeStack"
                component={CustomDrawer}
                options={optionScreen}
            />

            <Stack.Screen
                name="ExerciseBack"
                component={ExerciseBack}
                options={optionScreen}               
            />
            <Stack.Screen
                name="ExerciseChest"
                component={ExerciseChest}
                options={optionScreen}               
            />
              <Stack.Screen
                name="ExerciseShoulder"
                component={ExerciseShoulder}
                options={optionScreen}               
            />
             <Stack.Screen
                name="ExerciseArm"
                component={ExerciseArm}
                options={optionScreen}               
            />
            <Stack.Screen
                name="ExerciseAbs"
                component={ExerciseAbs}
                options={optionScreen}               
            />
             <Stack.Screen
                name="ExerciseLegs"
                component={ExerciseLegs}
                options={optionScreen}               
            />
                <Stack.Screen
                name="ExerciseDetails"
                component={ExerciseDetails}
                options={optionScreen}/>
           
           
                <Stack.Screen
                name="ProgressForm"
                component={ProgressForm}
                options={optionScreen}/>

        </Stack.Navigator>
    )
}

