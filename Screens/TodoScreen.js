import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import Todo from '../Components/Todo'

const TodoScreen = () => {
    const listy = ["vacuum", "clean"]
    const [list, setTodo] = useState(listy)

    const displayList = list.map((item) => {
        return <li key={item + "lal"} >
            <Todo title={item} />

        </li>
    })
    return (
        <View>
            <ol>{displayList}</ol>

            <Button title="Add" onPress={() => { setTodo([...list, "hi"]) }} />
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