import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";
import Header from "@components/Header/Header";

const Pedometer = () => {
  return (
    <View style={styles.homeComponentWrapper}>
      <Header title="Liczba kroków" />
      <View style={styles.pedometerWrapper}>
        <View>
          <Text style={styles.h1}>11543</Text>
        </View>
        <View style={styles.progressWrapper}>
          <Text style={styles.h3}>progres</Text>
          <Text style={styles.stonks}> Stonks</Text>
        </View>
      </View>
    </View>
  );
};

export default Pedometer;
