import React from 'react';
import { Image, StyleSheet, View , Text} from 'react-native';

const Progress = ({photoUri}) => {
    
    return (
    <View style={styles.container}>
      {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});

export default Progress;
