import {  View, Pressable, BackHandler } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import BackHeader from "../Headers/BackHeader"

const ExerciseBackForm = () => {
    return (

        <View style={styles.container}>
            <BackHeader />
            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Ściąganie wyciągu poziomego</Text>
                </View>
            </Pressable>
            <Text></Text>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Ściąganie wyciągu górnego</Text>
                </View>
            </Pressable>
            <Text></Text>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Podciąganie na drążku</Text>
                </View>
            </Pressable>
            <Text></Text>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Wiosłowanie</Text>
                </View>
            </Pressable>
            <Text></Text>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Martwy ciąg</Text>
                </View>
            </Pressable>
            <Text></Text>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>


                    <Text style={styles.exercisesWriting}>
                        Wiosłowanie kettlem</Text>
                </View>
            </Pressable>

        </View>
    )
}

export default ExerciseBackForm
