import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AsyncStorage from "@react-native-community/async-storage";
import { GoogleSignin } from "react-native-google-signin";
import { Icon } from "react-native-elements";
import SplashScreen from "react-native-splash-screen";
import firebase from "react-native-firebase";

export default class ExploreOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normalUser: null,
      googleToken: null,
      currentUser: null,
      insta: null,
      instaname: null
    };
  }

  componentDidMount = async () => {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    SplashScreen.hide();
    // console.warn(this.state.currentUser);
    let A = await AsyncStorage.getItem("insta");
    let insta = JSON.parse(A);
    if (insta) {
      console.warn("Hello" + insta.data.username);
      this.setState({ insta: insta });
      this.setState({ instaname: insta.data.username });
    }
    // let A = await AsyncStorage.getItem("user");
    // let B = await AsyncStorage.getItem("googleToken");
    // if (A) {
    //   this.setState({ normalUser: A, googleToken: B });
    //   console.warn("User is", this.state.normalUser);
    // } else {
    //   console.warn("There is no userdata, something went wrong");
    // }
  };

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require("../assets/images/bottle1.png")}
            style={{ height: hp("28.2%"), width: wp("100%"),  }}
            // resizeMode="contain"
          />
          <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
            <Text style={{ color: "black", margin: 5 }}>Whiskey</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/bottle5.png")}
                style={{
                  height: hp("20%"),
                  width: wp("88.5%"),
                  borderColor: "#bfbfbf",
                  borderWidth: 3,
                  borderRadius: 10
                }}
                // resizeMode="cover"
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                color: "black",
                margin: 5,
                marginBottom: 5,
                marginHorizontal: 25
              }}
            >
              Distilleries
            </Text>
            <ScrollView horizontal={true}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/bottle2.png")}
                  style={{
                    height: hp("20%"),
                    width: wp("40%"),
                    borderColor: "#bfbfbf",
                    borderWidth: 3,
                    borderRadius: 10
                  }}
                  // resizeMode="cover"
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 9,
                    color: "black",
                    margin: 10
                  }}
                >
                  Australian Distillery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require("../assets/images/bottle3.png")}
                  style={{
                    height: hp("20%"),
                    width: wp("40%"),
                    borderColor: "#bfbfbf",
                    borderWidth: 3,
                    borderRadius: 10,
                    marginHorizontal: 12
                  }}
                  // resizeMode="center"
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 9,
                    color: "black",
                    margin: 10
                  }}
                >
                  Australian Distillery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require("../assets/images/bottle4.png")}
                  style={{
                    height: hp("20%"),
                    width: wp("40%"),
                    borderColor: "#bfbfbf",
                    borderWidth: 3,
                    borderRadius: 10
                  }}
                  // resizeMode="cover"
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 9,
                    color: "black",
                    margin: 10
                  }}
                >
                  Australian Distillery
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
            <Text style={{ color: "black", margin: 5, marginBottom: 5 }}>
              Upcoming Events
            </Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/wisky.png")}
                style={{
                  height: hp("20%"),
                  width: wp("88.5%"),
                  borderColor: "#bfbfbf",
                  borderWidth: 3,
                  borderRadius: 10
                }}
                // resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <Text>
      Hi { currentUser && currentUser.email}!
      </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  tilesBox: {
    flex: 1,
    backgroundColor: "coral"
  },
  tilesrow: {
    flex: 1,
    backgroundColor: "coral",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 1
  },
  block: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#263238",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 1
  },
  smalltitle: {
    color: "coral",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "100",
    fontStyle: "italic"
  }
});
