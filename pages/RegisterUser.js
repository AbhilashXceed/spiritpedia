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
        radiovalue: "",
        referralcode:"",
        errorname: null,
        erroremail: null,
        errorpass: null,
        errorphone: null,
        femaleRadio: false,
        maleRadio: false,
        errorMessage: null,
      });
  }


  pusher() {
    console.warn("button is pressed");
    const { name, email, password, phone } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    if (email == "") {
      this.setState({ erroremail: "please enter the email address" });
    } else if (!regex.test(email)) {
      this.setState({ erroremail: "unvalid email address" });
    } else if (password == "") {
      this.setState({ erroremail: null });
      this.setState({ errorpass: "please enter a password" });
    } else if (password.toString().length < 6) {
      this.setState({ erroremail: null });
      this.setState({
        errorpass: "password should be at least 6 letters long"
      });
    } else if (name == "") {
      this.setState({ errorpass: null });
      this.setState({ errorname: "please enter the name" });
    } else if (phone == "") {
      this.setState({ errorphone: "please enter the phonenumber" });
    } else if (phone.toString().length < 10) {
      this.setState({ errorphone: "unvalid phone number" });
    } else {
      console.warn("one");
      var url = "https://spiritpedia.xceedtech.in/index.php?r=api/Register";

      let MAIL = JSON.stringify({
        fullname: this.state.name,
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.phone,
        gender: this.state.radiovalue,
        referal_code: this.state.referralcode
      })
      console.warn(MAIL)
      console.log(MAIL)

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: MAIL,
      })
        .then(response => response.json())
        .then(responseJson => {
          alert(JSON.stringify(responseJson));
          console.warn("Success:", responseJson);
        })
        .then(()=>this.props.navigation.navigate('Landingone'))
        .catch(error => 
          {console.warn(error)})
        // .then(
        //   firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(
        //       this.state.email,
        //       this.state.password
        //     )
        // )
        // .catch(error => {
        //   this.setState({ errorMessage: error.message });
        //   console.warn("Firebase Error:", error);
        // });
    }
  }

  femaleRadioclick() {
    this.setState({
      femaleRadio: !this.state.femaleRadio,
      maleRadio: false,
      radiovalue:2,
    });
  }

  maleRadioclick() {
    this.setState({
      maleRadio: !this.state.maleRadio,
      femaleRadio: false,
      radiovalue: 1
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        showsVerticalScrollIndicator={false}
      >
        <Image 
        source={require("../assets/images/registerback.png")}
        resizeMode='cover'
        style={{
          width:wp('100%'),
          height:hp('106%'),
          position:'absolute',
          top:0,
          // left:0,
          // right:0,
          // bottom:0
        }}
        >
          </Image>
        <StatusBar backgroundColor={"#ff9900"} />

        

        <View style={styles.regform}>
        <Text style={styles.header}>Sign Up</Text>
          <View style={{ marginHorizontal: 25, justifyContent:'center' }}>
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
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={text =>
                    this.setState({ email: text.replace(/\s/g, "") })
                  }
                />
              </Item>

              {this.state.erroremail && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  {this.state.erroremail}
                </Text>
              )}

              <View style={{ flexDirection: "row" }}>
                <Item
                  floatingLabel
                  style={{
                    flex: 8,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginBottom: 0,
                    marginTop: 0,
                    marginLeft: 0
                  }}
                >
                  <Label style={{ color: "grey", fontSize: 10 }}>
                    Password
                  </Label>
                  <Input
                    autoCapitalize="none"
                    onChangeText={text =>
                      this.setState({ password: text.replace(/\s/g, "") })
                    }
                  />
                </Item>
                <View >
                  <Button
                    transparent
                    dark
                    style={{
                      flex: 2,
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }}
                    // onPress={() => this.setState({ toggle: !this.state.toggle })}
                  >
                    <Text
                      style={{ fontSize: 8, paddingTop: 30,  color: "gray" }}
                    >
                      show
                    </Text>
                  </Button>
                </View>
              </View>

              {this.state.errorpass && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  {this.state.errorpass}
                </Text>
              )}

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

              {this.state.errorname && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  {this.state.errorname}
                </Text>
              )}

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

              {this.state.errorphone && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  {this.state.errorphone}
                </Text>
              )}

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

              {/* {this.state.erroremail && (
                  <Text style={{ color: "red", fontSize: 10 }}>
                    {this.state.erroremail}
                  </Text>
                )} */}

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 10, textAlign: "center", marginTop: 10 }}>
                  Enter your referral code here
                </Text>


                <Item style={{paddingTop:0, marginTop:0, borderBottomColor:'black',  width: wp('40%'), height:hp('5%'), marginRight: wp('4%')}}>
                <Input 
                onChangeText={(text)=>{this.setState({referralcode:text})}}
                style={{ paddingTop:0, marginTop:0 }} />
                </Item>


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
              <Text style={{ color: "black", fontSize: 11 }}>
                Create Account
              </Text>
            </Button>
          </View>
        </View>
        
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:hp('105%'),
    backgroundColor: "white",
    justifyContent: "center"
  },
  regform: {
    alignSelf: "stretch",
    width:wp('100%'),
    position:'absolute',
    top:hp('22%')
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
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  }
});
