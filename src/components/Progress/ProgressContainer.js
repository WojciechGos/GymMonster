import Progress from "./Progress"
import { useState } from "react"

const data = [
    {
        date: "2023-10-20",
        
    }
]

const ProgressContainer = () => {

    [progressData, setProgressData] = useState([]);

    return <Progress />
}

export default ProgressContainer
