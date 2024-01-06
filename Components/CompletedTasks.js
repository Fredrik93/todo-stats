import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-web";
import Todo from "./Todo";

const CompletedTasks = ({ completedTasks, title, onToggleComplete, onDelete }) => {
    const listOfCompletedTasks = <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id.toString()}  // Ensure this is a unique string
        renderItem={({ item }) => (
            <View style={styles.taskItem}>
                <Todo
                    title={item.text}
                    onToggleComplete={(isCompleted) => handleToggleComplete(item.id, isCompleted)}
                    onDelete={() => {
                        handleDelete(item.id)
                    }} />
            </View>
        )}
    />

    return (
        <View>
            {listOfCompletedTasks}
        </View>
    )
}

const styles = StyleSheet.create({

})
export default CompletedTasks