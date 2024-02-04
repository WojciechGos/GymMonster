import ProgressForm from "./ProgressForm"
import saveDimension from "@utils/saveDimension"

const ProgressFormContainer = ({ navigation }) => {
   
    const goToProgress = async (data) =>{
        await saveDimension(data)
        navigation.navigate('Progress')
    }
    const goToCamera = (data) =>{
        navigation.navigate('Camera', {data:data})
    }


    const props = {
        goToProgress: goToProgress,
        goToCamera: goToCamera,
    }
    
    return <ProgressForm {...props} />
}

export default ProgressFormContainer