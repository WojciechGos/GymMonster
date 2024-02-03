import DatePicker from "./DatePicker"
import { useState } from "react"

const DatePickerContainer = ({ selectedDays, setSelectedDays }) => {

    const handleDayPress = (day) => {
        // Check if the day is already selected
        const isDaySelected = selectedDays[day.dateString]

        // Toggle the selected state of the day
        let updatedSelectedDays
        if (isDaySelected) {
            // If day is already selected, remove it
            updatedSelectedDays = { ...selectedDays }
            delete updatedSelectedDays[day.dateString]
        } else {
            // If day is not selected, add it
            updatedSelectedDays = {
                ...selectedDays,
                [day.dateString]: { selected: true },
            }
        }

        // Update the selected days state
        setSelectedDays(updatedSelectedDays)
    }

    const props = {
        handleDayPress: handleDayPress,
        selectedDays: selectedDays,
    }
    return <DatePicker {...props} />
}

export default DatePickerContainer
