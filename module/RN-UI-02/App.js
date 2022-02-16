//Alpha X Software Company
//RN-User-Interfaces
//RN-UI-02
import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from "react-native";

const App: () => Node = () => {
    return (
        <View style={style.container}>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00fff8'
    }
})

export default App;
