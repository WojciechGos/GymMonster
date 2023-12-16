import React from 'react';
import { View, StyleSheet } from 'react-native';

const WhiteLine = () => {
    return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: '#DFDFDF',
        width: 320,
        marginVertical: 5, 
    },
});

export default WhiteLine;
