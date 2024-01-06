import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from './CheckBox';
import DeleteTask from './DeleteTask';


const Todo = ({ title, onDelete }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (newCheckValue) => {
        setIsChecked(newCheckValue);
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
        color: '#505050',
        textDecorationLine: 'line-through',
    }
});

export default Todo;
