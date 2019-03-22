import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class HomeScreen extends React.Component {
  

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerfont, styles.headcont1]}>
            WHISKEYPEDIA
          </Text>
          <Text style={[styles.temp, styles.headcont2]}>icons here</Text>
        </View>
        <View style={styles.orangeline} />
        <View style={styles.body}>
          <View style={styles.loginbox}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              LOGIN
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              USERNAME
            </Text>
            <TextInput placeholder="username" underlineColorAndroid="white" />
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              PASSWORD
            </Text>
            <TextInput underlineColorAndroid="white" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15
              }}
            >
              <View style={{ alignItems: "stretch", width: 150 }}>
                <Button color="orange" title="LOGIN" />
              </View>
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signupbox}>
            <View>
              <Button color="orange" title="SIGN UP!" />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              SIGNUP USING
            </Text>
            <Button title="Dummy" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  orangeline: {
    flex: 1,
    backgroundColor: "orange"
  },
  header: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  headcont1: {
    // alignItems: 'flex-start',
  },
  headcont2: {
    // alignItems: 'flex-end',
  },
  headerfont: {
    color: "orange",
    fontSize: 25,
    fontWeight: "bold"
  },
  body: {
    flex: 18,
    backgroundColor: "black"
  },
  loginbox: {
    // flex: 10,
    padding: 15,
    justifyContent: "center"
  },
  temp: {
    color: "white"
  }
});
