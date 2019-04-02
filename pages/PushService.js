import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import firebase from "react-native-firebase";


export default class PushService extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.superfont}>THIS IS PUSH NOTIFICATION PAGE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "slateblue",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  superfont: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  }
});
