import Pedometer_ from "./Pedometer"
import { useState, useEffect } from 'react';
import { Pedometer } from 'expo-sensors';

const PedometerContainer = ({ navigation }) => {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));

        if (isAvailable) {
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - 1);

            const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
            if (pastStepCountResult) {
                setPastStepCount(pastStepCountResult.steps);
            }

            return Pedometer.watchStepCount(result => {
                setCurrentStepCount(result.steps);
            });
        }
    };

    useEffect(() => {
        const subscription = subscribe();
        return () => subscription && subscription.remove();
    }, []);

    console.log('isPedometerAvailable',isPedometerAvailable);
    console.log('pastStepCount',pastStepCount);
    console.log('currentStepCount',currentStepCount);

    const navigateToStatistics = () => {
        // console.log('navigateToStatistics')
        navigation.navigate('Statistic')
    }
    const props = {
        navigateToStatistics: navigateToStatistics,
        pastStepCount: pastStepCount
    }
    return <Pedometer_ {...props} />
}

export default PedometerContainer