// InputForm.js

import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const InputForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const inputRef = useRef(null); // Create a ref for the TextInput
  const [counter, setCounter] = useState(0)
  const handleAddTask = () => {
    //if input is empty, dont save item 
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
      focusInput(); // Refocus after task is added

    }
  };
  const handleDemoAddTask = () => {

    onAddTask("test-task " + counter);
    setTask('');
    focusInput(); // Refocus after task is added
    setCounter(counter + 1)
  };

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
    // Optionally, add an event listener for when the app comes into focus
    // This might be overkill depending on your app's structure
  }, []); // Empty dependency array ensures this runs only once on mount



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={(text) => setTask(text)}
        onSubmitEditing={handleAddTask}  // Handle Enter key press
        ref={inputRef} // Attach the ref to the TextInput


      />
      <Button title="Add" onPress={handleAddTask} />
      <Button title="Demo Add" onPress={handleDemoAddTask} />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,

  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    padding: 8,
  },
});

export default InputForm;
