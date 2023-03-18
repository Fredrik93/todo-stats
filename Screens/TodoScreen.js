import React, { useState } from 'react'
import { StyleSheet, View, Button,Text, Image, TextBase, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import Todo from '../Components/Todo'

const TodoScreen = () => {
    const listy = ["vacuum", "clean"]
    const [list, setTodo] = useState(listy)

 
    return (
        <View>

            <Button title="Add" onPress={() => { setTodo([...list, "anItem"]) }} />
            <FlatList
            keyExtractor={(item) => { item }}
            data={list}
            renderItem={({ item }) => {
                return   <Todo title={item} />
            }}
        />
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