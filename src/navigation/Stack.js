import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "@screens/Authenticate/Login"
import ForgotPassword from '@screens/Authenticate/ForgotPassword'
import Home from '@screens/Home/Home'
import Register from '@screens/Authenticate/Register'
import CustomDrawer from "./Drawer"


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
        </Stack.Navigator>
    )
}

