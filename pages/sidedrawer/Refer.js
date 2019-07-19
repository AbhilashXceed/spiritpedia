import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
	Image,
	Share,
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

import { Icon } from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class Refer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

	componentDidMount(){
		// getReferCode()
	}

  send(){
    contents={title: 'spiritpedia',
              message: 'https://www.youtube.com/'};
    Share.share(contents);
  }

	getReferCode = () => {
		var url = '';
		fetch ( url, {
			method:'POST',
			headers: {
				"Content-Type": "application/json"
			}
		}).then(response=>response.json())
		.then(resjson=>JSON.stringify(resjson))
	}

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: hp("20%"),
            width: wp("80%"),
						justifyContent:'center',
						alignSelf:'center'
          }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>
            Refer your friend to earn free whiskey points. Spread the love and
            give your friends free whiskey points, worth Rs 50 each!
          </Text>
        </View>
        <View
          style={{
            height: hp("40%"),
            width: wp("100%"),
            // alignSelf:'center',
            justifyContent: "center"
          }}
        >
          <Image
            style={{ height: hp("35%"), width: hp("40%"), alignSelf:'center', }}
            source={require("../../assets/images/refer.png")}
          />
        </View>
        <View
          style={{
            height: hp("20%"),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Share your invite code</Text>
          <TouchableOpacity
						onPress={()=>this.send()}
            style={{
              flexDirection: "row",
              height: hp("5.3%"),
              width: wp("80%"),
              borderRadius: hp("2.5%"),
							backgroundColor: "#fdbd30",
							marginTop:hp('1%')
            }}
          >
            <View style={{ flex: 8, paddingLeft: wp("4%"), paddingTop:wp('1.5%') }}>
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontWeight: "700",
                  color: "white"
                }}
              >
                dummyreferralcode
              </Text>
            </View>
            <View style={{ flex: 1, paddingRight: wp("4%"), paddingTop:wp('0.5%') }}>
              <Icon name="share" type="entypo" size={wp("7%")} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex:1,
    // width: wp("100%"),
    justifyContent: "center",
    alignContent: "center"
  }
});
