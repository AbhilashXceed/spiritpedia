import React from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
	StatusBar,
	ImageBackground,
	Image
} from "react-native";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import SplashScreen from "react-native-splash-screen";
import { ScrollView } from "react-native-gesture-handler";


export default class Boarding extends React.Component {

  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (

      <ScrollView>
      <View style={{height:hp('102%'), alignItems:'center', backgroundColor:'white'}}>
        <StatusBar backgroundColor="skyblue" barStyle="light-content" />
        <View style={{ justifyContent:'center', height:hp('68%')}}>
				<Image
              source={require("../android/app/images/grapics.png")}
              style={{ height: hp("27%"),  }}
              resizeMode="contain"
            />
				</View>
        <View style={{backgroundColor:'#fdbd30', height:hp('34%'), width:wp('100%'), alignItems:'center'}}>
            <View style={{ alignItems:'center', marginTop:20}}>
              <Text style={{fontWeight:'bold', fontSize:wp('4%')}}>
                Subscribe the feeds with your
              </Text>
              <Text style={{fontWeight:'bold', fontSize:15}}>
                interests
              </Text>
            </View>
            <View style={{width:wp('80%')}}>
              <Text numberOfLines={5}
              style={{fontSize:wp('2.8%'), textAlign:'center', marginTop:10}}>
                This is going to be a main paragraph which 
                will ask people about their interests in spirits, 
                currently its a placeholder but editing will change in the future.
                Right now this paragraph is five lines with a medium size vertical margin.
              </Text>
            </View>
            <View style={{margin: 17}}>
              <Button rounded 
              onPress={()=>{this.props.navigation.navigate('Profilebloc')}}
              style={{
              backgroundColor:'white', 
              width: wp("33%"),
              height: hp("4.3%"),
              elevation:0
              }}>
                <Text style={{color:'black', fontSize:wp('2.8%'), marginLeft:13}}>Get Started</Text>
              </Button>
            </View>
          </View>
      </View>
    </ScrollView>
    );
  }
}

// AuthScreen
// Register
// FAQbloc