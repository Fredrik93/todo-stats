import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Todo = ({ title }) => {
    return (
        <View style={styles.todoItem}>
            <CheckBox />
            <Text style={styles.title}>{title}</Text>

            {/* You can add checkbox and delete button components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        flex: 1,
        fontSize: 18,
    },
    // Add styles for checkbox and delete button here
});

export default Todo;
