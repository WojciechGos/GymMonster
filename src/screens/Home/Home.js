import { Text } from "react-native-paper"
import { View } from "react-native"
import styles from "@utils/styles"
import PedometerContainer from "@components/Pedometer/PedometerContainer"
import CalendarContainer from "@components/Calendar/CalendarContainer"
import HomeIncommingTrainingContainer from "@components/HomeIncomingTraining/HomeIncomingTrainingContainer"
import HomeSaveProgressContainer from "@components/HomeSaveProgress/HomeSaveProgressContainer"


const Home = ()=>{
    return (
        <View style={styles.containerNoCenter}>
            <PedometerContainer/>
            <HomeIncommingTrainingContainer/>
            <HomeSaveProgressContainer/>
            <CalendarContainer/>
        </View>
    )
}
export default Home