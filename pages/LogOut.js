import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
	StatusBar,
	ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "react-native-firebase";

export default class LogOut extends React.Component {
  constructor(props){
    super(props);
    this.state={
      errormessage: null,
    }
  }

  componentDidMount(){
    this.logout();
  }

  logout = () => {
		firebase
			.auth()
			.signOut()
			.then(()=>this.props.navigation.navigate('AuthScreen'))
			.catch(error=>this.setState({errormessage: error.message}));
    
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "coral"
        }}
      >
        <StatusBar backgroundColor="coral" barStyle="dark-content" />
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
          Logging Out
        </Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
