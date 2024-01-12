import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AtlasList from "@screens/AtlasList/AtlasList"
import ExcerciseList from "@screens/ExcerciseList/ExcerciseList"

const Stack = createNativeStackNavigator()

const optionScreen = {
    headerShown: false,
}

export default function StackAtlas() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Atlas List"
                component={AtlasList}
                options={optionScreen}
            />
            <Stack.Screen
                name="Excercise List"
                component={ExcerciseList}
                options={optionScreen}
            />
        </Stack.Navigator>
    )
}
