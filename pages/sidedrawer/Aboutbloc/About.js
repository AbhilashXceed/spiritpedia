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
  ScrollView,
  Linking
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

export default class About extends React.Component {


  openLink = () => {
    Linking.openURL('https://facebook.github.io/react-native/docs/0.59/linking#docsNav')
    .catch((err) => console.warn('An error occurred', err))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{ width: wp("100%"), height: hp("30%"), justifyContent:'center', alignItems:'center' }}>
          <Image
            source={require("../../../assets/images/spiritpedia-logo.png")}
            style={{ height: hp("17.94%"), marginTop: hp("5%") }}
            resizeMode="contain"
          />
        </View>
        {/* height: hp("28%") */}
        <View style={{flexWrap:'wrap', marginHorizontal: wp("8%"), marginBottom:hp('5%')}}>
          <Text style={{color:'black', textAlign:'center', fontSize:wp('3.8%')}}>
            Here will come a very large information regarding to the use of this
            app, right now this is just placeholder with random irrelevant stuff
            and some padding on both sides of this paragraph. I am not sure what
            to write here, sojust have fun and listen to few songs, also go and
            eat something like my favorite pizza and also feel free to have a
            chilled beer. If you are getting one, please buy me one too.
          </Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('TermsScreen')}
          style={styles.buttonstyle}>
            <View style={styles.buttontextcont}>
              <Text style={styles.buttontext}>Terms and Conditions</Text>
            </View>
            <View style={styles.buttoniconcont}>
              <Icon
                name="chevron-right"
                type="feather"
                size={wp("8%")}
                color="white"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('PrivacyScreen')}
          style={styles.buttonstyle}>
            <View style={styles.buttontextcont}>
              <Text style={styles.buttontext}>Privacy Policy</Text>
            </View>
            <View style={styles.buttoniconcont}>
              <Icon
                name="chevron-right"
                type="feather"
                size={wp("8%")}
                color="white"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.openLink()} 
          style={styles.buttonstyle}>
            <View style={styles.buttontextcont}>
              <Text style={styles.buttontext}>Visit Site</Text>
            </View>
            <View style={styles.buttoniconcont}>
              <Icon
                name="chevron-right"
                type="feather"
                size={wp("8%")}
                color="white"
              />
            </View>
          </TouchableOpacity>
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
  buttonstyle: {
    flexDirection: "row",
    height: hp("5.3%"),
    width: wp("84%"),
    borderRadius: hp("2.5%"),
    backgroundColor: "#fdbd30",
    marginTop: hp("2%")
  },
  buttontextcont: {
    flex: 8,
    paddingLeft: wp("4%"),
    paddingTop: wp("1.5%")
  },
  buttoniconcont: {
    flex: 1,
    paddingRight: wp("3%"),
    paddingTop: wp("0.75%")
  },
  buttontext: {
    fontSize: wp("4%"),
    fontWeight: "700",
    color: "white"
  }
});
