import StatisticAccordion from "./StatisticAccordion"
import { useState } from "react"
import pedometerData from "@data/pedometerData"

const StatisticAccordionContainer = ({route}) => {
    // zmienna data zawiera:
    // konkretne ćwiczenie w formacie:
    // {
    //     "id": 33,
    //     "title": "Martwy ciąg",
    //     "name": "Deadlift",
    //     "partName": "legs",
    //     "partTitle": "Nogi",
    //     "description": "",
    //     "url": ""
    // } (są to dane z pliku excercisesListData.json)
    //
    // TODO
    // Zrób plik json z danymi historycznymi pewnych ćwiczeń które znajdują się w atlasie.
    // Format danych w tym pliku ma być w tym samym formacie co dane z ekranu Treningu.
    //
    // Potem gdy już zrobisz ten plik,
    // dodaj w StatisticAccordionContainer wyszukiwanie tego ćwiczenia po atrybcie "name" ze zmiennej data.
    // Następnie wyszukane historie  wyszukanego ćwiczenia podmień z pedometerData.
    //
    // Jeszcze jedno zrób tak żeby każdy obiekt w pliku excercisesListData.json zawierał takie atrybuty jak:
    //     "title": "Martwy ciąg",
    //     "name": "Deadlift",
    //     "partName": "legs",
    //     "partTitle": "Nogi",
    // bo potem w backendzie będzie mi łatwo podłączyć twoją prace.

    const data = route.params?.data
    console.log(data)

    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)

    const props = {
        expanded: expanded,
        handlePress: handlePress,
        data: pedometerData,
    }
    return <StatisticAccordion {...props} />
}

export default StatisticAccordionContainer
