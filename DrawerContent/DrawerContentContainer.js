import DrawerContent from './DrawerContent'

const DrawerContentContainer = ({navigation}) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    const props = {
        navigateToScreen:navigateToScreen
    }
    
    return <DrawerContent {...props}/>
}

export default DrawerContentContainer