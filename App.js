import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import Login from './src/screens/Authenticate/Login';
import colors from './src/assets/colors'

export default function App() {
  return (
    <PaperProvider >
      <View style={styles.container}>
        <Text variant='displayLarge'>Hello world</Text>
        <Login/>
      </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
