import { View } from "react-native"
import MyCalendar from "./MyCalendar"
import { useState } from "react"
import CalendarDataDisplayContainer from "./CalendarDataDisplay/CalendarDataDisplayContainer"



const MyCalendarContainer = ()=>{

    const [selectedDay, setSelectedDay] = useState('')
    const markedDates = {
        [selectedDay]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
    }

    const props = {
        selectedDay: selectedDay,
        setSelectedDay: setSelectedDay,
        markedDates: markedDates
    }
    return (
        <View>
            <MyCalendar {...props}/>
            <CalendarDataDisplayContainer selectedDay={selectedDay}/>
        </View>
    )
}

export default MyCalendarContainer