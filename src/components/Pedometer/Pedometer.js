import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";
import Header from "@components/Header/Header";

const Pedometer = ({navigateToStatistics, pastStepCount, currentStepCount}) => {
  return (
      <View style={styles.homeComponentWrapper}>
          <Header title="Liczba kroków" navigation={navigateToStatistics} />
          <View style={styles.pedometerWrapper}>
              <View>
                  <Text style={styles.h1}>{pastStepCount+currentStepCount}</Text>
              </View>
              <View style={styles.progressWrapper}>
                  <Text style={styles.h3}>progres</Text>
                  <Text style={styles.stonks}> Stonks</Text>
              </View>
          </View>
      </View>
  )
};

export default Pedometer;
