// TaskList.js
import React from 'react';
import { View, FlatList } from 'react-native';
import Todo from './Todo';
import { StyleSheet } from 'react-native-web';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.taskItem}>
                    <Todo
                        title={item.text}
                        onToggleComplete={(isCompleted) => onToggleComplete(item.id, isCompleted)}
                        onDelete={() => onDelete(item.id)}
                    />
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    taskItem: {
        // Define your styles for task item
    }
});

export default TaskList;
