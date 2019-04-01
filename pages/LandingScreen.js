import React from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { GoogleSignin } from "react-native-google-signin";
import { Tile, Icon, Header } from "react-native-elements";

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normalUser: null
    };
  }

  //
  // INSERT GOOGLE SIGN OUT WITHOUT CONFLICT.
  //
  //
  // L O G O U T   F U N c T I O N    B E L O W

  logOut = async () => {
    AsyncStorage.setItem("user", "");
    AsyncStorage.setItem("password", "");
    this.setState({ normalUser: null });
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.props.navigation.navigate("HomeScreen");
    let A = AsyncStorage.getItem("user");
    console.warn("user is", A);
  };

  //
  // L O G O U T    H E R E
  //
  //

  componentDidMount = async () => {
    let A = await AsyncStorage.getItem("user");
    this.setState({ normalUser: A });
    if (this.state.normalUser) {
      console.warn("User is", this.state.normalUser);
    } else {
      console.warn("There is no userdata, something went wrong");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.tilesBox}>
          <View style={styles.tilesrow}>
            <View style={{flex: 1, backgroundColor: "orange", padding: 2 }}>
              {/* <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity> */}
            </View>
            {/* <View style={{ backgroundColor: "orange", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "orange", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View> */}
          </View>
          {/* <View style={styles.tilesrow}>
            <View style={{ backgroundColor: "black", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "black", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "black", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
          </View> */}
          {/* <View style={styles.tilesrow}>
            <View style={{ backgroundColor: "black", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "black", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "black", padding: 2 }}>
              <TouchableOpacity>
                <Icon name="search" color="orange" size={60} />
              </TouchableOpacity>
            </View>
          </View> */}
        </View>

        <View style={styles.footer}>
          <View style={{ padding: 10 }}>
            <TouchableOpacity>
              <Icon name="search" color="black" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity>
              <Icon name="search" color="black" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity>
              <Icon name="search" color="black" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity>
              <Icon name="search" color="black" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  header: {
    flex: 1,
    backgroundColor: "slateblue"
  },
  tilesBox: {
    flex: 12,
    backgroundColor: 'white'
  },
  tilesrow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    // alignItems: 'center',
    
  },
  footer: {
    flex: 1,
    backgroundColor: "steelblue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
