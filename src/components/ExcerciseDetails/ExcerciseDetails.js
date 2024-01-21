import React from "react"
import { View, Text } from "react-native"
import styles from "../../utils/styles"
import ExcerciseHeader from "@components/ExcerciseHeader/ExcerciseHeader"
import YoutubePlayer from 'react-native-youtube-iframe';

const ExcerciseDetails = ({ url, exerciseName, exerciseDescription }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.containerExerciseDetailsOut}>
            <ExcerciseHeader title={exerciseName} />
            <View style={styles.containerExerciseDetails}>
                <YoutubePlayer
                    height={238}
                    play={true}
                    videoId={url}
                />
                <View style={styles.containerVideoText}>
                    <Text style={styles.containerVideoTextText}>
                        {exerciseDescription}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ExcerciseDetails
