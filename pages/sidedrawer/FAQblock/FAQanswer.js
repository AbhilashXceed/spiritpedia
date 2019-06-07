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

export default class FAQanswer extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={{ height: hp("100%"), alignItems: "center" }}>
        <ScrollView>
          <Text style={{fontSize:20}}>This is the answer page in progress</Text>
        </ScrollView>
      </View>
    );
  }
}


