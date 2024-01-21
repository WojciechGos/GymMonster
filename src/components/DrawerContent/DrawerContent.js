import { View } from "react-native"
import DrawerListItem from "./DrawerListItem"
import styles from "@utils/styles"
import colors from "@utils/colors"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

const CustomDrawer = ({ navigateToScreen, navigateToStatistic }) => {
    return (
        <View style={styles.drawerWrapper}>
            <DrawerListItem
                title="Strona Główna"
                link="Home"
                handler={navigateToScreen}
                icon={<Entypo name="home" size={24} color={colors.primary} />}
            />
            <DrawerListItem
                title="Plan treningowy"
                link="Training Plan"
                handler={navigateToScreen}
                icon={
                    <Ionicons
                        name="md-calendar-sharp"
                        size={24}
                        color={colors.primary}
                    />
                }
            />
            <DrawerListItem
                title="Statystyki"
                link="Statistic"
                handler={navigateToStatistic}
                icon={
                    <Fontisto
                        name="line-chart"
                        size={24}
                        color={colors.primary}
                    />
                }
            />
            <DrawerListItem
                title="Osiągnięcia"
                link="Achievement"
                handler={navigateToScreen}
                icon={
                    <MaterialCommunityIcons
                        name="star"
                        size={28}
                        color={colors.primary}
                    />
                }
            />
            <DrawerListItem
                title="Kreator planu"
                link="Training Plan Creator"
                handler={navigateToScreen}
                icon={
                    <SimpleLineIcons
                        name="note"
                        size={24}
                        color={colors.primary}
                    />
                }
            />
            <DrawerListItem
                title="Atlas ćwiczeń"
                link="Atlas List"
                handler={navigateToScreen}
                icon={
                    <FontAwesome
                        name="folder"
                        size={24}
                        color={colors.primary}
                    />
                }
            />
            <DrawerListItem
                title="Zapisz postęp"
                link="Progress Form"
                handler={navigateToScreen}
                icon={
                    <MaterialIcons
                        name="add-a-photo"
                        size={24}
                        color={colors.primary}
                    />
                }
            />
            <DrawerListItem
                title="Zobacz postępy"
                link="Progress"
                handler={navigateToScreen}
                icon={
                    <Entypo
                        name="back-in-time"
                        size={24}
                        color={colors.primary}
                    />
                }
            />
            {/* //<DrawerListItem title='Exercise Atlas' handler={navigateToScreen} />
           // <DrawerListItem title='Exercise Back' handler={navigateToScreen} />         */}
        </View>
    )
}

export default CustomDrawer
