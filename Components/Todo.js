import React, { Fragment } from 'react'
import { StyleSheet, Text, Image, TextBase } from 'react-native'


const Todo = (props) => {

    console.log(props)
    return (
        <Text > Text: {props.title}</Text>

    )
}

const styles = StyleSheet.create({


})

export default Todo;