import { View, Pressable } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"


const ExerciseChestForm = () => {
    return (

        <View style={styles.container}>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Wyciskanie na ławce płaskiej</Text>
                </View>
            </Pressable>


            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Wyciskanie na ławce ujemnej</Text>
                </View>
            </Pressable>


            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Wyciskanie na ławce dodatniej</Text>
                </View>
            </Pressable>


            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Rozpiętki</Text>
                </View>
            </Pressable>


            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>

                    <Text style={styles.exercisesWriting}>
                        Pompki</Text>
                </View>
            </Pressable>

            <Pressable on Press onPress={() => goToForgorPassword()}>
                <View style={styles.spacing}>


                    <Text style={styles.exercisesWriting}>
                        Dipy</Text>
                </View>
            </Pressable>

        </View>
    )
}

export default ExerciseChestForm
