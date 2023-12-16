import HomeSaveProgress from "./HomeSaveProgress"

const HomeSaveProgressContainer = () => {
    const navigateToSaveProgress = () => {
        console.log("navigateToSaveProgress")
    }
    const props = {
        navigateToSaveProgress: navigateToSaveProgress,
    }
    return <HomeSaveProgress {...props}/>
}

export default HomeSaveProgressContainer
