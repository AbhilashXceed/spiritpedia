import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// import { ScrollView } from "react-native-gesture-handler";

export default class Followers extends React.Component {
  constructor(props){
    super(props)
    this.followerarray=[
      "Rohit Supe",
      "Guru Agavane",
      "Nikhil Khanse",
      "Arindam Ghosh",
      "Sagar Agarwal",
      "Kishor Kumar",
      "Rupesh Mane",
      "Kiran Vedpathak",
      "Rahul Joshi"
    ]

  }

  render() {
    return (
      <View style={{ alignItems:'center' }}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {this.followerarray.map((follower, key) => (
          <View
          key={key}
          style={{
            height: hp("10%"),
            width: wp("88%"),
            // justifyContent: "center",
            alignItems:'center',
            flexDirection: "row",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop:hp('2%'),
            // marginRight:wp('4%')
          }}
        >
          <View
            style={{
              // flex: 1,
              height: hp("8%"),
              width: hp("8%"),
              borderColor: "#fdbd30",
              borderWidth: 2,
              borderRadius: hp("4%"),
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{fontSize:wp('6%'), color:'lightgray'}}>
              {follower.charAt(0)}
            </Text>
            
          </View>
          <View style={{marginLeft:wp('5%')}}>
            <Text style={{ fontSize: wp("4%"),  }}>{follower}</Text>
          </View>
        </View>
        ))}
          
        <View
          style={{height:hp('4%')}}
        />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
