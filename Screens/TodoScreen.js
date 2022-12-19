import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import Todo from '../Components/Todo'

const TodoScreen = () => {

    return
    <View>
        <Todo title="some" />
        <Todo title="Clean" />
        <Todo title="Vacuum" />
        <Todo title="Math" />

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