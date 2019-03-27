import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from "react-native-gesture-handler";
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import { LoginManager } from "react-native-fbsdk";
import Icon from "react-native-vector-icons/FontAwesome";
import InstagramLogin from "react-native-instagram-login";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
      normalUser: '',
      normalPassword: ''
    };
  }
  

  async componentDidMount() {
    this._configureGoogleSignIn();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        "560077884751-7unt1srstt203fqk602do7svb0ffdvlk.apps.googleusercontent.com",
      offlineAccess: false
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
      console.warn("user info", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert("cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert("in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert("play services not available or outdated");
      } else {
        console.warn("Something went wrong", error.toString());
        Alert.alert("Something went wrong", error.toString());
        this.setState({
          error
        });
      }
    }
  };

  async loginFacebook() {
    try {
      let result = await LoginManager.logInWithReadPermissions([
        "public_profile"
      ]);
      if (result.isCancelled) {
        alert("Login was cancelled");
      } else {
        alert(
          "Login was successful with permission: " +
            result.grantedPermissions.toString()
        );
      }
    } catch (error) {
      alert("Login failed with error:" + error);
    }
  }

  normalLogin = async () => {
    
    if (
      this.state.normalUser == "Admin" &&
      this.state.normalPassword == "Admin"
    ) {
      Alert.alert("Login is successful");
      await AsyncStorage.setItem('user', JSON.stringify(this.state.normalUser));
      await AsyncStorage.setItem('password', JSON.stringify(this.state.normalPassword));
      this.props.navigation.navigate('Landing');
    } else {
      Alert.alert("Nope, Wrong credentials");
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#263238" barStyle="dark-content" />
        <View style={styles.header}>

            <Text style={styles.headerfont}>WHISKEYPEDIA</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: 'center'
            }}
          >
            <TouchableOpacity style={{ padding: 7 }}>
              <Icon name="search" color="orange" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 7 }}>
              <Icon name="bell" color="orange" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orangeline} />
        <View style={styles.body}>
          <View style={styles.loginbox}>
            <Text
              style={{
                color: "orange",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              LOGIN
            </Text>
            <Text
              style={{
                color: "orange",
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              USERNAME
            </Text>
            <TextInput
              style={{ color: "white" }}
              onChangeText={text => {
                this.setState({ normalUser: text });
              }}
              underlineColorAndroid="orange"
              selectionColor="orange"
              placeholderTextColor="orange"
            />
            <Text
              style={{
                color: "orange",
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "left",
                marginTop: 5
              }}
            >
              PASSWORD
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "stretch", width: 280 }}>
                <TextInput
                  style={{ color: "white" }}
                  onChangeText={text => {
                    this.setState({ normalPassword: text });
                  }}
                  underlineColorAndroid="orange"
                  selectionColor="orange"
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={{ padding: 10 }}>
                <Icon name="eye" color="orange" size={22} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15
              }}
            >
              <View style={{ alignItems: "stretch", width: 150 }}>
                <Button
                  color="orange"
                  title="LOGIN"
                  onPress={() => this.normalLogin()}
                />
              </View>
              <TouchableOpacity>
                <Text style={{ color: "orange" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signupbox}>
            <View style={{ marginLeft: 50, marginRight: 50 }}>
              <Button
                color="orange"
                title="SIGN UP!"
                onPress={() => this.props.navigation.navigate("Register")}
              />
            </View>
            <Text
              style={{
                color: "orange",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 25
              }}
            >
              SIGNUP USING
            </Text>
            <View style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
              <Button title="Google" color="orange" onPress={this._signIn} />
            </View>
            <View style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
              <Button
                title="Facebook"
                color="orange"
                onPress={this.loginFacebook}
              />
            </View>
            <View style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
              <Button
                title="Instagram"
                color="orange"
                onPress={() => this.refs.instagramLogin.show()}
              />
            </View>
          </View>
          <View>
            <InstagramLogin
              ref="instagramLogin"
              clientId="992305b1948d4e069631b9a3b66d5f55"
              scopes={["public_content", "follower_list"]}
              onLoginSuccess={token => this.setState({ token })}
              onLoginFailure={data => console.log(data)}
            />
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
    backgroundColor: "#263238",
    justifyContent: "space-around",
    alignItems: "center"
  },
  headerfont: {
    color: "orange",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed"
  },
  body: {
    flex: 18,
    backgroundColor: "#263238"
  },
  loginbox: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    justifyContent: "center"
  },
  signupbox: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  },
  buttonbox: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around"
  }
});
