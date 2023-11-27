import React, {createContext, useState} from "react";

const TrainingCreatorContext = createContext()

export function TrainingCreatorProvider ({children}){
    const data = {
        name:"klata",
        inne:"paradoksalnie to głównie dieta proszę pana."
    }
    const [excercises, setExcercises] = useState([])
    const addExcercise = (obj)=>{
        setExcercises([...excercises, obj])
    }
    return (
        <TrainingCreatorContext.Provider 
            value={{
                data, 
                excercises,
                addExcercise,
            }}>
            {children}
        </TrainingCreatorContext.Provider>
    )
}

export default TrainingCreatorContext