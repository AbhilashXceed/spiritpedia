import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text
} from "native-base";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image
  // ScrollView
} from "react-native";
import { Icon } from "react-native-elements";

export default class FeedOne extends React.Component {
  render() {
    return (
      <View
        style={{
          height: hp("102%"),
          alignItems: "center",
          marginTop: hp("4%")
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: wp("88%"),
            borderBottomColor: "gray",
            borderBottomWidth: 1,
						paddingBottom: hp("2%"),
						// marginBottom:hp("2%")
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              style={styles.Imgview}
              source={require("./../assets/images/drawer.png")}
            />
          </View>
          <View
            style={{
              flex: 4,
              justifyContent: "flex-end"
            }}
          >
            <Text style={styles.title}>Rohit Supe</Text>
            <Text style={styles.title}>What is your question?</Text>
          </View>
        </View>


        <View
          style={{
            // height: hp("10%"),
            width: wp("88%"),
            borderWidth: 1,
            borderColor: "black",
						borderRadius: 5,
						flexWrap:'wrap',
            // justifyContent: "center",
            // alignItems: "center",
            marginTop: wp("4%"),
            // marginBottom: wp("2%"),
            flexDirection: "column"
          }}
        >
					
					<View style={{flexWrap:'wrap'}}>
						<Text style={{ marginHorizontal: wp("5%"), marginTop:wp('3%'), marginBottom:wp('8%'), fontSize: wp("3%")}}>
            	This is a sample question??
							This is a sample question??
							This is a sample question??
							This is a sample question??
							This is a sample question??
          	</Text>
					</View>


					<View style={{ position:'absolute', bottom:wp('2%'), right:hp('2%') }}>
						{/* <View style={{ backgroundColor:'white'}}></View> */}
						<Text style={{fontSize:wp('3%'),}}>Some Icons here</Text>
					</View>


        </View>


				
        <View
          style={{
            // height: hp("10%"),
            width: wp("88%"),
            borderWidth: 1,
            borderColor: "black",
						borderRadius: 5,
						flexWrap:'wrap',
            // justifyContent: "center",
            // alignItems: "center",
            marginTop: wp("5%"),
            // marginBottom: wp("2%"),
            flexDirection: "column"
          }}
        >
					
					<View style={{flexWrap:'wrap'}}>
						<Text style={{ marginHorizontal: wp("5%"), marginTop:wp('3%'), marginBottom:wp('8%'), fontSize: wp("3%")}}>
            	this is simple answer lkajfoa akf lakmfoa awlfk malkfn laknfla lfkaw lkawnfl absolute afjawnf alignItemsn
							laknfl aknfl aknfaelgf
							al fknalf alfk malkfnklawjnflawjkn flajwnfl awkjnflaw 
							lawnf lawjnf laknfleakngleskmflawknf lawkjnfl akjnfklajen laejng laknfleakngleskmflawknfalkwnf lawknf laejng
							akljnf lajkwnf lakwnfl ajkngleak
							 lakwfnlawknf laknfla wknflawjnf lawmf lakn
          	</Text>
					</View>


					<View style={{ position:'absolute', bottom:wp('2%'), right:hp('2%') }}>
						{/* <View style={{ backgroundColor:'white'}}></View> */}
						<Text style={{fontSize:wp('3%'),}}>Some Icons here</Text>
					</View>

					
        </View>	


      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: wp("3.8%"),
    color: "black",
    textAlign: "left"
  },
  Imgview: {
    height: wp("12%"),
    width: wp("12%"),
    borderRadius: wp("6%")
  }
});

//  <View style={{ height: 300 }}>
// 				<WebView
// 					style={styles.WebViewContainer}
// 					javaScriptEnabled={true}
// 					domStorageEnabled={true}
// 					source={{uri: 'https://www.youtube.com/embed/JKCgwL-IfgM'}}>
// 				</WebView>
// 			 </View>
// WebViewContainer: {
// 	marginTop: Platform.OS == "ios" ? 20 : 0
// },
