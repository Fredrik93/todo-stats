import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Todo from '../Components/Todo'

const TodoScreen = () => {
    return <View>
        <Todo title="todo #1" />
        <Todo title="todo #2" />
        <Todo title="todo #3" />

    </View>
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