// InputForm.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
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
