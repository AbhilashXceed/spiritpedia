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
  ScrollView,
  Linking
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

import { Icon as Icontwo } from 'react-native-vector-icons/FontAwesome';

import { Icon } from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const trial =
  'The art of distillation spread to Ireland and Scotland no later than the 15th century, as did the common European practice of distilling "aqua vitae", spirit alcohol, primarily for medicinal purposes. The practice of medicinal distillation eventually passed from a monastic setting to the secular via professional medical practitioners of th';

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: wp("100%"), height: hp("30%") }}
            source={require("../assets/images/whiskey11.jpg")}
          />
          <View style={styles.sections}>
            <Text style={styles.titletext}>The Whiskey Social</Text>
            <Text style={[styles.normaltext, { textAlign: "left" }]}>
              {trial}
            </Text>
          </View>

					<View style={[styles.sections, {flexDirection:'row', justifyContent:'space-between'}]}>
						<View>
							<View style={styles.iconbox}>
								<Icon name="wifi" type="font-awesome" size={wp("10%")} color="white" />
							</View>
							<Text style={styles.featuretitle}>WiFi</Text>
						</View>

						<View>
							<View style={styles.iconbox}>
								<Icon name="car" type="font-awesome" size={wp("10%")} color="white" />
							</View>
							<Text style={styles.featuretitle}>Transfers</Text>
						</View>

						<View>
							<View style={styles.iconbox}>
								<Icon name="aircraft" type="entypo" size={wp("10%")} color="white" />
							</View>	
							<Text style={styles.featuretitle}>Flight</Text>
						</View>

						<View>
							<View style={styles.iconbox}>
								<Icon name="cutlery" type="font-awesome" size={wp("10%")} color="white" />
							</View>
							<Text style={styles.featuretitle}>Meal</Text>
						</View>

						<View>
							<View style={styles.iconbox}>
								<Icon name="wheelchair" type="font-awesome" size={wp("10%")} color="white" />
							</View>
							<Text style={styles.featuretitle}>Level{"\n"} Access</Text>
						</View>
					</View>

					
          <View style={styles.headercontainer}>
            <View style={styles.headertabstwo}>
              <Text style={styles.tabtitle}>Tour Span - 7N/8D</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.smallcontainertwo}>
                <Text style={styles.containertext}>Price{"\n"}$1200{"\n"}per{"\n"}Ticket</Text>
              </View>
              <View style={styles.smallcontainer}>
                <Text style={styles.containertext}>Dates from{"\n"}12th Aug{"\n"}to{"\n"}20th Aug</Text>
							</View>
              <View style={styles.smallcontainertwo}>
                <Text style={styles.containertext}>Timings{"\n"}12:00 pm{"\n"}to{"\n"}8:00 pm</Text>
							</View>
            </View>
          </View>
          <TouchableOpacity
            // onPress={}
            style={styles.buttonstyle}
          >
            <Text style={styles.tabtitle}>Book Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sections: {
    flexWrap: "wrap",
    marginHorizontal: wp("5%"),
    marginTop: hp("2%"),
    marginBottom: hp("1%")
	},
	featuretitle:{
		textAlign:'center', 
		fontSize:wp('3%'),
		marginTop:wp('0.5%')
	},
  titletext: {
    fontSize: wp("3.5%"),
    fontWeight: "600",
    marginBottom: hp("1%")
  },
  normaltext: {
    fontSize: wp("3.5%"),
    marginBottom: hp("1%")
  },
  headercontainer: {
    height: hp("20%"),
    width: wp("90%"),
    marginHorizontal: wp("5%"),
    marginTop: hp("1%"),
    marginBottom: hp("1%"),
    borderColor: "#fdbd30",
    borderWidth: wp("1%"),
    borderRadius: wp("5%")
    // backgroundColor: '#fdbd30'
  },
  headertabstwo: {
    borderColor: "#fdbd30",
    // borderWidth:wp('1%'),
    borderTopLeftRadius: wp("2%"),
    borderTopRightRadius: wp("2%"),
    backgroundColor: "#fdbd30",
    height: hp("7%"),
    padding: hp("1.8%")
  },

  buttonstyle: {
    height: hp("5.3%"),
    width: wp("90%"),
    borderRadius: hp("2.5%"),
    backgroundColor: "#fdbd30",
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    alignSelf: "center",
    padding: wp("1.5%")
  },
  smallcontainer: {
    height: hp("12%"),
    borderColor: "#fdbd30",
    borderLeftWidth: wp("0.5%"),
    borderRightWidth: wp("0.5%"),
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
	},
	smallcontainertwo: {
		flex: 1,
    alignItems: "center",
    justifyContent: "center"
	},
	containertext:{
		fontSize: wp("3%"), 
		color: "black",
		textAlign: 'center',
		lineHeight:15
	},
	iconbox:{
		height:hp('9%'), 
		width:hp('9%'), 
		backgroundColor:'#fdbd30', 
		alignItems:'center', 
		justifyContent:'center',
		borderRadius:hp('2%'),
	},
  tabtitle: {
    color: "white",
    fontWeight: "700",
    textAlign: "center"
  },
  tabtext: {
    color: "black",
    textAlign: "center",
    fontSize: wp("3%"),
    paddingTop: hp("0.5%")
  }
});
