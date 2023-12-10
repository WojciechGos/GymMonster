import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LegsHeader = () => {
    return (
        <View style={styles.rectangle}>
            <Text style={styles.text}>
                Ćwiczenia nóg</Text>
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

export default LegsHeader;
