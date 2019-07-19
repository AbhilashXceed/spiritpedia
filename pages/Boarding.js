import React from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  ImageBackground,
  Image,
  Animated
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

import AppIntroSlider from "./AppIntroSlider";

import SplashScreen from "react-native-splash-screen";
import {
  ScrollView,
  PanGestureHandler,
  FlatList,
  RectButton
} from "react-native-gesture-handler";

export default class Boarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  _renderItem = item => {
    return (
      <View style={[styles.MainContainer]}>
        <StatusBar backgroundColor="skyblue" barStyle="light-content" />
        <View style={{ justifyContent: "center", height: hp("68%") }}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View
          style={{
            backgroundColor: "#fdbd30",
            height: hp("34%"),
            width: wp("100%"),
            alignItems: "center"
          }}
        >
          <View />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };


  finalButton = () => {
    return (
      
      <View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AuthScreen')}>
          <View style={{
            backgroundColor: "white",
           width: wp("33.33%"),
           height: hp("4.3%"),
           borderRadius:wp('5%'),
          //  borderWidth:20,
          //  borderColor:'blue'
          }}>
            <Text style={{textAlign:'center', fontSize:wp('4%'), paddingTop:3}}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    );
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        // onDone={()=>this._onDone()}
        // showSkipButton={true}
        renderItem={this._renderItem}
        // showDoneButton={true}
        showNextButton={false}
        // showPrevButton={true}
        // showSkipButton={true}
        renderDoneButton={this.finalButton}
        activeDotStyle={{backgroundColor:'#fdbd30',height:wp('2%'), width:wp('6%')}}
        dotStyle={{backgroundColor:'lightgray', height:wp('2%'), width:wp('2%')}}
        paginationStyle={{backgroundColor:'transparent',height:hp('3%'), bottom:hp('32%')}}
      />
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: wp("4%"),
    textAlign: "center",
    marginTop: 20,
    color: "black",
    width: wp("75%")
  },
  text: {
    fontSize: wp("2.8%"),
    textAlign: 'justify',
    marginTop: 10,
    color: "black",
    width: wp("88%")
  },
  image: {
    height: hp("27%"),
    resizeMode: "contain"
  }
});

// AuthScreen
// Register
// FAQbloc
// Landingone
// Profilebloc
// Profilethree
// Register

const slides = [
  {
    key: "k1",
    title: "Welcome to the Whiskey Community",
    text:
      "This is going to be a main paragraph which will ask people about their interests in spirits, currently its a placeholder but editing will change in the future. Right now this paragraph is five lines with a medium size vertical margin.",
    image: require("../assets/images/boarding_icon1.png"),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "skyblue"
  },
  {
    key: "k2",
    title: "Learn about Whiskey from Spiritpedia",
    text:
      "This is going to be a main paragraph which will ask people about their interests in spirits, currently its a placeholder but editing will change in the future. Right now this paragraph is five lines with a medium size vertical margin.",
    image: require("../assets/images/boarding_icon2.png"),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "skyblue"

  },
  {
    key: "k3",
    title: "Follow, Share and Vote the Whiskey Content",
    text:
      "This is going to be a main paragraph which will ask people about their interests in spirits, currently its a placeholder but editing will change in the future. Right now this paragraph is five lines with a medium size vertical margin.",
    image: require("../assets/images/boarding_icon3.png"),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "skyblue"

  },
  {
    key: "k4",
    title: "Subscribe the feeds with your interests",
    text:
      "This is going to be a main paragraph which will ask people about their interests in spirits, currently its a placeholder but editing will change in the future. Right now this paragraph is five lines with a medium size vertical margin.",
    image: require("../assets/images/grapics.png"),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "skyblue"

  }
];
