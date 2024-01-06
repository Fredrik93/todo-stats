import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const CheckBox = ({ isChecked, onCheck }) => {

    return (
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={onCheck}
                color={isChecked ? '#4630EB' : undefined}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
    },
});
export default CheckBox
