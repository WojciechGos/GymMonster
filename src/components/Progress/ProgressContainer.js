import Progress from "./Progress"
import { useState, useEffect } from "react"

const data = [
    {
        date: "2023-10-20",
        image: "3.jpg",
        chestGirth: 105,
        abdominalGirth: 80,
        armGirth: 38,
        forearmGirth: 25,
        thighGirth: 44,
        calfGirth: 30,
    },
    {
        date: "2023-09-17",
        image: "2.jpg",
        chestGirth: 103,
        abdominalGirth: 81,
        armGirth: 38,
        forearmGirth: 24,
        thighGirth: 41,
        calfGirth: 29,
    },
    {
        date: "2023-08-12",
        image: "1.jpg",
        chestGirth: 103,
        abdominalGirth: 80,
        armGirth: 37,
        forearmGirth: 24,
        thighGirth: 41,
        calfGirth: 29,
    }
]

const ProgressContainer = ({ navigation }) => {
    [progressData, setProgressData] = useState(data);

    useEffect(() => {
        setProgressData(data);
    }, [data])
    
    const props = {
        data: progressData
    }

    return <Progress {...props}/>
}

export default ProgressContainer
