import { View } from "react-native";
import DrawerListItem from "./DrawerListItem";
import styles from "@utils/styles";

const CustomDrawer = ({navigateToScreen}) =>{
    return (
        <View style={styles.drawerWrapper}>
            <DrawerListItem title='Home' handler={navigateToScreen}/>
            <DrawerListItem title='Training Plan' handler={navigateToScreen}/>
            <DrawerListItem title='Training Plan Creator' handler={navigateToScreen} />
            <DrawerListItem title='Exercise Atlas' handler={navigateToScreen} />
            <DrawerListItem title='Exercise Back' handler={navigateToScreen} />
        </View>
    )

}

export default CustomDrawer
