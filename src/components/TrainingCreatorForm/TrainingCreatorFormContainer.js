import TrainingCreatorForm from "./TrainingCreatorForm"
import * as FileSystem from "expo-file-system"

import { useEffect, useState } from "react"

const TrainingCreatorFormContainer = ({ navigation, route }) => {
    const data = route.params?.data

    const [excercises, setExcercises] = useState([])
    const [renderState, setRenderState] = useState(true)
    const [oldExcercise, setOldExcercise] = useState({ name: "" })
    const [selectedDays, setSelectedDays] = useState({})
    const filePath = FileSystem.documentDirectory + "planCreator.json"

    const clearFile = async () => {
        console.log("clear")
        try {
            const initialData = []
            const initialJsonString = JSON.stringify(initialData)
            await FileSystem.writeAsStringAsync(filePath, initialJsonString)

            setRenderState(!renderState)
        } catch (error) {
            console.error("Error clearing file:", error)
        }
    }
    const saveTraining = async () => {
        const tmp = await FileSystem.readAsStringAsync(filePath)
        console.log("tmp")
        console.log(tmp)

        // await clearFile()
    }

    const deleteExcercise = async (name) => {
        console.log("delete " + name)
        try {
            const existingData = await FileSystem.readAsStringAsync(filePath)
            const jsonData = JSON.parse(existingData)
            console.log(jsonData)
            const filteredData = jsonData.filter((item) => item.name !== name)
            console.log("filtered")
            console.log(filteredData)

            const jsonString = JSON.stringify(filteredData)
            await FileSystem.writeAsStringAsync(filePath, jsonString)

            setRenderState(!renderState)
        } catch (error) {
            console.error("Error deleting exercise from file:", error)
        }
    }

    const updateExcercise = async (name, series, reps, weight) => {
        console.log("update ................")
        try {
            const existingData = await FileSystem.readAsStringAsync(filePath)
            const jsonData = JSON.parse(existingData)

            const existingObjectIndex = jsonData.findIndex(
                (item) => item.name === name
            )

            if (existingObjectIndex !== -1) {
                jsonData[existingObjectIndex] = {
                    ...jsonData[existingObjectIndex],
                    series: series,
                    reps: reps,
                    weight: weight,
                }

                const jsonString = JSON.stringify(jsonData)
                await FileSystem.writeAsStringAsync(filePath, jsonString)
                setRenderState(!renderState)
            }
        } catch (error) {
            console.error("Error updating exercise in file:", error)
        }
    }

    const addExcerciseToFile = async (excercise) => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(filePath)

            if (!fileInfo.exists) {
                // console.log("File does not exist. Creating...")
                const initialData = []
                const initialJsonString = JSON.stringify(initialData)
                await FileSystem.writeAsStringAsync(filePath, initialJsonString)
                // console.log("File created successfully:", filePath)
            }

            const existingData = await FileSystem.readAsStringAsync(filePath)

            const jsonData = JSON.parse(existingData)

            const existingObject = jsonData.find(
                (item) => item.name === excercise.name
            )

            if (!existingObject) {
                const newObject = {
                    id: excercise.name,
                    title: excercise.title,
                    name: excercise.name,
                    series: 0,
                    reps: 0,
                    weight: 0,
                }
                if (newObject.id === "undefined") return

                jsonData.push(newObject)

                const jsonString = JSON.stringify(jsonData)
                await FileSystem.writeAsStringAsync(filePath, jsonString)
            } else {
                // console.log("Object already exists:", existingObject)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const assignExcercisesFromFile = async () => {
        const existingData = await FileSystem.readAsStringAsync(filePath)
        const jsonData = JSON.parse(existingData)
        console.log("")
        console.log(jsonData)
        setExcercises(jsonData)
    }

    useEffect(() => {
        // console.log(
        //     "DATA FROM ROUTEmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
        // )
        // console.log(data)

        const handleRender = async () => {
            if (data) {
                if (oldExcercise.name !== data.item.name) {
                    setOldExcercise(data.item)
                    await addExcerciseToFile(data.item)
                }
            }
            await assignExcercisesFromFile()
        }
        handleRender()
    }, [data, renderState])

    const addExcercise = () => {
        navigation.navigate("Atlas List", { intent: "Training Plan Creator" })
    }

    const props = {
        saveTraining: saveTraining,
        addExcercise: addExcercise,
        excercises: excercises,
        updateExcercise: updateExcercise,
        deleteExcercise: deleteExcercise,
        selectedDays: selectedDays,
        setSelectedDays: setSelectedDays,
    }
    return <TrainingCreatorForm {...props} />
}

export default TrainingCreatorFormContainer
