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


export default class TourOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageArray: [],

    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
      headerLeftContainerStyle:({paddingLeft:2}),
      headerRightContainerStyle:({padding:10}),
      headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Distillery Tour</Text>),
      headerLeft: (<MyBackButton navigation={navigation} />)
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
    })
  }

  

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('TourTwo')}>
          <View style={styles.tile}>            
              <Image
              source={require("../../assets/images/distillary1.png")}
              style={styles.image}
              // resizeMode="contain"
              />  
              {/* {this.Imagesetter('1')} */}
              <View style={{margin:wp('1.5%')}}>
                <Text style={{fontWeight:'bold', color:'black'}}>Scotland, 2N - 3D</Text>
                <Text style={{fontSize:wp('3%'), color:'black'}}>{essay}</Text>
              </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('TourTwo')}>
          <View style={styles.tile}>            
              <Image
              source={require("../../assets/images/distillary2.png")}
              style={styles.image}
              // resizeMode="contain"
              />  
              {/* {this.Imagesetter('1')} */}
              <View style={{margin:wp('1.5%')}}>
                <Text style={{fontWeight:'bold', color:'black'}}>Australia, 5N - 6D</Text>
                <Text style={{fontSize:wp('3%'), color:'black'}}>{essay}</Text>
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

const essay = 'Ekdum badhiya quality chi he ashi trip rahnar, sarvyanna private shauchalay dila jail, paidal nahi chalava lagel auto rahil, mast tumhala ikde tikde firavalya jail ani ice cream pan dilya jail te pan free'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems:'center'
  },
  image:{
    height: hp("25%"),
    width: wp("87%"),  
    marginTop:wp('1.5%')
  },
  titles:{
    color:'black', 
    fontSize:wp('3%'), 
    textAlign:'center',
    marginTop:hp('0.5%')
  },
  tile:{
    height:hp("37%"), 
    width:wp("90%"), 
    marginTop:hp('1.5%'),
    borderColor:'lightgray',
    borderWidth: 1,
    alignItems:'center',
    overflow:'hidden',
    marginBottom:hp('1%'),
    paddingBottom:hp('1%')
  }
});
