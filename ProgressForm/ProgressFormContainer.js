import ProgressForm from "./ProgressForm"

const ProgressFormContainer = ({ navigation }) => {
   
    const goToProgress = () =>{
        navigation.navigate('Progress')
    }


    const props = {
        goToProgress: goToProgress,
    
    }
    
    return <ProgressForm {...props} />
}

export default ProgressFormContainer
