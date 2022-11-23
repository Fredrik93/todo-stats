import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import TodoScreen from './Screens/TodoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Open up Appdd.js!</Text>
      <StatusBar style="auto" />
      <TodoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  }
});
