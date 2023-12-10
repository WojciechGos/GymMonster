import { Text } from "react-native-paper";
import styles from "@utils/styles";
import { View } from "react-native";
import Header from "@components/Header/Header";
import { Feather } from "@expo/vector-icons";
import colors from "@utils/colors";
const HomeSaveProgress = () => {
  return (
    <View style={styles.homeComponentWrapper}>
      <Header title="Zapisz postęp" />
      <View style={styles.centerContent}>
        <Feather name="camera" size={90} color={colors.tertiary} />
      </View>
    </View>
  );
};

export default HomeSaveProgress;
