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
  Image
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AsyncStorage from "@react-native-community/async-storage";
import { GoogleSignin } from "react-native-google-signin";
import { Icon } from "react-native-elements";
import SplashScreen from "react-native-splash-screen";
import firebase from "react-native-firebase";


export default class ExploreOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normalUser: null,
      googleToken: null,
      currentUser: null,
      insta: null,
      instaname: null,
      ImageArray: [],

      ImageOne: null,
      ImageTwo: null,
      ImageThree: null,
      ImageFour: null,
      ImageFive: null,
      ImageSix: null,
    };
  }

  componentDidMount = async () => {
    this.servercaller();
    // const { currentUser } = firebase.auth();
    // this.setState({ currentUser });
    SplashScreen.hide();
    // console.warn(this.state.currentUser);
    // let A = await AsyncStorage.getItem("insta");
    // let insta = JSON.parse(A);
    
    // let A = await AsyncStorage.getItem("user");
    // let B = await AsyncStorage.getItem("googleToken");
    // if (A) {
    //   this.setState({ normalUser: A, googleToken: B });
    //   console.warn("User is", this.state.normalUser);
    // } else {
    //   console.warn("There is no userdata, something went wrong");
    // }
  };


  servercaller = () => {
    const URL = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getMobileDashboard";

    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>response.json())
    .then(resJson=>{
      this.setState({ImageArray:resJson})
      this.setState({
        // ImageOne: JSON.stringify(this.state.ImageArray[0].image),
        ImageOne: this.state.ImageArray[0].image,
        ImageTwo: this.state.ImageArray[1].image,
        ImageThree: this.state.ImageArray[2].image,
        ImageFour: this.state.ImageArray[3].image,
        ImageFive: this.state.ImageArray[4].image,
        ImageSix: this.state.ImageArray[5].image
      })
    })
  }

  Imagesetter = (value) => {

    // console.warn(this.state.ImageOne)
    if(value=='1'){
      return(
        <Image
          source={{uri: this.state.ImageOne}}
          style={styles.image}
          />
        )
    } else if (value=='2') {
      return(
        <Image
          source={{uri: this.state.ImageTwo}}
          style={styles.image}
          />
        )
    } else if (value=='3') {
      return(
        <Image
          source={{uri: this.state.ImageThree}}
          style={styles.image}
          />
        )
    } else if (value=='4') {
      return(
        <Image
          source={{uri: this.state.ImageFour}}
          style={styles.image}
          />
        )
    } else if (value=='5') {
      return(
        <Image
          source={{uri: this.state.ImageFive}}
          style={styles.image}
          />
        )
    } else if (value=='6') {
      return(
        <Image
          source={{uri: this.state.ImageSix}}
          style={styles.image}
          />
        )
    }
    
      
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity>
          <View style={styles.tile}>            
            <View style={[styles.titlebox, {width:wp('28%')}]}>
              <Text style={styles.titles}>Whiskeypedia</Text>
            </View>
              {/* <Image
              source={require("../assets/images/whiskey9.jpg")}
              style={styles.image}
              // resizeMode="contain"
              />   */}
              {this.Imagesetter('1')}
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.tile}>
            
            <View style={[styles.titlebox, {width:wp('39%')}]}>
              <Text style={styles.titles}>Whiskey's of the world</Text>
            </View>
              {/* <Image
              source={require("../assets/images/whiskey10.jpg")}
              style={styles.image}
              // resizeMode="contain"
              />           */}
              {this.Imagesetter('2')}
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
          <View style={styles.tile}>
          <View style={[styles.titlebox, {width:wp('40%')}]}>
              <Text style={styles.titles}>Distilleries of the world</Text>
            </View>
              {/* <Image
              source={require("../assets/images/whiskey16.png")}
              style={styles.image}
              // resizeMode="contain"
              /> */}
              {this.Imagesetter('3')}
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Eventbloc')}>
          <View style={styles.tile}>
            <View style={[styles.titlebox, {width:wp('27%')}]}>
              <Text style={styles.titles}>Events</Text>
            </View>
            {/* <Image
            source={require("../assets/images/whiskey14.jpg")}
            style={styles.image}
            // resizeMode="contain"
            /> */}
            {this.Imagesetter('4')}
          </View>         
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={styles.tile}>
            <View style={[styles.titlebox, {width:wp('27%')}]}>
              <Text style={styles.titles}>Offers</Text>
            </View>
            {/* <Image
            source={require("../assets/images/whiskey14.jpg")}
            style={styles.image}
            // resizeMode="contain"
            /> */}
            {this.Imagesetter('5')}
          </View>         
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('FeedOne')}>
          <View style={styles.tile}>
            <View style={[styles.titlebox, {width:wp('27%')}]}>
              <Text style={styles.titles}>Feeds</Text>
            </View>
            {/* <Image
            source={require("../assets/images/whiskey14.jpg")}
            style={styles.image}
            // resizeMode="contain"
            /> */}
            {this.Imagesetter('6')}
          </View>         
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tourbloc')}>
          <View style={styles.tile}>
            <View style={[styles.titlebox, {width:wp('38%')}]}>
              <Text style={styles.titles}>Distillery Tour</Text>
            </View>
            <Image
            source={require("../assets/images/whiskey11.jpg")}
            style={styles.image}
            // resizeMode="contain"
            />
            {/* {this.Imagesetter('7')} */}
          </View>         
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Institutebloc')}>
          <View style={styles.tile}>
            <View style={[styles.titlebox, {width:wp('38%')}]}>
              <Text style={styles.titles}>Institutes</Text>
            </View>
            <Image
            source={require("../assets/images/Universityone.jpg")}
            style={styles.image}
            // resizeMode="contain"
            />
            {/* {this.Imagesetter('7')} */}
          </View>         
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Newsbloc')}>
          <View style={styles.tile}>
            <View style={[styles.titlebox, {width:wp('28%')}]}>
              <Text style={styles.titles}>News</Text>
            </View>
            <Image
            source={require("../assets/images/News1.png")}
            style={styles.image}
            // resizeMode="contain"
            />
            {/* {this.Imagesetter('7')} */}
          </View>         
          </TouchableOpacity>

        </ScrollView>
        {/* <Text>
      Hi { currentUser && currentUser.email}!
      </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image:{
    height: hp("28.2%"),
    width: wp("100%"),  
    position:'absolute', 
    top:0, 
    zIndex:-1 
  },
  titles:{
    color:'black', 
    fontSize:wp('3%'), 
    textAlign:'center', 
    marginTop:hp('0.5%'),
    marginHorizontal:wp('3%')
  },
  titlebox:{
    height:hp('3.5%'), 
    backgroundColor:'#fdbd30', 
    left:wp('3.5%'),
    flexWrap:'wrap'
  },
  tile:{
    height:hp("28%"), 
    width:wp("100%"), 
    marginTop:hp('1.5%')
  }
});
