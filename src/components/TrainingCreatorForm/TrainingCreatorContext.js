import React, { createContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const TrainingCreatorContext = createContext()

export function TrainingCreatorProvider({ children }) {
    const data = {
        name: "klata",
        inne: "paradoksalnie to głównie dieta proszę pana.",
    }
    const [excercises, setExcercises] = useState([])

    const addToStorage = async (item) => {
        try {
            await AsyncStorage.setItem("@storage_key", item)
        } catch (error) {
            console.error(error)
        }
    }

    const getFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem("@storage_key")
            console.log(value);
            if(value !== null)
                setExcercises([value])

        } catch (error) {
            console.error(error)
        }
    }

    const addExcercise = (obj) => {
        setExcercises([...excercises, obj])
        addToStorage(obj)
    }
    return (
        <TrainingCreatorContext.Provider
            value={{
                data,
                excercises,
                addExcercise,
                getFromStorage,
            }}
        >
            {children}
        </TrainingCreatorContext.Provider>
    )
}

export default TrainingCreatorContext
