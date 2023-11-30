import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/navigation/Stack"

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <StackNavigation />
            </PaperProvider>
        </NavigationContainer>
    )
}
