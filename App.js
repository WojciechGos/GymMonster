import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import Login from "./src/screens/Authenticate/Login"

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Login />
            </PaperProvider>
        </NavigationContainer>
    )
}
