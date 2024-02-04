import HomeSaveProgress from "./HomeSaveProgress"

const HomeSaveProgressContainer = ({ navigation }) => {
    const navigateToSaveProgress = () => {
        navigation.navigate("Progress Form")
    }
    const props = {
        navigateToSaveProgress: navigateToSaveProgress,
    }
    return <HomeSaveProgress {...props} />
}

export default HomeSaveProgressContainer
