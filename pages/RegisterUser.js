import React from "react";
import {
  StyleSheet,
  // Text,
  View,
  // Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Image,
  TextInput
} from "react-native";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon,
  Radio,
  ListItem,
  Right,
  Left,
  StyleProvider
} from "native-base";

import getTheme from "../native-base-theme/components";
import platform from "../native-base-theme/variables/platform";

import firebase from "react-native-firebase";
// import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

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
        errorphone: null,
        femaleRadio: false,
        maleRadio: false
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
    console.warn("button is pressed");
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
      this.setState({ erroremail: "unvalid email id" });
    } else if (password == "") {
      this.setState({ erroremail: null });
      this.setState({ errorname: null });
      this.setState({ errorpass: "please fill the password" });
    } else if (password.toString().length < 6) {
      this.setState({
        errorpass: "password should be at least 6 letters long"
      });
    } else if (phone == "") {
      this.setState({ errorpass: null });
      this.setState({ errorphone: "please enter the phonenumber" });
    } else if (phone.toString().length < 10) {
      this.setState({ errorphone: "unvalid phone number" });
    } else {
      console.warn("one");
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
          Accept: "application/json",
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

  femaleRadioclick() {
    this.setState({
      femaleRadio: !this.state.femaleRadio,
      maleRadio: false
    });
  }

  maleRadioclick() {
    this.setState({
      maleRadio: !this.state.maleRadio,
      femaleRadio: false
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
      >
        <StatusBar backgroundColor={"#ff9900"} />

        <View style={{ flex: 4 }}>
          <ImageBackground
            source={require("../android/app/images/registerimg.png")}
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
              alignSelf: "stretch",
              position: "relative",
              bottom: 0,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingTop: 50
            }}
          >
            <Image
              source={require("../android/app/images/spiritpedia-logo.png")}
              style={{ height: hp("17.94%") }}
              resizeMode="contain"
            />
          </ImageBackground>
        </View>

        <View style={styles.regform}>
          <Text style={styles.header}>Sign Up</Text>
          <View style={{ marginHorizontal: 25 }}>
            <Form style={{ width: wp("77%"), marginLeft: 17 }}>
              <Item
                floatingLabel
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginBottom: 0,
                  marginTop: 0,
                  marginLeft: 0
                }}
              >
                <Label style={{ color: "grey", fontSize: 10 }}>
                  Email Address*
                </Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={text =>
                    this.setState({ email: text.replace(/\s/g, "") })
                  }
                />
              </Item>
              <Item
                floatingLabel
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginBottom: 0,
                  marginTop: 0,
                  marginLeft: 0
                }}
              >
                <Label style={{ color: "grey", fontSize: 10 }}>Password</Label>
                <Input autoCapitalize="none" />
              </Item>
              <Item
                floatingLabel
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginBottom: 0,
                  marginTop: 0,
                  marginLeft: 0
                }}
              >
                <Label style={{ color: "grey", fontSize: 10 }}>
                  Full Name*
                </Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={text =>
                    this.setState({ name: text.replace(/\s/g, "") })
                  }
                />
              </Item>
              <Item
                floatingLabel
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginBottom: 0,
                  marginTop: 0,
                  marginLeft: 0
                }}
              >
                <Label style={{ color: "grey", fontSize: 10 }}>
                  Mobile Number*
                </Label>
                <Input
                  autoCapitalize="none"
                  maxLength={10}
                  keyboardType={"phone-pad"}
                  onChangeText={text =>
                    this.setState({ phone: text.replace(/\s/g, "") })
                  }
                />
              </Item>

              <StyleProvider style={getTheme(platform)}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: 10,
                    marginTop: 10
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Radio
                      style={{ marginRight: 10 }}
                      color={"black"}
                      selectedColor={"orange"}
                      onPress={() => this.maleRadioclick()}
                      selected={this.state.maleRadio}
                    />
                    <Text style={{ fontSize: 11 }}>Male</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Radio
                      style={{ paddingRight: 10 }}
                      color={"black"}
                      selectedColor={"orange"}
                      onPress={() => this.femaleRadioclick()}
                      selected={this.state.femaleRadio}
                    />
                    <Text style={{ fontSize: 11 }}>Female</Text>
                  </View>
                </View>
              </StyleProvider>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 10, textAlign: "center", margin: 10 }}>
                  Enter your referral code here
                </Text>
                <Input style={{ width: 150, borderBottomWidth: 1 }} />
              </View>
            </Form>

            <Button
              rounded
              onPress={() => this.pusher()}
              style={{
                alignSelf: "center",
                width: wp("77%"),
                height: hp("5.3%"),
                backgroundColor: "#fab430",
                elevation: 0,
                margin: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{ color: "black", fontSize: 11 }}
              >
                Create Account
              </Text>
            </Button>

            {/* <Input
            inputStyle={styles.textInput}
            containerStyle={{
            borderBottomWidth:0 }}
            borderBottomWidth={0}
            placeholder="Your Name"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"gray"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ name: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "red" }}
            errorMessage={this.state.errorname}
          /> */}

            {/* <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Email ID"
            keyboardType={"email-address"}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"gray"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ email: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "red" }}
            errorMessage={this.state.erroremail}
          /> */}

            {/* <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Password"
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"gray"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ password: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "red" }}
            errorMessage={this.state.errorpass}
          /> */}

            {/* <Input
            inputStyle={styles.textInput}
            containerStyle={{ marginBottom: 30 }}
            placeholder="Phone No"
            maxLength={10}
            keyboardType={"phone-pad"}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"gray"}
            autoCapitalize="none"
            onChangeText={text =>
              this.setState({ phone: text.replace(/\s/g, "") })
            }
            errorStyle={{ color: "red" }}
            errorMessage={this.state.errorphone}
          /> */}

            {/* <TouchableOpacity style={styles.Button} onPress={() => this.pusher()}>
            <Text style={styles.btntext}>Sign Up!</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  regform: {
    alignSelf: "stretch",
    flex: 8
    // backgroundColor:'coral'
  },
  header: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginTop: 30
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
