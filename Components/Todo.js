import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Todo = (props) => {
    return <Text style={styles.text} > {props.title} </Text>
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 2,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default Todo;