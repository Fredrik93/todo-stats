import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Todo from '../Components/Todo'
import InputForm from '../Components/InputForm';
import { FlatList } from 'react-native-web';
import CompletedTasks from '../Components/CompletedTasks';
import TaskList from '../Components/TaskList';
const TodoScreen = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);


    const handleAddTask = (newTask) => {
        setTasks([{ id: Date.now().toString(), text: newTask }, ...tasks]);
    };
    const handleDelete = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    const handleToggleComplete = (taskId, isCompleted) => {
        if (isCompleted) {
            setCompletedTasks([...completedTasks, tasks.find(task => task.id === taskId)]);
            setTasks(tasks.filter(task => task.id !== taskId));
        } else {
            // Logic to move back to active tasks if needed
        }
    };

    return (
        <View>
            <View style={styles.inputFormBackground}>
                <InputForm onAddTask={handleAddTask} />
            </View>
            <View style={styles.taskBackground}>
                <TaskList
                    tasks={tasks}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDelete}
                />
            </View>
            <TaskList
                tasks={completedTasks}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDelete}
            />
        </View>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 40,
        borderColor: 'black',
        borderWidth: 10

    },
    taskBackground: {

        backgroundColor: '#fff', // Set a white background color
        borderRadius: 10, // Set a value for rounded corners (adjust as needed)
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for a modern look
        padding: 20, // Add padding for better visual appeal
        margin: 10, // Add margin to create space around the component
    },
    inputFormBackground: {

        backgroundColor: '#fff', // Set a white background color
        borderRadius: 10, // Set a value for rounded corners (adjust as needed)
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for a modern look
        padding: 10, // Add padding for better visual appeal
        margin: 10, // Add margin to create space around the component
    }
})

export default TodoScreen