import React from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
	Image,
	Text
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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import MyBackButton from "../../MyBackButton";
import AsyncStorage from "@react-native-community/async-storage";

export default class AddressOne extends React.Component {

	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;
    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { paddingLeft: 2 },
      headerRightContainerStyle: { padding: 10 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>Address Book</Text>
      ),
      headerLeft: <MyBackButton navigation={navigation} />
    };
	}

  render() {
    return (
    	<View style={styles.container}>
				<View style={{width:wp('88%'), borderColor:'lightgray', borderWidth:1, marginTop:hp('5%')}}>
				<View style={{margin:wp('4%')}}>
					<View><Text style={{fontWeight:'bold', fontSize:wp('4%')}}>Rohit Supe</Text></View>
					<View><Text>SR. NO. 1123 Ashtwani Apartments, Shukrawar Peth, Astha colony</Text></View>
					<View><Text>Pune - 411042</Text></View>
					<View><Text>Mobile : +91 8552907070</Text></View>
				</View>
				<View style={{flexDirection:'row-reverse', height:hp('3%'), marginBottom:hp('2%')}}>
					<TouchableOpacity style={{marginRight:wp('5%')}}>
						<Text style={{textDecorationLine:'underline'}}>Remove</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{marginRight:wp('5%'),}}>
						<Text style={{textDecorationLine:'underline'}}>Edit</Text>
					</TouchableOpacity>
				</View>
			</View>

				<TouchableOpacity 
				onPress={()=>this.props.navigation.navigate('AddressTwo')}
				style={{
					backgroundColor:'#fdbd30',
					width:wp('88%'),
          height:hp('6%'),
          position:'absolute',
          bottom:hp('3%'),
          alignItems:'center',
          justifyContent:'center'
				}}>
					<Text style={{color:'white', fontWeight:'bold'}}>Add New Address</Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems:'center'
  },
});
