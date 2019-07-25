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

import { Icon } from "react-native-elements";
import  MyBackButton  from "../MyBackButton";
import  MyBackTwo  from "../MyBackTwo";


export default class InstituteOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageArray: [],

      ImageOne: null,
      ImageTwo: null,
      ImageThree: null,
      ImageFour: null,
      ImageFive: null,
      ImageSix: null,
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
      headerLeftContainerStyle:({paddingLeft:2}),
      headerRightContainerStyle:({padding:10}),
      headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Whiskey Institutes</Text>),
      headerLeft: (
        <MyBackButton navigation={navigation} />
      )
    };
  };
  

  componentDidMount = async () => {
    // this.servercaller();
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
              <Image
              source={require("../../assets/images/whiskey11.jpg")}
              style={styles.image}
              // resizeMode="contain"
              />  
              {/* {this.Imagesetter('1')} */}
              <View style={{margin:wp('1.5%')}}>
                <Text>University of Scotland, Scotland</Text>
                <Text>{essay}</Text>
              </View>
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

const essay = 'University of Scotland, Scotland, University of Scotland, Scotland University of Scotland, Scotland University of Scotland, Scotland University of Scotland, Scotland University of Scotland, Scotland University of Scotland, ScotlandUniversity of Scotland, ScotlandUniversity of Scotland, ScotlandUniversity of Scotland, Scotland'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems:'center'
  },
  image:{
    height: hp("26%"),
    width: wp("87%"),  
    // position:'absolute', 
    // top:0, 
    marginTop:wp('1.5%')
  },
  titles:{
    color:'black', 
    fontSize:wp('3%'), 
    textAlign:'center', 
    marginTop:hp('0.5%')
  },
  titlebox:{
    height:hp('3.5%'), 
    backgroundColor:'#fdbd30', 
    left:wp('3.5%'),
  },
  tile:{
    height:hp("35%"), 
    width:wp("90%"), 
    marginTop:hp('1.5%'),
    borderColor:'gray',
    borderWidth: 1,
    alignItems:'center'
  }
});
