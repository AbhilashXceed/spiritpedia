import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Alert
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import InstagramLogin from "react-native-instagram-login";
import firebase from "react-native-firebase";
import SplashScreen from "react-native-splash-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon
} from "native-base";
// import { Icon } from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
      normalUser: null,
      normalPassword: null,
      email: "",
      password: "",
      errorMessage: null,
      errorEmail: null,
      errorPassword: null,
      A: null,
      toggle: true,
            fbid: null,
            fbname: null,
            fbfname: null,
            fblname: null,
            fbemail: null,
            fbpic: null,

            googleid: null,
            googlename: null,
            googlefname: null,
            googlelname: null,
            googlemail: null,
            googlepic: null,

    };
  }

  async componentDidMount() {
    AsyncStorage.setItem('REST', 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/');
    SplashScreen.hide();
    this._configureGoogleSignIn();
    // this.checkPermission();
    // this.createNotificationListeners();
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  async tokenFunction() {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log("FCM key", fcmToken);
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
      // console.warn("button pressed");
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      this.setState({
        googleid: userInfo.user.id,
        googlemail: userInfo.user.email,
        googlepic: userInfo.user.photo,
        googlename: userInfo.user.name,
        googlefname: userInfo.user.givenName,
        googlelname: userInfo.user.familyName,
      })

      // console.warn(this.state.googleid, this.state.googlemail, this.state.googlepic, this.state.googlename, this.state.googlefname, this.state.googlelname)

      // console.warn("stringified item:::" + JSON.stringify(userInfo.user));
      var url = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/GoogleLogin";

      var MAIL = {
        first_name: this.state.googlefname,
        last_name: this.state.googlelname,
        email: this.state.googlemail,
        name: this.state.googlename,
        google_id: this.state.googleid,
        
        
      }
      let mailjson = JSON.stringify(MAIL);
      console.warn(mailjson),
      // console.log(mailjson),

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: mailjson
      }).then(response=>response.json())
      .then(resJson=>{
        alert( JSON.stringify(resJson));
        console.warn("google request worked");
        AsyncStorage.setItem('LOGINDATA', JSON.stringify(resJson));
      })
      .then(() => this.props.navigation.navigate("Landingone"))
      .catch(error=>{
        this.setState({ errorMessage: error.message });
        console.warn(this.state.errorMessage);
        alert(this.state.errorMessage);
      })
      // const credential = firebase.auth.GoogleAuthProvider.credential(
      //   userInfo.idToken,
      //   userInfo.accessToken
      // );

      // const firebaseUserCredential = firebase
      //   .auth()
      //   .signInWithCredential(credential)
      //   .then(() => this.props.navigation.navigate("Landingone"));

      // await AsyncStorage.multiSet([
      //   ["A", JSON.stringify(userInfo.user.name)],
      //   ["B", JSON.stringify(userInfo.user.photo)],
      //   ["C", JSON.stringify(userInfo.user.email)]
      // ]);

      // let B = await AsyncStorage.getAllKeys();
      // console.warn(B);

      
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
      let result = await LoginManager.logInWithReadPermissions([
        "public_profile",
        "email"
      ]);
      if (result.isCancelled) {
        alert("Login was cancelled");
      }
      alert(
        "Login was successful with permission: " +
          result.grantedPermissions.toString()
      );
      const data = await AccessToken.getCurrentAccessToken();
    
      let token = data.accessToken
      let ID = data.userID
   
      if (!data) {
        throw new Error(
          "Something went wrong getting Access Token, code needs to be checked"
        );
      } else {

        let url = `https://graph.facebook.com/${ID}?fields=id,name,first_name,last_name,email,picture&access_token=${token}`

        fetch( url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>res.json())
        .then(resJson=>{
          // console.warn(resJson)
          console.warn(resJson.id)
          console.warn(resJson.name)
          console.warn(resJson.email)
          console.warn(resJson.picture.data.url)
          this.setState({
            fbid: resJson.id,
            fbname: resJson.name,
            fbemail: resJson.email,
            fbfname: resJson.first_name,
            fblname: resJson.last_name,
            fbpic: resJson.picture.data.url
          })
            var url = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/FacebookLogin";
            var MAIL = {
            first_name: this.state.fbfname,
            last_name: this.state.fblname,
            email: this.state.fbemail,
            name: this.state.fbname,
            facebook_id: this.state.fbid,
          }
          let mailjson = JSON.stringify(MAIL);
          console.warn(mailjson)
          // console.log(mailjson)

          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: mailjson
          })
          .then(response => response.json())
          .then(responsejson => {
            alert(JSON.stringify(responsejson));
            AsyncStorage.setItem('LOGINDATA', JSON.stringify(responsejson));
          })
          .then(() => this.props.navigation.navigate("Landingone"))
          .catch(error => {
            this.setState({ errorMessage: error.message });
            console.warn(this.state.errorMessage);
            alert(this.state.errorMessage);
          });
        })

      }

      // const credential = firebase.auth.FacebookAuthProvider.credential(
      //   data.accessToken
      // );

      // const firebaseUserCredential = await firebase
      //   .auth()
      //   .signInWithCredential(credential)
      //   .then(() => this.props.navigation.navigate("Landingone"));

      // console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));

    } catch (error) {
      alert("Login failed with error:" + error);
    }
  }

  handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  normalLogin = async () => {
    const { email, password } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (email == null) {
    //   this.setState({ errorEmail: "Username field is Empty" });
    // } else if (email == "") {
    //   this.setState({ errorEmail: "Username field is Empty" });
    // } else if (!regex.test(email)) {
    //   console.warn("u r here");
    //   this.setState({ errorEmail: "Unvalid Email ID" });
    // } else if (password == null) {
    //   this.setState({ errorPassword: "Password field is empty" });
    //   this.setState({ errorEmail: null });
    //   console.warn("or here");
    // } else if (password == "") {
    //   this.setState({ errorPassword: "Password field is empty" });
    //   console.warn("and here");
    // } else if (password.toString().length < 6) {
    //   this.setState({ errorPassword: "Password is invalid" });
    //   console.warn("lalalala");
    // } else 
    // {
      this.setState({ errorPassword: null });
      this.setState({ errorEmail: null });

      var url = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/Login";
      var MAIL = {
        username: this.state.email,
        password: this.state.password,
      }
      let mailjson = JSON.stringify(MAIL);

      console.warn(mailjson)
      console.log(mailjson)

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: mailjson
      })
      .then(this.handleErrors)
      .then(response => response.json())
      .then(response => {
          alert(JSON.stringify(response));
          AsyncStorage.setItem('LOGINDATA', JSON.stringify(response));
      })
      .then(() => this.props.navigation.navigate("Landingone"))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.warn(this.state.errorMessage);
        alert(this.state.errorMessage);
      });



        // body: JSON.stringify({
        //   email: email,
        //   pass: password
        // })
      // firebase
      // .auth()
      // .signInWithEmailAndPassword(email, password)
      // .then(
      //   fetch(url,{
      //     method: "POST",
      //     headers: {
      //       "Accept": "application/json",
      //       "Content-Type": "application/json"
      //     },
      //     body:JSON.stringify({
      //       emailphp: email,
      //       passwordphp: password
      //     })
      //   })
      // )
      // .then((response)=>response.json())
      // .then((responsejson)=>{
      //   alert(responsejson)
      // })
      // .then(() => this.props.navigation.navigate("Landingone"))
      // .catch(error => {
      //   this.setState({ errorMessage: error.message });
      //   console.warn(this.state.errorMessage);
      //   alert(this.state.errorMessage);
      // });

    // }
    Keyboard.dismiss();
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.awarescrollview}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
      >
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled  > */}
        {/* <ScrollView > */}

        <View style={styles.container}>
          <View style={styles.upperportion}>
          
            <Image
              source={require("../assets/images/spiritpedia-logo.png")}
              style={{ height: hp("17.94%"), marginTop: hp("13.75%") }}
              resizeMode="contain"
            />
          </View>

          <View style={styles.body}>
            <View style={{ width: wp("85.52%") }}>
              <Form>              
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 29
                  }}
                >
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      padding: 5
                    }}
                  >
                    <Icon
                      type="Feather"
                      name="user"
                      style={{ fontSize: 14, paddingTop: 25 }}
                    />
                  </View>
                  <Item
                    floatingLabel
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      marginBottom: 0,
                      marginTop: 0,
                      marginLeft: 0
                    }}
                    // last
                  >
                    <Label style={{ color: "grey", fontSize: 10 }}>
                      Username
                    </Label>
                    <Input
                      autoCapitalize="none"
                      onChangeText={text => {
                        this.setState({ email: text.replace(/\s/g, "") });
                      }}
                    />
                  </Item>
                </View>

                {this.state.errorEmail && (
                  <Text style={{ color: "red", fontSize: 10 }}>
                    {this.state.errorEmail}
                  </Text>
                )}

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 45,
                    marginLeft: 82
                  }}
                >
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      padding: 5
                    }}
                  >
                    <Icon
                      type="Feather"
                      name="lock"
                      style={{ fontSize: 14, paddingTop: 26 }}
                    />
                  </View>
                  <Item
                    floatingLabel
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      marginTop: 1,
                      paddingTop: 0,
                      margin: 0,
                      padding: 0,
                      marginLeft: 0
                    }}
                  >
                    <Label style={{ color: "grey", fontSize: 10 }}>
                      Password
                    </Label>
                    <Input
                      autoCapitalize="none"
                      secureTextEntry={this.state.toggle}
                      onChangeText={text => {
                        this.setState({ password: text.replace(/\s/g, "") });
                      }}
                    />
                  </Item>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "black",
                      paddingTop: 6
                      // marginRight:30,
                    }}
                  >
                    <Button
                      transparent
                      dark
                      style={{ paddingLeft: 30 }}
                      onPress={() =>
                        this.setState({ toggle: !this.state.toggle })
                      }
                    >
                      <Text
                        style={{ fontSize: 8, paddingTop: 30, color: "gray" }}
                      >
                        show
                      </Text>
                    </Button>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      height: 20,
                      width: 22,
                      position: "relative",
                      top: 20,
                      right: 15
                    }}
                  />
                </View>

                {this.state.errorPassword && (
                  <Text style={{ color: "red", fontSize: 10 }}>
                    {this.state.errorPassword}
                  </Text>
                )}

                <Button transparent dark style={{ alignSelf: "flex-end" }}>
                  <Text style={{ fontSize: 8 }}>Forgot Password?</Text>
                </Button>

                <Button
                  rounded
                  onPress={() => this.normalLogin()}
                  style={{
                    alignSelf: "center",
                    width: wp("33%"),
                    height: hp("5.3%"),
                    // paddingLeft: 25,
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor: "#fab430",
                    elevation: 0,
                    margin: 20
                  }}
                >
                  <Text style={{ color: "black", fontSize: 12 }}>Log In</Text>
                </Button>
                <Text style={{ fontSize: 10, alignSelf: "center", margin: 10 }}>
                  --------------------------- Or ---------------------------
                </Text>
                <Button
                  iconLeft
                  onPress={()=>this.loginFacebook()}
                  style={{
                    alignSelf: "center",
                    width: wp("58.66%"),
                    height: hp("4%"),
                    margin: 5,
                    elevation: 0
                  }}
                >
                  <Icon
                    name="facebook"
                    type="FontAwesome"
                    color="white"
                    style={{ fontSize: 12 }}
                  />
                  <Text style={{ fontSize: 9, paddingRight: 48 }}>
                    Continue with Facebook
                  </Text>
                </Button>
                <Button
                  bordered
                  dark
                  iconLeft
                  style={{
                    alignSelf: "center",
                    width: wp("58.66%"),
                    height: hp("4%"),
                    marginTop: 10,
                    // margin: 5,
                    backgroundColor: "white"
                  }}
                  onPress={() => {
                    this.signinGoogle();
                  }}
                >
                  <Icon name="logo-google" style={{ fontSize: 12 }} />
                  <Text
                    style={{ fontSize: 9, color: "black", paddingRight: 52 }}
                  >
                    Continue with Google
                  </Text>
                </Button>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingTop: 5,
                    paddingLeft: 10
                  }}
                >
                  <Text style={{ fontSize: 10, paddingTop: 15 }}>
                    New to Spiritpedia?
                  </Text>
                  <Button
                    transparent
                    dark
                    style={{}}
                    onPress={() => this.props.navigation.navigate("Register")}
                  >
                    <Text style={{ fontSize: 10, paddingLeft: 5 }}>
                      Sign Up
                    </Text>
                  </Button>
                </View>
              </Form>
            </View>
            {/* <View style={styles.signupbox}>
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
          </View> */}
            {/* <View>
            <InstagramLogin
              ref="instagramLogin"
              clientId="992305b1948d4e069631b9a3b66d5f55"
              redirectUrl='https://www.google.com/'
              scopes={["public_content", "follower_list"]}
              onLoginSuccess={
                token => {this.setState({ token })
                console.warn("this is token",token);
                const url = `https://api.instagram.com/v1/users/self/?access_token=${token}`;
                fetch(url, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(res=>res.json())
                .then(resJson => {this.setState({resJson});
                AsyncStorage.multiSet([
                  ['A', JSON.stringify(resJson.user.full_name)],
                  ['B', JSON.stringify(resJson.user.profile_picture)],
                  ['C', 'instEmailPlaceholder'] 
                ]);
                }).then(()=>this.props.navigation.navigate('Landingone'))
                .catch(data=>{console.warn(data)})
                }  
              }
              onLoginFailure={data => console.warn(data)}
            />
          </View> */}
          </View>

          {/* </ImageBackground> */}
          {/* </ScrollView> */}
          {/* </KeyboardAvoidingView> */}
        </View>
      </KeyboardAwareScrollView>
    );
  }

  // here was notification code
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  awarescrollview: {
    flex: 1
  },
  upperportion: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 130,
    width: 130,
    justifyContent: "flex-end"
  },
  body: {
    flex: 2,
    // justifyContent: "center"
    alignItems: "center",
    marginTop: 40
  },
  textinput: {
    width: WIDTH - 50,
    height: 45,
    marginHorizontal: 30
    // marginRight: 45,
    // justifyContent: "flex-end"
  },
  loginbox: {
    // marginTop: 10,
    marginBottom: 70,
    justifyContent: "flex-end"
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
