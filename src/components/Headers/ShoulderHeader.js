import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoulderHeader = () => {
    return (
        <View style={styles.rectangle}>
            <Text style={styles.text}>
                Ćwiczenia barków</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: '#aa1b18',
        padding: 10,
        width: 400
    },
    text: {
        color: '#DFDFDF',
        fontSize: 25,
        textAlign: 'center',
    },
});

export default ShoulderHeader;
