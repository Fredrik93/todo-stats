import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TodoScreen = () => {
    return <Text style={styles.text} >From todo screen</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 40,

    }
})

export default TodoScreen