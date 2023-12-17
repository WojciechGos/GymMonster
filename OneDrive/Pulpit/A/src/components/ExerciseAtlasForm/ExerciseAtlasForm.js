import { Image, View, Pressable } from "react-native"
import back from "@public/Back-icon.png"
import chest from "@public/Chest-icon.png"
import shoulder from "@public/Shoulder-icon.png"
import arm from "@public/Arm-icon.png"
import abs from "@public/ABS-icon.png"
import legs from "@public/Legs-icon.png"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import WhiteLine from "../WhiteLine/WhiteLine"

const ExerciseAtlasForm = ({goToExerciseBack, goToExerciseChest, goToExerciseShoulder, goToExerciseArm, goToExerciseAbs, goToExerciseLegs}) => {
    return (
        <View>

            <Pressable on Press onPress={() => goToExerciseBack()}>
                  <View style={styles.spacing}>

                        <Image source={back}
                            style={styles.imageSize} />
                        <Text style={styles.bigWriting}>
                            Plecy</Text>
                   </View>
            </Pressable>
            <WhiteLine />

            <Pressable on Press onPress={() => goToExerciseChest()}>
                <View style={styles.spacing}>

                    <Image source={chest}
                        style={styles.imageSize} />

                    <Text style={styles.bigWriting}>
                        Klatka</Text>
                </View>
            </Pressable>
            <WhiteLine />

            <Pressable on Press onPress={() => goToExerciseShoulder()}>
                <View style={styles.spacing}>

                    <Image source={shoulder}
                        style={styles.imageSize} />

                    <Text style={styles.bigWriting}>
                        Barki</Text>
                </View>
            </Pressable>
            <WhiteLine />

            <Pressable on Press onPress={() => goToExerciseArm()}>
                <View style={styles.spacing}>

                    <Image source={arm}
                        style={styles.imageSize} />

                    <Text style={styles.bigWriting}>
                        Ręce</Text>
                </View>
            </Pressable>
            <WhiteLine />

            <Pressable on Press onPress={() => goToExerciseAbs()}>
                <View style={styles.spacing}>

                    <Image source={abs}
                        style={styles.imageSize} />

                    <Text style={styles.bigWriting}>
                        Brzcuh</Text>
                </View>
            </Pressable>
            <WhiteLine />

            <Pressable on Press onPress={() => goToExerciseLegs()}>
                <View style={styles.spacing}>

                    <Image source={legs}
                        style={styles.imageSize} />

                    <Text style={styles.bigWriting}>
                        Nogi</Text>
                </View>
            </Pressable>
            <WhiteLine />

        </View>

    )
}

export default ExerciseAtlasForm
