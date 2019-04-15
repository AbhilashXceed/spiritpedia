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
import { TextInput } from "react-native-gesture-handler";
import firebase from "react-native-firebase";

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props),
      // (this.state = { email: "", password: "", errorMessage: null });
      this.state ={
        name: null,
        email: null,
        password: null,
        phone: null,
      }
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Landingone"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  pusher() {
    let collection = {};
    collection.name=this.state.name;
    collection.email=this.state.email;
    collection.password=this.state.password;
    collection.phone=this.state.phone;

    var url = 'http://apartment.xceedtech.in/api/flat-owners-list';
    var data = {"model":"ExpensesMaster","condition":""}

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.warn('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#36485f'} />
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Name"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={'white'}
            autoCapitalize="none"
            onChangeText={(text)=>this.setState({name: text})}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Email ID"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={'white'}
            autoCapitalize="none"
            onChangeText={(text)=>this.setState({email: text})}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={'white'}
            autoCapitalize="none"
            onChangeText={(text)=>this.setState({password: text})}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Phone No"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={'white'}
            autoCapitalize="none"
            onChangeText={(text)=>this.setState({phone: text})}
          />

          <TouchableOpacity style={styles.Button} onPress={()=>this.pusher()}>
            <Text style={styles.btntext}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36485f",
    justifyContent: "center",
    paddingLeft: 60,
    paddingRight: 60
  },
  regform: {
    alignSelf: "stretch"
  },
  header: {
    marginBottom: 40,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    borderBottomColor: "#199187",
    borderBottomWidth: 3
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "white",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 2,

  },
  Button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold'
  }
});
