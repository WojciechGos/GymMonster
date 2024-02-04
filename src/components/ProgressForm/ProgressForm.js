import React, { useState } from "react"
import { View, Text } from "react-native"
import { TextInput } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/colors"
import ButtonWithoutMargin from "@components/ButtonWithoutMargin/ButtonWithoutMargin"
import ButtonWithCam from "@components/ButtonWithCam/ButtonWithCam"

const ProgressForm = ({ goToProgress, goToCamera }) => {
    // State variables for each text input
    const [chestGirth, setChestGirth] = useState("")
    const [abdominalGirth, setAbdominalGirth] = useState("")
    const [armGirth, setArmGirth] = useState("")
    const [forearmGirth, setForearmGirth] = useState("")
    const [thighGirth, setThighGirth] = useState("")
    const [calfGirth, setCalfGirth] = useState("")

    return (
        <View>
            <View>
                <Text style={styles.h4}>Obwód klatki piersiowej</Text>
                <TextInput
                    style={styles.textInputFormProgress}
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={chestGirth}
                    onChangeText={(text) => setChestGirth(text)}
                />
            </View>

            <View>
                <Text style={styles.h4}>Obwód brzucha</Text>
                <TextInput
                    style={styles.textInputFormProgress}
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={abdominalGirth}
                    onChangeText={(text) => setAbdominalGirth(text)}
                />
            </View>

            <View>
                <Text style={styles.h4}>Obwód ramienia</Text>
                <TextInput
                    style={styles.textInputFormProgress}
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={armGirth}
                    onChangeText={(text) => setArmGirth(text)}
                />
            </View>

            <View>
                <Text style={styles.h4}>Obwód przedramienia</Text>
                <TextInput
                    style={styles.textInputFormProgress}
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={forearmGirth}
                    onChangeText={(text) => setForearmGirth(text)}
                />
            </View>

            <View>
                <Text style={styles.h4}>Obwód uda</Text>
                <TextInput
                    style={styles.textInputFormProgress}
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={thighGirth}
                    onChangeText={(text) => setThighGirth(text)}
                />
            </View>

            <View>
                <Text style={styles.h4}>Obwód łydki</Text>
                <TextInput
                    style={styles.textInputFormProgress}
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                    keyboardType="numeric"
                    value={calfGirth}
                    onChangeText={(text) => setCalfGirth(text)}
                />
            </View>

            <View style={styles.loginForgotPasswordWrapper}>
                <ButtonWithoutMargin
                    name="Zapisz"
                    handler={() =>
                        goToProgress({
                            chestGirth: chestGirth,
                            abdominalGirth: abdominalGirth,
                            armGirth: armGirth,
                            forearmGirth: forearmGirth,
                            thighGirth: thighGirth,
                            calfGirth: calfGirth,
                        })
                    }
                />
                <ButtonWithCam
                    handler={() =>
                        goToCamera({
                            chestGirth: chestGirth,
                            abdominalGirth: abdominalGirth,
                            armGirth: armGirth,
                            forearmGirth: forearmGirth,
                            thighGirth: thighGirth,
                            calfGirth: calfGirth,
                        })
                    }
                />
            </View>
        </View>
    )
}

export default ProgressForm
