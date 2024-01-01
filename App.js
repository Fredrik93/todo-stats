import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import TodoScreen from './Screens/TodoScreen';
import InputForm from './Components/InputForm';

export default function App() {



  return (
    <View style={styles.container}>
      <Text style={styles.text} >Open up App.js!</Text>
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
