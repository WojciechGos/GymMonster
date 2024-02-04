import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "@screens/Authenticate/Login"
import ForgotPassword from '@screens/Authenticate/ForgotPassword'
import Home from '@screens/Home/Home'
import Register from '@screens/Authenticate/Register'
import Training from "@screens/Training/Training"
import CustomDrawer from "./Drawer"
import Camera from "@screens/Camera/Camera"


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
                name="Training"
                component={Training}
                options={optionScreen}
            />
               <Stack.Screen
                name="Camera"
                component={Camera}
                options={optionScreen}
            />

        </Stack.Navigator>
    )
}

