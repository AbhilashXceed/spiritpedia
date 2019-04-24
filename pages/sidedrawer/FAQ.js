import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Alert,
    StatusBar
  } from "react-native";

export default class FAQ extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.trial}>
                    FAQ In Progress
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'coral'
    },
    trial: {
        fontSize: 50,
        color: 'white'
    }
})