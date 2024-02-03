import React, { useState, useEffect } from "react"
import { View, Image } from "react-native"
import { Text } from "react-native-paper"
import styles from "@utils/styles"
import * as FileSystem from "expo-file-system"

const ProgresItem = ({ item }) => {
    const [imageUri, setImageUri] = useState(null)

    const readImage = async () => {
        try {
            const folderName = "photos" // Name of the folder
            const folderUri = `${FileSystem.documentDirectory}${folderName}`
            const fileUri = `${folderUri}/${item.photoName}`

            const imageData = await FileSystem.readAsStringAsync(fileUri, {
                encoding: FileSystem.EncodingType.Base64,
            })

            setImageUri(`data:image/jpeg;base64,${imageData}`)
        } catch (error) {
            console.error("Error loading image:", error)
        }
    }

    useEffect(() => {
        readImage()
    }, [])

    return (
        <View style={{ margin: 10, flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
                <Text style={styles.text}>
                    Owod klatki piersiowej: {item.chestGirth}
                </Text>
                <Text style={styles.text}>
                    Obwod brzucha: {item.abdominalGirth}
                </Text>
                <Text style={styles.text}>Obwod ramienia: {item.armGirth}</Text>
                <Text style={styles.text}>
                    Obwod przedramienia: {item.forearmGirth}
                </Text>
                <Text style={styles.text}>Obwod uda: {item.thighGirth}</Text>
                <Text style={styles.text}>Obwod lydki: {item.calfGirth}</Text>
            </View>
            {imageUri !== null ? (
                <Image
                    source={{ uri: imageUri }}
                    style={{ width: 170, height: 133 }}
                />
            ) : (
                <Text style={styles.h2}>No Image Available</Text>
            )}
        </View>
    )
}

export default ProgresItem
