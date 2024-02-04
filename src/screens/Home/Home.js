import { Text } from "react-native-paper"
import { View, ScrollView } from "react-native"
import styles from "@utils/styles"
import PedometerContainer from "@components/Pedometer/PedometerContainer"
import MyCalendarContainer from "@components/MyCalendar/MyCalendarContainer"
import HomeIncommingTrainingContainer from "@components/HomeIncomingTraining/HomeIncomingTrainingContainer"
import HomeSaveProgressContainer from "@components/HomeSaveProgress/HomeSaveProgressContainer"


const Home = ({navigation})=>{
    return (
        <ScrollView style={styles.containerNoCenter}>
            <PedometerContainer navigation={navigation} />
            <HomeIncommingTrainingContainer navigation={navigation} />
            <HomeSaveProgressContainer navigation={navigation} />
            <MyCalendarContainer />
        </ScrollView>
    )
}
export default Home