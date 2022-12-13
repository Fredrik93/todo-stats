import React, { Fragment } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button, TouchableOpacity } from 'react-native-web'

const Todo = (props) => {
    return (
        <Fragment  >
            <div  >
                <Text style={styles.text} > {props.title}
                </Text>
                <Button title="X" onPress={() => { console.log(`clicked + ${props.title}`) }} />
            </div>
        </Fragment>)
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 2,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default Todo;