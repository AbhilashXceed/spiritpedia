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
  Image,
  Switch
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AsyncStorage from "@react-native-community/async-storage";

import { Icon, Slider, ButtonGroup } from "react-native-elements";
import MyBackButton from "../MyBackButton";
import MyBackTwo from "../MyBackTwo";

export default class EventFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidervalue: 0.2,
      switchvalue: false,
      groupOneIndex: 0,
      groupTwoIndex: 0,
		};
  }

  switchToggle = (value) => {
    this.setState({switchvalue: value})
    console.warn(this.state.switchvalue);
  }

  updateIndexone = (groupOneIndex) => {
    this.setState({groupOneIndex})
  }

  updateIndextwo = (groupTwoIndex) => {
    this.setState({groupTwoIndex})
  }

  render() {
    const buttonsOne = ['All', 'In my city', 'Nationwide']
    const buttonsTwo = ['All', 'Tomorrow', 'Select Date']
    const { groupOneIndex, groupTwoIndex } = this.state

    return (
      <View style={styles.container}>
        {/*   CUSTOM HEADER  */}
        <View
          style={{
            backgroundColor: "#fdbd30",
            width: wp("100%"),
            height: hp("9%"),
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingRight: wp("1%")
            }}
          >
            <Icon
              name="chevron-left"
              type="feather"
              color="white"
              size={wp("10%")}
              onPress={() => {
                this.props.navigation.navigate("EventOne");
              }}
            />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: wp("5.5%") }}>
              Events Filter
            </Text>
          </View>
        </View>
				{/*  CUSTOM HEADER  */}
				
        {/*  TEMPLATE START  */}

        {/*   SWITCH TOGGLE   */}
        <View style={{flexDirection:'row', height:hp('8%'), width:wp('88%'), borderWidth:1, borderColor:'lightgray', marginTop:hp('3%')}}>
          <View style={{flex:4, alignSelf:'center', paddingLeft:wp('2%')}}><Text>Show near by events</Text></View>
          <Switch
            style={{flex:2}}
            onValueChange = {this.switchToggle}
            value = {this.state.switchvalue}
            thumbColor = {'white'}
            trackColor = {{false:'#f0f0f0', true:'#fdbd30'}}
         />
        </View>


        {/*   SLIDER   */}
        <View style={{width:wp('88%'), marginTop:hp('3%'), marginBottom:hp('1%'), paddingLeft:wp('2%'),}}><Text style={{alignSelf:'flex-start'}}>Price Range</Text></View>
				<View style={{flexDirection:'row', width:wp('88%'), borderWidth:1, borderColor:'lightgray', justifyContent:'space-around'}}>
					<View style={{height:hp('8%'), marginRight:wp('2%'), justifyContent: "center",}}><Text>0</Text></View>
					  <View style={styles.sliderbox}>
						  <Slider
						    thumbStyle={{backgroundColor:'white', borderColor:'#fdbd30', borderWidth:3}}
						    minimumTrackTintColor= '#fdbd30'
    				    value={this.state.slidervalue}
    				    onValueChange={slidervalue => this.setState({ slidervalue })}
  				  />
					  </View>
					<View style={{height:hp('8%') ,marginLeft:wp('2%'), justifyContent: "center",}}><Text>10000</Text></View>
				</View>

        {/*   BUTTON GROUP    */}
        <View style={{width:wp('88%'), marginTop:hp('3%'),  paddingLeft:wp('2%'),}}><Text style={{alignSelf:'flex-start'}}>Location</Text></View>
        <View>
          <ButtonGroup
            onPress={this.updateIndexone}
            selectedIndex={groupOneIndex}
            buttons={buttonsOne}
            containerStyle={{height: hp('8%'), width:wp('88%')}}
            selectedButtonStyle={{backgroundColor:'#fdbd30'}}
          />
        </View>

        {/*   BUTTON GROUP    */}
        <View style={{width:wp('88%'), marginTop:hp('3%'),  paddingLeft:wp('2%'),}}><Text style={{alignSelf:'flex-start'}}>Date</Text></View>
        <View>
          <ButtonGroup
            onPress={this.updateIndextwo}
            selectedIndex={groupTwoIndex}
            buttons={buttonsTwo}
            containerStyle={{height: hp('8%'), width:wp('88%')}}
            selectedButtonStyle={{backgroundColor:'#fdbd30'}}
          />
        </View>
				
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
	},
	sliderbox:{
		height:hp('8%'), 
		width:wp('65%'), 
		alignItems:'stretch', 
		justifyContent:'center',

	}
});
