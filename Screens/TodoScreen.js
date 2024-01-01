import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Todo from '../Components/Todo'
import InputForm from '../Components/InputForm';
import { FlatList, Text } from 'react-native-web';
const TodoScreen = () => {
    const listy = ["vacuum", "clean"]
    const [tasks, setTasks] = useState([]);


    const handleAddTask = (newTask) => {
        setTasks([...tasks, { id: Date.now().toString(), text: newTask }]);
    };

    return (
        <View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}  // Ensure this is a unique string
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
            <InputForm onAddTask={handleAddTask} />
        </View>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 40,
        borderColor: 'black',
        borderWidth: 10

    }
})

export default TodoScreen