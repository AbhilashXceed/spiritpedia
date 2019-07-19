import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
  ScrollView
} from "react-native";

import {
  Container,
  Header,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  DatePicker
} from "native-base";

import { Icon } from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class TermConditions extends React.Component {

    componentDidMount(){
        // this.PullData()
    }

    PullData = () => {
        var url = ""

        fetch(url, {
            method:'GET',
            headers: {
                "Content-Type":"application/json"
            },
        }).then(response=>response.json())
        .then(resjson=>JSON.stringify(resjson))
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{ width: wp("100%"), height: hp("30%"), justifyContent:'center', alignItems:'center' }}>
          <Image
            source={require("../../../assets/images/spiritpedia-logo.png")}
            style={{ height: hp("17.94%"), }}
            resizeMode="contain"
          />
        </View>

        <View style={{ flexWrap:'wrap', marginHorizontal: wp("8%"), marginBottom:hp('5%')}}>
            <Text  style={{color:'skyblue', textAlign:'center', fontSize:wp('8%')}}>TERMS AND CONDITION PAGE IN PROGRESS</Text>
          <Text style={{color:'black', textAlign:'center', fontSize:wp('3.8%')}}>
            Here will come a very large information regarding to the use of this
            app, right now this is just placeholder with random irrelevant stuff
            and some padding on both sides of this paragraph. I am not sure what
            to write here, sojust have fun and listen to few songs, also go and
            eat something like my favorite pizza and also feel free to have a
            chilled beer. If you are getting one, please buy me one too.
          </Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  
});
