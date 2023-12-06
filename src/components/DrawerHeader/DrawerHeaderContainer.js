import DrawerHeader from './DrawerHeader'

const DrawerHeaderContainer = ({navigation, route, options})=>{

    const toggleDrawer = ()=>{
        navigation.toggleDrawer()
    }
    const props={
        toggleDrawer: toggleDrawer
    }

    return <DrawerHeader {...props}/>
}

export default DrawerHeaderContainer