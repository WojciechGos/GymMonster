import Camera from "./Camera"

const CameraContainer = ({ navigation, route }) => {
   
    const data = route.params?.data

    const goToProgress = () => {
        navigation.navigate("Progress")
    }

    const props = {
        goToProgress: goToProgress,
        data:data
    }
    
    return <Camera {...props} />
}

export default CameraContainer