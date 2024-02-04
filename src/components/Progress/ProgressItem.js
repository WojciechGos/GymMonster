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
            // console.log("fileUri")
            // console.log(fileUri)

            if(!item.photoName)
                return 
            const imageData = await FileSystem.readAsStringAsync(fileUri, {
                encoding: FileSystem.EncodingType.Base64,
            })
            //    const fileContents = await FileSystem.readAsStringAsync(
            //        imageData
            //    )
            // const imageData = await FileSystem.readAsStringAsync(fileUri)

            // console.log(imageData)
            
            
            setImageUri(`data:image/jpg;base64,${imageData}`)
            // setImageUri(imageData)
            // setImageUri(
            //     "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FGymMonster-421c4212-5985-4dc3-97cf-73735b14614a/Camera/440d80a6-00dc-490b-bf6f-0e2f512d4613.jpg"
            // )

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
                <>
       
                    <Image
                        source={{
                            uri: imageUri,
                        }}
                        onError={(error) => {
                            // console.log(error.message)
                            // console.error(error)
                        }}
                        style={{ width: 170, height: 133 }}
                    />
                </>
            ) : (
                <Text style={styles.h2}>No Image Available</Text>
            )}
        </View>
    )
}

export default ProgresItem
