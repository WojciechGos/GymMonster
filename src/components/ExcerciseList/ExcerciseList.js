import { View, Pressable, BackHandler } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import ExcerciseHeader from "@components/ExcerciseHeader/ExcerciseHeader"

const ExcerciseList = ({ excercises, title, goToIntent }) => {
    // console.log('excercises' + excercises.map(item => item.title))

    return (
        <View style={styles.container}>
            <ExcerciseHeader title={title} />
            {excercises.map((item) => (
                <Pressable key={item.id} onPress={() => goToIntent(item)}>
                    <View style={styles.spacing}>
                        <Text style={styles.exercisesWriting}>
                            {item.title}
                        </Text>
                    </View>
                </Pressable>
            ))}
        </View>
    )
}

export default ExcerciseList
