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

const trial =
  'The art of distillation spread to Ireland and Scotland no later than the 15th century, as did the common European practice of distilling "aqua vitae", spirit alcohol, primarily for medicinal purposes. The practice of medicinal distillation eventually passed from a monastic setting to the secular via professional medical practitioners of th';

export default class Points extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.sections}>
          <Text style={styles.titletext}>Points, Levels and Badging</Text>
          <Text style={styles.normaltext}>{trial}</Text>
        </View>
        <View style={styles.sections}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                    <View style={styles.headertabstwo}><Text style={styles.tabtitle}>Whiskey Contribution</Text></View>
                    <View style={styles.itemtabstwo}><Text style={styles.tabtext}>Answers (more than 250 characters)</Text></View>
                    <View style={styles.itemtabstwo}><Text style={styles.tabtext}>Upload Video</Text></View>
                    <View style={styles.itemtabstwo}><Text style={styles.tabtext}>Refer and Earn</Text></View>
                </View>
                <View>
                    <View style={styles.headertabs}><Text style={styles.tabtitle}>Points Earned</Text></View>
                    <View style={styles.itemtabs}><Text style={styles.tabtext}>200 point per answer</Text></View>
                    <View style={styles.itemtabs}><Text style={styles.tabtext}>25 points per video</Text></View>
                    <View style={styles.itemtabs}><Text style={styles.tabtext}>50 points per refer</Text></View>
                </View>
            </View>
        </View>
        <View style={styles.sections}>
          <Text style={styles.titletext}>Whiskey Guide Levels</Text>
          <Text style={styles.normaltext}>
            Reach higher levels as you earn points for your contributions
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
              <View style={styles.headertabs}><Text style={styles.tabtitle}>Level</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Level - 1</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Level - 2</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Level - 3</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Level - 4</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Level - 5</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Level - 6</Text></View>
            </View>
            <View>
              <View style={styles.headertabs}><Text style={styles.tabtitle}>Points</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>0 points</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>1,000 points</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>5,000 points</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>7,000 points</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>10,000 points</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>20,000 points</Text></View>
            </View>
            <View>
              <View style={styles.headertabs}><Text style={styles.tabtitle}>Badge</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Beginner</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Big Bear</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>HooDoo</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Carry</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Platinum</Text></View>
              <View style={styles.itemtabs}><Text style={styles.tabtext}>Gold Platinum</Text></View>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sections: {
    flexWrap: "wrap",
    marginHorizontal: wp("5%"),
    marginTop: hp("1%"),
    marginBottom: hp("1%")
  },
  titletext: {
    fontSize: wp("3.5%"),
    fontWeight:"600",
    marginBottom: hp("1%")
  },
  normaltext: {
    fontSize: wp("3.5%"),
    marginBottom: hp("1%")
  },
  headertabs: {
    width: wp("28%"),
    height: hp("3.5%"),
    // flexWrap: 'wrap',
    // paddingHorizontal:wp('2%'),
    backgroundColor: "#fdbd30",
    borderRadius:wp('3.5%'),
    marginBottom:hp('1%'),
  },
  headertabstwo: {
    width: wp("58%"),
    height: hp("3.5%"),
    backgroundColor: "#fdbd30",
    borderRadius:wp('3.5%'),
    marginBottom:hp('1%'),
  },
  itemtabs: {
    width: wp("28%"),
    height: hp("3.5%"),
    backgroundColor: "#f0f0f0",
    borderRadius:wp('3.5%'),
    marginBottom:hp('1%'),
  },
  itemtabstwo: {
    width: wp("58%"),
    height: hp("3.5%"),
    backgroundColor: "#f0f0f0",
    borderRadius:wp('3.5%'),
    marginBottom:hp('1%'),
  },
  tabtitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight:"600",
  },
  tabtext: {
    color: 'black',
    textAlign: 'center',
    fontSize: wp('3%'),
    paddingTop: hp('0.5%')
}
});
