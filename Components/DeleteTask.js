import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import { TouchableOpacity, View } from "react-native-web";


const DeleteTask = ({ onDelete }) => {

    return (
        <TouchableOpacity
            onPress={onDelete}
        >
            <Icon name="trash" size={20} color="#900" />
        </TouchableOpacity>
    )
}
export default DeleteTask