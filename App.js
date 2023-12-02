import "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/navigation/Stack"
import MyDrawer from "./src/navigation/Drawer"

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <StackNavigation />
            </PaperProvider>
        </NavigationContainer>
    )
}
