import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function Cam({goToProgressForm}) {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null);

  let cameraRef = useRef();

  function toggleCameraType() {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  async function takePicture() {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        const projectFolder = `${FileSystem.documentDirectory}public/photos/`;
        const fileName = `photo_${Date.now()}.jpg`;
        const newUri = `${projectFolder}${fileName}`;

        await FileSystem.makeDirectoryAsync(projectFolder, { intermediates: true });

        await FileSystem.moveAsync({
          from: uri,
          to: newUri,
        });

        console.log('Zdjęcie zapisane w folderze:', projectFolder);

        setPhotoUri(newUri);
      } catch (error) {
        console.error('Błąd podczas robienia zdjęcia:', error);
      }
    }
  }

  
  const savePhoto = async () => {
    try {
      if (photoUri) {
        await MediaLibrary.saveToLibraryAsync(photoUri);
        setPhotoUri(null);
        goToProgress();
      }
    } catch (error) {
      console.error('Błąd:', error);
    }
  }
  

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => (cameraRef = ref)}>
      </Camera>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.previewImage} resizeMode="cover" />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Odwróć kamerkę</Text>
          </TouchableOpacity>
          <Button onPress={takePicture} title="Zrób zdjęcie i zapisz" />
        </View>
      )}
      {photoUri && (
        <View style={styles.buttonContainer}>
          <Button title="Powrót" onPress={() => goToProgressForm()} />
        </View>
      )}
    </View>
  );
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
    height: 680,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#16151A',
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
