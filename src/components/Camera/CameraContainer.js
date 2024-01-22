import Camera from "./Camera"

const CameraContainer = ({ navigation }) => {
   
    const goToProgressForm = () =>{
        navigation.navigate('Progress Form')
    }

    const props = {
        goToProgressForm: goToProgressForm,
     
    }
    
    return <Camera {...props} />
}

export default CameraContainer