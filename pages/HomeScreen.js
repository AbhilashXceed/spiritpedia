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
import { GoogleSignin, statusCodes } from 'react-native-google-signin';



export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
    };
}
  
  async componentDidMount() {
    this._configureGoogleSignIn();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: "560077884751-7unt1srstt203fqk602do7svb0ffdvlk.apps.googleusercontent.com",
      offlineAccess: false,
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
      console.warn('user info', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        console.warn('Something went wrong', error.toString());
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
};

  
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
            <TextInput placeholder="username" underlineColorAndroid="orange" />
            <Text
              style={{
                color: "orange",
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              PASSWORD
            </Text>
            <TextInput underlineColorAndroid="orange" />
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
                <Text style={{ color: "orange" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signupbox}>
            <View style={{marginLeft: 50, marginRight: 50}}>
              <Button color="orange" title="SIGN UP!" />
            </View>
            <Text
              style={{
                color: "orange",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              SIGNUP USING
            </Text>
              <View style={{marginTop: 15, marginLeft: 50, marginRight: 50}}>
                <Button title="Google" color="orange" onPress={this._signIn}/>
              </View>
              <View style={{marginTop: 15, marginLeft: 50, marginRight: 50}}>
                <Button title="Facebook" color="orange"/>
              </View>
            <View style={{marginTop: 15, marginLeft: 50, marginRight: 50}}>
              <Button title="Twitter" color="orange" />
            </View>
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
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: 'sans-serif-condensed'
  },
  body: {
    flex: 18,
    backgroundColor: "black"
  },
  loginbox: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    justifyContent: "center"
  },
  temp: {
    color: "white"
  },
  signupbox: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  buttonbox: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  }
}); 
