import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import Todo from '../Components/Todo'

const TodoScreen = () => {
    var list = [<Todo title="some" />,
    <Todo title="Clean #1" key="1" />,
    <Todo title="Vacuum #2" key="2" />,
    <Todo title="Math #3" key="3" />];
    return <View>

        {list.map(item =>
            <li key={item.key}>{item}</li>,

        )}

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