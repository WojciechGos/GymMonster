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
        photoName: "photo_1706985740855.jpg",
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
        photoName: "photo_1706980732075.jpg",
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
        photoName: "photo_1706980732075.jpg",
    },
]

const ProgressContainer = ({ navigation }) => {
    [progressData, setProgressData] = useState(data);

    const readFileFromFolder = async ()=>{
        
    }

    useEffect(() => {
        setProgressData(data);
    }, [data])
    
    const props = {
        data: progressData
    }

    return <Progress {...props}/>
}

export default ProgressContainer

// import React from 'react';

// const ProgressContainer = () => {
  
//     const photoUri = 'file:///data/user/0/host.exp.exponent/files/example.jpg';

//   return <Progress photoUri={photoUri} />;
// };

// export default ProgressContainer;

