import { View } from "react-native"
import styles from "@utils/styles"
import colors from "@utils/colors"
import { Text } from "react-native-paper"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { useState } from "react"

LocaleConfig.locales["pl"] = {
    monthNames: [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
    ],
    dayNames: [
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
        "Niedziela",
    ],
    dayNamesShort: ["PN", "WT", "ŚR", "CZW", "PT", "SOB", "NIEDZ"],
}

LocaleConfig.defaultLocale = "pl"
const DatePicker = ({ handleDayPress, selectedDays }) => {
    
    return (
        <View>
            <Calendar
                onDayPress={handleDayPress}
                // markedDates={markedDates}
                style={styles.calendar}
                theme={{
                    backgroundColor: colors.background,
                    calendarBackground: colors.background,
                    selectedDayBackgroundColor: colors.primary,
                    dayTextColor: colors.text,
                    todayTextColor: colors.weakRed,
                }}
                markedDates={selectedDays}
            />
            <Text>Selected Days:</Text>
            {Object.keys(selectedDays).map((date) => (
                <Text style={styles.h3} key={date}>
                    {date}
                </Text>
            ))}
        </View>
    )
}

export default DatePicker
