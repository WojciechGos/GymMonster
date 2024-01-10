import React from "react"
import { View, Text } from "react-native"
import styles from "../../utils/styles"
import ExcerciseHeader from "@components/ExcerciseHeader/ExcerciseHeader"

const ExcerciseDetails = ({ url, exerciseName, exerciseDescription }) => {
    return (
        <View style={styles.container}>
            <ExcerciseHeader title={exerciseName} />

            <Text style={styles.h3}>
                {" "}
                Opis ćwiczenia: {exerciseDescription}
            </Text>
        </View>
    )
}

export default ExcerciseDetails
