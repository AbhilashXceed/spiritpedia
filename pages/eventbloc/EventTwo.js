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
import MyBackButton from "../MyBackButton";
import MyBackTwo from "../MyBackTwo";

export default class EventTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageArray: []
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { paddingLeft: 2 },
      headerRightContainerStyle: { padding: 10 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>News</Text>
      ),
      headerLeft: <MyBackButton navigation={navigation} />
    };
  };

  componentDidMount = async () => {
    // this.servercaller();
  };


  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/event2.png")}
          style={{ width: wp("100%"), height: hp("28%"), marginTop:hp('2%'), marginBottom:hp('2%') }}
        />
				<View style={{flexDirection:'row', height:hp('12%'), width:wp('90%'), alignItems:'center', justifyContent:'center', borderColor:'lightgray', borderWidth:1}}>
					<View style={{flex:4, justifyContent:'space-around', paddingLeft:wp('2%')}}>
						<Text style={{fontWeight:'bold'}}>Sunburn Festival 2018</Text>
						<Text style={{fontSize:wp('3.5%'),}}>Music / English / Age 15+ only</Text>
						<Text style={{fontSize:wp('3.5%'),}}>Sat 29th Dec - Mon 31st Dec</Text>
						<Text style={{fontSize:wp('3.5%'),}}>Oxford Golf Resort: Pune</Text>
					</View>
					<View style={{flex:1}}>
						<Image source={require('../../assets/images/eventmap.png')}
						style={{height:hp('9%'), width:hp('9%')}}/>
					</View>
				</View>
        <View>
					<Text style={{marginHorizontal:wp('5%'), fontSize:wp('3.5%'), textAlign:'left', marginTop:hp('2%')}}>
						{essay}{essay}{essay}
					</Text>
				</View>
				<TouchableOpacity 
				style={{
					backgroundColor:'#fdbd30',
					width:wp('88%'),
          height:hp('6%'),
          position:'absolute',
          bottom:hp('3%'),
          alignItems:'center',
          justifyContent:'center'
				}}>
					<Text style={{color:'white', fontWeight:'bold'}}>Book Now</Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const essay =
  "Ekdum badhiya quality chi he ashi trip rahnar,sarvyanna private room dila jail, paidal nahi chalava lagel auto ra hil, mast tumhala ikde tikde firavalya jail ani ice cream pan dilya jail te pan free";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  }
});
