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

export default class NewsOne extends React.Component {
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

  servercaller = () => {
    const URL =
      "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getMobileDashboard";

    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  };

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/News1.png")}
          style={{ width: wp("100%"), height: hp("28%"), marginTop:hp('2%'), marginBottom:hp('2%') }}
        />
        <View>
					<Text style={{marginHorizontal:wp('7%'), fontSize:wp('3.5%'), textAlign:'left'}}>
						{essay}{essay}{essay}{essay}
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
					<Text style={{color:'white', fontWeight:'bold'}}>Pay Now</Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const essay =
  "Ekdum badhiya quality chi he ashi trip rahnar,sarvyanna private room dila jail, paidal nahi chalava lagel auto rahil, mast tumhala ikde tikde firavalya jail ani ice cream pan dilya jail te pan free";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  }
});
