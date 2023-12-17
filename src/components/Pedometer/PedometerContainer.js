import Pedometer from "./Pedometer"

const PedometerContainer = ({navigation})=>{
    const navigateToStatistics = ()=>{
        // console.log('navigateToStatistics')
        navigation.navigate('Statistic')
    }
    const props = {
        navigateToStatistics: navigateToStatistics,
    }
    return  <Pedometer {...props}/>
}

export default PedometerContainer