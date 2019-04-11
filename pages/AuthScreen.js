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
import AsyncStorage from "@react-native-community/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import Icon from "react-native-vector-icons/FontAwesome";
import InstagramLogin from "react-native-instagram-login";
import firebase from "react-native-firebase";
import SplashScreen from 'react-native-splash-screen';


export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
      normalUser: null,
      normalPassword: null,
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  async componentDidMount() {
    SplashScreen.hide();
    this._configureGoogleSignIn();
    this.checkPermission();
    this.createNotificationListeners();
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  async tokenFunction() {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log('FCM key',fcmToken);
    } else {
      console.warn("token not received");
    }
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        "560077884751-7unt1srstt203fqk602do7svb0ffdvlk.apps.googleusercontent.com",
      offlineAccess: false
    });
  }

  signinGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const credential = firebase
                        .auth
                        .GoogleAuthProvider
                        .credential(userInfo.idToken, userInfo.accessToken);

      const firebaseUserCredential = firebase
                                    .auth()
                                    .signInWithCredential(credential)
                                    .then(()=>this.props.navigation.navigate('Landinone'));
                        
      console.warn(userInfo.user);
      // console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
      
      // this.setState({ userInfo, error: null });
      // console.warn("Signed in by google and the user is ", userInfo.user.name);
      // await AsyncStorage.setItem("googleToken", userInfo.accessToken);
      // await AsyncStorage.setItem("user", userInfo.user.name);
      // this.props.navigation.navigate("Landingone");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
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
      let result = await LoginManager.logInWithReadPermissions(["public_profile", "email"]);

      if (result.isCancelled) {
        alert("Login was cancelled");
      } 
        
      console.warn(AccessToken.name);
      alert("Login was successful with permission: " +result.grantedPermissions.toString());

      const data = await AccessToken.getCurrentAccessToken();

      if (!data){
        throw new Error("Something went wrong getting Acees Token, code needs to be checked");
      }

      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      const firebaseUserCredential = await firebase
                                            .auth()
                                            .signInWithCredential(credential)
                                            .then(()=>this.props.navigation.navigate('Landingone'));
      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))

    } catch (error) {
      alert("Login failed with error:" + error);
    }
  }

  // normalLogin = async () => {
  //   if (
  //     this.state.normalUser == "Admin" &&
  //     this.state.normalPassword == "Admin"
  //   ) {
  //     Alert.alert("Login is successful");
  //     await AsyncStorage.setItem("user", JSON.stringify(this.state.normalUser));
  //     await AsyncStorage.setItem(
  //       "password",
  //       JSON.stringify(this.state.normalPassword)
  //     );
  //     this.props.navigation.navigate("Landingone");
  //   } else {
  //     Alert.alert("Nope, Wrong credentials");
  //   }
  // };

  normalLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(()=>this.props.navigation.navigate('Landingone'))
      .catch(error => {this.setState({errorMessage: error.message});
                      console.warn(this.state.errorMessage)})
  }

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
              alignItems: "center"
            }}
          >
            {/* <TouchableOpacity
              style={{ padding: 7 }}
              onPress={()=>this.tokenFunction()}
            >
              <Icon name="search" color="coral" size={20} />s
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{ padding: 7 }}
              onPress={() => this.props.navigation.navigate("Landingone")}
            >
              <Icon name="bell" color="coral" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orangeline} />
        <View style={styles.body}>
          <View style={styles.loginbox}>
            <Text
              style={{
                color: "coral",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              LOGIN
            </Text>
            <Text
              style={{
                color: "coral",
                fontSize: 15,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              EMAIL ID
            </Text>
            <TextInput
              style={{ color: "white" }}
              onChangeText={text => {
                this.setState({ email: text.replace(/\s/g, '') });
              }}
              autoCapitalize="none"
              underlineColorAndroid="coral"
              selectionColor="coral"
              placeholderTextColor="coral"
            />
            <Text
              style={{
                color: "coral",
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
                    this.setState({ password: text.replace( /\s/g, '') });
                  }}
                  autoCapitalize="none"
                  underlineColorAndroid="coral"
                  selectionColor="coral"
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={{ padding: 10 }}>
                <Icon name="eye" color="coral" size={22} />
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
                  color="coral"
                  title="LOGIN"
                  onPress={() => this.normalLogin()}
                />
              </View>
              {/* here is the added error msg */}
              {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>}
              <TouchableOpacity>
                <Text style={{ color: "coral" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signupbox}>
            <View style={{ marginLeft: 50, marginRight: 50 }}>
              <Button
                color="coral"
                title="SIGN UP!"
                onPress={() => this.props.navigation.navigate("Register")}
              />
            </View>
            <Text
              style={{
                color: "coral",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 25
              }}
            >
              SIGNUP USING
            </Text>
            <View style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
              <Button title="Google" color="coral" onPress={this.signinGoogle} />
            </View>
            <View style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
              <Button
                title="Facebook"
                color="coral"
                onPress={this.loginFacebook}
              />
            </View>
            <View style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
              <Button
                title="Instagram"
                color="coral"
                onPress={() => this.refs.instagramLogin.show()}
              />
            </View>
          </View>
          <View>
            <InstagramLogin
              ref="instagramLogin"
              clientId="992305b1948d4e069631b9a3b66d5f55"
              scopes={["public_content", "follower_list", "email"]}
              onLoginSuccess={
                token => {this.setState({ token })
                // const credential = firebase.auth.OAuthProvider.credential(token);
                // console.warn(token);
                // const InstaLog = firebase.auth().signInWithCustomToken(token);
                // console.warn();
                }  
              }
              onLoginFailure={data => console.warn(data)}
            />
          </View>
        </View>
      </View>
    );
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      await firebase.messaging().getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications().onNotification(notification => {
        const { title, body } = notification;
        console.log("onNotification:");
        console.warn("onNotification:");
        // this.showAlert(title, body);
        // alert('message');

        const localNotification = new firebase.notifications.Notification({
          sound: "sampleaudio",
          show_in_foreground: true
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          // .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          // .setData(notification.data)
          .android.setChannelId("fcm_default_channel") // e.g. the id you chose above
          .android.setSmallIcon("@drawable/ic_launcher") // create this icon in Android Studio
          .android.setColor("#000000") // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));
      });

    const channel = new firebase.notifications.Android.Channel(
      "fcm_default_channel",
      "SPIRITPEDIA",
      firebase.notifications.Android.Importance.High
    )
      .setDescription("The Xceed App")
      .setSound("sampleaudio.mp3");
    firebase.notifications().android.createChannel(channel);

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        console.warn("onNotificationOpened:");
        // this.showAlert(tistle, body);
      });
    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.warn("getInitialNotification:");
      // this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.warn(JSON.stringify(message));
    });
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  orangeline: {
    flex: 1,
    backgroundColor: "coral"
  },
  header: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#263238",
    justifyContent: "space-around",
    alignItems: "center"
  },
  headerfont: {
    color: "coral",
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
