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

export default class Support extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.trial}>
                    Support In Progress
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