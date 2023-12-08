import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import PedometerContainer from "@components/Pedometer/PedometerContainer"
import CalendarContainer from "@components/Calendar/CalendarContainer"
import HomeIncommingTrainingContainer from "@components/HomeIncomingTraining/HomeIncomingTrainingContainer"

const Home = ()=>{
    return (
        <View style={styles.containerNoCenter}>
            <PedometerContainer/>
            <CalendarContainer/>
            <HomeIncommingTrainingContainer/>
        </View>
    )
}
export default Home