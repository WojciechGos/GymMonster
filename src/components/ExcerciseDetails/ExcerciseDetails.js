import React from "react"
import { View, Text } from "react-native"
import styles from "../../utils/styles"
import ExcerciseHeader from "@components/ExcerciseHeader/ExcerciseHeader"
import { Video, ResizeMode } from 'expo-av';

const ExcerciseDetails = ({ url, exerciseName, exerciseDescription }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.containerExerciseDetailsOut}>
            <ExcerciseHeader title={exerciseName} />
            <View style={styles.containerExerciseDetails}>
                <Video
                    style={styles.containerVideo}
                    source={{
                        uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                    }}
                    useNativeControls
                    shouldPlay
                    isLooping
                    onLoadStart={() => console.log('on load start')}
                    onLoad={() => console.log('on load')}
                />
                <View style={styles.containerVideoText}>

                </View>
            </View>
        </View>
    )
}

export default ExcerciseDetails
