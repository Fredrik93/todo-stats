import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from './CheckBox';
import DeleteTask from './DeleteTask';


const Todo = ({ title, onToggleComplete, isCheckedInitially, onDelete }) => {
    const [isChecked, setIsChecked] = useState(isCheckedInitially);

    const handleCheck = (newCheckValue) => {
        setIsChecked(newCheckValue);
        onToggleComplete(newCheckValue);  // Inform the parent component

    };

    return (
        <View style={styles.todoItem}>
            <Text style={[styles.title, isChecked && styles.checkedTitle]}>{title}</Text>
            <CheckBox isChecked={isChecked} onCheck={handleCheck} />

            <DeleteTask onDelete={onDelete} />
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
    checkedTitle: {
        color: '#333333',
        textDecorationLine: 'line-through',
    }
});

export default Todo;
