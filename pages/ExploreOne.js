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
    };
  }

  componentDidMount = async () => {
    const {currentUser} = firebase.auth();
    this.setState({ currentUser })
    SplashScreen.hide();
    console.log(this.state.currentUser);
    let A = await AsyncStorage.getItem("user");
    let B = await AsyncStorage.getItem("googleToken");
    if (A) {
      this.setState({ normalUser: A, googleToken: B });
      console.warn("User is", this.state.normalUser);
    } else {
      console.warn("There is no userdata, something went wrong");
    }
  };

  logOut = async () => {
    AsyncStorage.setItem("user", null);
    AsyncStorage.setItem("password", null);

    this.setState({ normalUser: null });
    if (this.state.googleToken) {
      AsyncStorage.setItem("googleToken", null);
      this.setState({ googleToken: null });
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }

    this.props.navigation.navigate("AuthScreen");
    let A = AsyncStorage.getItem("user");
    console.warn("user is", A);
  };

  render() {
    const  {currentUser} = this.state
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#263238" barStyle="dark-content" />
      <Text>
      Hi { currentUser && currentUser.email}!
      </Text>
        <View style={styles.tilesBox}>
          <View style={styles.tilesrow}>
            <View style={styles.block}>
              <TouchableOpacity style={{ padding: 1 }}>
                <Icon
                  name="infocirlce"
                  type="antdesign"
                  color="coral"
                  size={75}
                />
                <Text style={styles.smalltitle}>WHISKYPEDIA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon
                  name="industry"
                  type="font-awesome"
                  color="coral"
                  size={75}
                />
                <Text style={styles.smalltitle}>DISTILLERIES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon name="feed" type="font-awesome" color="coral" size={75} />
                <Text style={styles.smalltitle}>FEED</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tilesrow}>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon
                  name="institution"
                  type="font-awesome"
                  color="coral"
                  size={75}
                />
                <Text style={styles.smalltitle}>INSTITUTES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon
                  name="calendar"
                  type="antdesign"
                  color="coral"
                  size={75}
                />
                <Text style={styles.smalltitle}>EVENTS</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon name="local-offer" color="coral" size={75} />
                <Text style={styles.smalltitle}>OFFERS</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tilesrow}>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon name="video" type="entypo" color="coral" size={75} />
                <Text style={styles.smalltitle}>WHISKYTUBE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon name="md-cart" type="ionicon" color="coral" size={75} />
                <Text style={styles.smalltitle}>MERCHANDISE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity>
                <Icon name="news" type="entypo" color="coral" size={75} />
                <Text style={styles.smalltitle}>NEWS</Text>
              </TouchableOpacity>
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
    backgroundColor: "coral"
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
  },
});
