import React from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { GoogleSignin } from "react-native-google-signin";

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normalUser: null,
    };
  }

// 
// INSERT GOOGLE SIGN OUT WITHOUT CONFLICT.
// 
// 
// L O G O U T   F U N c T I O N    B E L O W

  logOut = async () => {
    AsyncStorage.setItem('user', '');
    AsyncStorage.setItem('password', '');
    this.setState({ normalUser: null });
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.props.navigation.navigate('HomeScreen');
    let A = AsyncStorage.getItem('user');
    console.warn("user is", A);
  };

// 
// L O G O U T    H E R E
// 
//

  componentDidMount = async () => {
    let A = await AsyncStorage.getItem('user');
    this.setState({ normalUser: A});
    if (this.state.normalUser) {
      console.warn(
        "User is" ,
        this.state.normalUser
      );
    } else {
      console.warn("There is no userdata, something went wrong");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.temp}>Landing Screen</Text>
        <Button title="LOGOUT" onPress={() => this.logOut()} color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "orange"
  },
  temp: {
    color: "black",
    fontSize: 100,
    fontWeight: "bold"
  }
});
