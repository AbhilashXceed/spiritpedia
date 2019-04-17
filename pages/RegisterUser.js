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
import { Input } from "react-native-elements";

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        name: "",
        email: "",
        password: "",
        phone: "",
        errorname: null,
        erroremail: null,
        errorpass: null,
        errorphone: null
      });
  }

  // handleSignUp = () => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => this.props.navigation.navigate("Landingone"))
  //     .catch(error => this.setState({ errorMessage: error.message }));
  // };

  pusher() {
    const { name, email, password, phone } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // var url = 'http://apartment.xceedtech.in/api/flat-owners-list';
    // var data = {"model":"ExpensesMaster","condition":""}

    if (name == "") {
      this.setState({ errorname: "please enter the name" });
    } else if (email == "") {
      this.setState({ errorname: null });
      this.setState({ erroremail: "please enter the email" });
    } else if (!regex.test(email)) {
      this.setState({ erroremail: "unvalid email id" })
    }else if (password == "") {
      this.setState({ erroremail: null });
      this.setState({ errorpass: "please fill the password" });
    } else if (password.toString().length < 6) {
      this.setState({ errorpass: "password should be at least 6 letters long" });
    } else if (phone == "") {
      this.setState({ errorpass: null });
      this.setState({ errorphone: "please enter the phonenumber" });
    } else if (phone.toString().length < 10) {
      this.setState({errorphone: "unvalid phone number"})
    }else {
      var url = "http://192.168.0.103/User_Project/user_registration.php";

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          pass: this.state.password,
          phone: this.state.phone
        }),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          Alert.alert(responseJson);
          console.warn("Success:", JSON.stringify(responseJson));
        })
        .catch(error => console.warn("Server Error:", error))
        .then(
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.state.email,
              this.state.password
            )
        )
        .catch(error => {
          this.setState({ errorMessage: error.message });
          console.warn("Firebase Error:", error);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#36485f"} />
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>

          <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Your Name"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ name: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "yellow" }}
            errorMessage={this.state.errorname}
          />

          <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Email ID"
            keyboardType={'email-address'}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ email: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "yellow" }}
            errorMessage={this.state.erroremail}
          />

          <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Password"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ password: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "yellow" }}
            errorMessage={this.state.errorpass}
          />

          <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Phone No"
            maxLength={10}
            keyboardType={'phone-pad'}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ phone: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "yellow" }}
            errorMessage={this.state.errorphone}
          />

          <TouchableOpacity style={styles.Button} onPress={() => this.pusher()}>
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
    paddingLeft: 30,
    paddingRight: 30
  },
  regform: {
    alignSelf: "stretch"
  },
  header: {
    marginBottom: 40,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    borderBottomColor: "#199187",
    borderBottomWidth: 10
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    color: "white",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 2
  },
  Button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  }
});
