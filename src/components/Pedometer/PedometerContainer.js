import Pedometer from "./Pedometer"

const PedometerContainer = ()=>{
    const navigateToStatistics = ()=>{
        console.log('navigateToStatistics')
    }
    const props = {
        navigateToStatistics: navigateToStatistics,
    }
    return  <Pedometer {...props}/>
}

export default PedometerContainer