import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";

/**
 *
 * @param icon it is displayed in drawer menu
 * @param title it is displayed in drawer menu
 * @param link it is name in src/navigation/drawer that move you to given screen
 * @param handler it function reference that realizes move to another screen
 *
 *
 */
const DrawerListItem = ({ icon, title, link, handler }) => {
  return (
    <View style={styles.drawerListItem}>
      <Pressable onPress={() => handler(link)}>
        <View style={styles.drawerItemWrapper}>
          <View style={styles.iconWrapper}>{icon}</View>
          <Text style={styles.h4}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DrawerListItem;
