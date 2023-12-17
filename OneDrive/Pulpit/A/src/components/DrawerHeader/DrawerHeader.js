import { View, Pressable } from "react-native";
import styles from "@utils/styles";
import { Feather } from "@expo/vector-icons";
import colors from "@utils/colors";

const DrawerHeader = ({toggleDrawer}) => {
  return (
    <View style={styles.drawerHeader}>
      <View style={styles.drawerHeaderIconWrapper}>
        <Pressable onPress={()=>toggleDrawer()}>
          <Feather name="menu" size={40} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerHeader;
