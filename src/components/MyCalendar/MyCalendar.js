import styles from "@utils/styles";
import colors from "@utils/colors";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { View } from "react-native";
import Header from "@components/Header/Header";

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
};

LocaleConfig.defaultLocale = "pl";

const MyCalendar = ({ selectedDay, setSelectedDay, markedDates }) => {
  return (
    <View>
      <Header title="Kalendarz" />

      <Calendar
        onDayPress={(day) => setSelectedDay(day.dateString)}
        markedDates={markedDates}
        style={styles.calendar}
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.background,
          selectedDayBackgroundColor: colors.primary,
          dayTextColor: colors.text,
          todayTextColor: colors.weakRed,
        }}
      />
    </View>
  );
};

export default MyCalendar;
