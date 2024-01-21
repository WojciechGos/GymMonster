import DrawerContent from './DrawerContent'

const DrawerContentContainer = ({navigation}) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    const navigateToStatistic = ()=>{
        navigation.navigate("Atlas List", {intent: "Statistic"})
    }

    const props = {
        navigateToScreen: navigateToScreen,
        navigateToStatistic: navigateToStatistic
    }
    
    return <DrawerContent {...props}/>
}

export default DrawerContentContainer