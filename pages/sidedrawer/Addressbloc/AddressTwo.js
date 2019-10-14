import React from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
	Image,
	TextInput,
  Text,
  Picker
} from "react-native";


import {
  Container,
  Header,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  DatePicker,
  StyleProvider,
  Radio,
} from "native-base";

import getTheme from "../../../native-base-theme/components";
import platform from "../../../native-base-theme/variables/platform";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import MyBackButton from "../../MyBackButton";
import MyBackTwo from "../../MyBackTwo";
import AsyncStorage from "@react-native-community/async-storage";

export default class AddressOne extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radioOne: false,
      radioTwo: false,

      address: '',
      fullName: '',
      state: '',
      district: '',
    }
  }

	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;
    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { paddingLeft: 2 },
      headerRightContainerStyle: { padding: 10 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>Address Book</Text>
      ),
      headerLeft: <MyBackTwo navigation={navigation} />
    };
  }
  
  Radioclick(value) {
    if (value === "1") {
      this.setState({
        radioOne: !this.state.radioOne,
        radioTwo: false,
        radiovalue: 1
      });
    } else if (value === "2") {
      this.setState({
        radioTwo: !this.state.radioTwo,
        radioOne: false,
        radiovalue: 2
      });
    }
  }

  submitAddress = () => {
    const { address, fullName, state, district } = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder={"Full Name"}
            placeholderTextColor={"gray"}
            style={styles.tab}
            onChangeText={text => {
              this.setState({ fullName: text.replace(/\s/g, "") });
            }}
          />
        </View>

        <View style={{
          alignSelf: "center",
          justifyContent: "flex-start",
          height: hp("16%"),
          width: wp("80%"),
          backgroundColor: "#e3e3e3",
          borderRadius: hp("1.65%"),
          marginTop: hp("2.5%")
          }}>
          <TextInput
            placeholder={"Address"}
            placeholderTextColor={"gray"}
            multiline={true}
            numberOfLines={3}
            style={{
              fontSize: wp("3%"),
              color: "black",
              paddingLeft: wp("3%"),
              paddingRight: wp("3%"),
              paddingTop: hp("1%"),
              paddingBottom: hp("2%")
            }}
            onChangeText={text => {
              this.setState({ address: text.replace(/\s/g, "") });
            }}
          />
        </View>

        <StyleProvider style={getTheme(platform)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: wp("2.7%"),
              marginTop: wp("4%"),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Radio
                style={{ marginRight: wp("2.7%"), }}
                color={"black"}
                selectedColor={"orange"}
                onPress={() => this.Radioclick("1")}
                selected={this.state.radioOne}
              />
              <Text style={{ fontSize: wp("3%"), }}>Home</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Radio
                style={{ paddingRight: wp("2.7%"), }}
                color={"black"}
                selectedColor={"orange"}
                onPress={() => this.Radioclick("2")}
                selected={this.state.radioTwo}
              />
              <Text style={{ fontSize: wp("3%"), }}>Office/ Commercial</Text>
            </View>
          </View>
        </StyleProvider>
        
        <View>
          <TextInput
            placeholder={"Mobile Number"}
            placeholderTextColor={"gray"}
            style={styles.tab}
            onChangeText={text => {
              this.setState({ fullName: text.replace(/\s/g, "") });
            }}
          />
        </View>

          <View style={styles.tabtwo}>
            <Picker style={{
              width: wp("77%"),
              height: hp("4%"),
              }}
              selectedValue={this.state.state}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({state: itemValue})
              }>
              <Picker.Item label="State" value="java" />
              <Picker.Item label="Himachal Pradesh" value="1" />
              <Picker.Item label="Arunachal Pradesh" value="2" />
              <Picker.Item label="Andhra Pradesh" value="3" />
              <Picker.Item label="State" value="java" />
              <Picker.Item label="Himachal Pradesh" value="1" />
              <Picker.Item label="Arunachal Pradesh" value="2" />
              <Picker.Item label="Andhra Pradesh" value="3" />
            </Picker>
          </View>

        
          <View style={styles.tabtwo}>
            <Picker style={{
              width: wp("77%"),
              height: hp("4%"),
            }}
            selectedValue={this.state.district}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({district: itemValue})
            }>
              <Picker.Item label="City/District" value="java" />
              <Picker.Item label="Thiruvantapuram" value="1" />
              <Picker.Item label="Thiruchirapalli" value="2" />
              <Picker.Item label="Triyambakeshwara" value="3" />
            </Picker>
          </View>

        <View>
          <TextInput
            placeholder={"Postal Code"}
            placeholderTextColor={"gray"}
            style={styles.tab}
            onChangeText={text => {
              this.setState({ fullName: text.replace(/\s/g, "") });
            }}
          />
          </View>

        <TouchableOpacity 
				  onPress={()=>this.submitAddress()}
				  style={{
					  backgroundColor:'#fdbd30',
					  width:wp('88%'),
            height:hp('6%'),
            position:'absolute',
            bottom:hp('3%'),
            alignItems:'center',
            justifyContent:'center',
            alignSelf: "center",
				  }}>
					<Text style={{color:'white', fontWeight:'bold'}}>Submit</Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	},
	tab: {
    alignSelf: "center",
    fontSize: wp("3%"),
    color: "black",
    height: hp("4%"),
    width: wp("80%"),
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.8%"),
    padding: 0,
    paddingLeft: wp("3%"),
    marginTop: hp("2.5%")
  },
  tabtwo: {
    alignSelf: "center",
    height: undefined,
    width: wp("80%"),
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.8%"),
    padding: 0,
    paddingLeft: wp("3%"),
    marginTop: hp("2.5%"),
  },
});