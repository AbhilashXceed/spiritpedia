import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text
} from "native-base";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar
  // ScrollView
} from "react-native";
import { Icon } from "react-native-elements";

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.questionarray = [
      "What is Whisky App?",
      "What is One Time Password?",
      "Why do I need to provide my E-mail",
      "What are Whiskey karma Points",
      "Problems sending and receiving"
    ];
  }

  render() {
    return (
      <View style={{ height: hp("100%"), alignItems: "center" }}>
        <ScrollView>
          <View style={{ height: hp("2.5%"), backgroundColor: "white" }} />
          {this.questionarray.map((question, key) => (
            <TouchableOpacity key={key} onPress={()=>console.warn(key)}>
              <View
                style={{
                  height: hp("5%"),
                  width: wp("88%"),
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 5,
                  // justifyContent: "center",
                  alignItems: "center",
                  marginTop: wp("3%"),
                  marginBottom: wp("2%"),
                  flexDirection: "row"
                }}
              >
                <Text style={{ paddingLeft: wp("2%"), fontSize: wp("3%"), flex:9 }}>
                  {question}
                </Text>
                <View style={{ flex: 1 }}>
                  <Icon
                    name="chevron-right"
                    type="feather"
                    color="black"
                    size={wp("4%")}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
