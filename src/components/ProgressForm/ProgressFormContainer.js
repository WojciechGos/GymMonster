import ProgressForm from "./ProgressForm"

const ProgressFormContainer = ({ navigation }) => {
   
    const goToProgress = () =>{
        navigation.navigate('Progress')
    }
    const goToCamera = () =>{
        navigation.navigate('Camera')
    }


    const props = {
        goToProgress: goToProgress,
        goToCamera: goToCamera,
    }
    
    return <ProgressForm {...props} />
}

export default ProgressFormContainer