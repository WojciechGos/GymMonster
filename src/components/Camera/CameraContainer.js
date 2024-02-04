import Camera from "./Camera"
import saveDimension from "@utils/saveDimension"

const CameraContainer = ({ navigation, route }) => {
    const data = route.params?.data

    const goToProgress = async (photoName) => {
        console.log(photoName)
        await saveDimension({ ...data, photoName: photoName })

        navigation.navigate("Progress")
    }

    const props = {
        goToProgress: goToProgress,
        data: data,
    }

    return <Camera {...props} />
}

export default CameraContainer
