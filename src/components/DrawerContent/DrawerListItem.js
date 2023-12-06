import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "@utils/styles";

const DrawerListItem = ({ icon, title, handler }) => {
  return (
    <View style={styles.drawerListItem}>
      <Pressable onPress={()=> handler(title)}>
        <Text style={styles.h4}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default DrawerListItem;
