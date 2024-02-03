import React, { useState, useEffect, useRef } from "react"
import { Camera, CameraType } from "expo-camera"
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import * as FileSystem from "expo-file-system"



export default function Cam({ goToProgress }) {
    const [type, setType] = useState(CameraType.back)
    const [permission, requestPermission] = Camera.useCameraPermissions()

    console.log(permission)

    const [photoUri, setPhotoUri] = useState(null)

    let cameraRef = useRef()

    useEffect(() => {
        const askForPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted")
        }
        askForPermission()
    }, [])

    function toggleCameraType() {
        setType((current) =>
            current === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        )
    }




    async function takePicture() {
        if (cameraRef) {
            try {
                const { uri } = await cameraRef.takePictureAsync()
                // const projectFolder = `${FileSystem.documentDirectory}`
                const fileName = `photo_${Date.now()}.jpg`
                // const newUri = `${projectFolder}${fileName}`

                const folderName = "photos" // Name of the folder
                const folderUri = `${FileSystem.documentDirectory}${folderName}`
                const fileUri = `${folderUri}/${fileName}`

                const folderExists = await FileSystem.getInfoAsync(folderUri)
                if (!folderExists.exists) {
                    await FileSystem.makeDirectoryAsync(folderUri, {
                        intermediates: true,
                    })
                }

                await FileSystem.writeAsStringAsync(fileUri, uri, {
                    encoding: FileSystem.EncodingType.Base64,
                })
                console.log("Zdjęcie zapisane w folderze:", fileUri)

                setPhotoUri(uri)

                // await MediaLibrary.saveToLibraryAsync(newUri)
            } catch (error) {
                console.error("Błąd podczas robienia zdjęcia:", error)
            }
        }
    }
    

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                ref={(ref) => (cameraRef = ref)}
            />
            {photoUri ? (
                <Image
                    source={{ uri: photoUri }}
                    style={styles.previewImage}
                    resizeMode="cover"
                />
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleCameraType}
                    >
                        <Text style={styles.text}>Odwróć kamerkę</Text>
                    </TouchableOpacity>
                    <Button
                        onPress={takePicture}
                        title="Zrób zdjęcie i zapisz"
                    />
                </View>
            )}
            {photoUri && (
                <View style={styles.buttonContainer}>
                    <Button
                        title="Przejdź do progresu"
                        onPress={() => goToProgress()}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    previewImage: {
        width: 350,
        height: 610,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#16151A",
    },
    button: {
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
})
