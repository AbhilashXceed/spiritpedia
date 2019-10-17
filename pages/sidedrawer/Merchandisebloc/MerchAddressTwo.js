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
  Picker,
  ScrollView
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
import Modal from "react-native-modal";

export default class AddressOne extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radioOne: false,
      radioTwo: false,

      modalVisible: false,
      modalMessage: '',

      address: '',
      fullName: '',
      state: '',
      district: '',
      mobileNumber: '',
      postalCode: '',
      email: '',
      item: null,
      
      addressError: '',
      fullNameError: '',
      mobileNumberError: '',
      postalCodeError: '',
      emailError: '',
      radioError:'',
      districtError: '',

      stateArray: [{state:"Please select State", id:"0"}],
      cityArray: [{city:"Please select City", id:"0"}],
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

  async componentDidMount () {
    this.getStatesList();
    const LOGINDATA = await AsyncStorage.getItem('LOGINDATA');
    const data = JSON.parse(LOGINDATA);
    this.setState({user_id: data.id});
  }
  
  Radioclick(value) {
    if (value === "1") {
      this.setState({
        radioOne: !this.state.radioOne,
        radioTwo: false,
        radiovalue: 1,
        radioError: '',
      });
    } else if (value === "2") {
      this.setState({
        radioTwo: !this.state.radioTwo,
        radioOne: false,
        radiovalue: 2,
        radioError: '',
      });
    }
  }

  

  getStatesList = () => {
    const URL = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getState';
    
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(resjson => {
        //console.warn("we got this", resjson);
        this.setState({ stateArray: resjson,});
      })
      .catch(err => {
        //console.warn('get States', err)
        //alert(`Something went wrong, please try again later`);
      });
  }

  callCity = (id) => {
    const URL = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getCity';
    //console.warn('call city id', id)
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ state_id: parseInt(id) })
    })
      .then(res => { 
        //console.warn(res.status); 
        return res.json()})
      .then(resjson => {
        //console.warn("we got this", resjson);
        this.setState({ cityArray: resjson, });
      })
      .catch(err => {
        //console.warn('get city', err)
        //alert(`Something went wrong, please try again later`);
      });
  }

  isValid = () => {
    const { fullName, address, postalCode, email, radioOne, radioTwo, mobileNumber, state, district } = this.state;
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if(fullName===''){
      this.setState({fullNameError: "Please Enter your Name"});
    } else if (/\d/.test(fullName)) {
      this.setState({fullNameError: "Name should not contain number"})
    } else if (regexSpecialChar.test(fullName)) {
      this.setState({fullNameError: "Name should not contain special character"})
    }

    if(address===''){
      this.setState({addressError: "Please Enter the Address"});
    }

    if(postalCode===''){
      this.setState({postalCodeError: "Please Enter the Postal Code"});
    } else if (postalCode.length<6){
      this.setState({postalCodeError: "Please Enter a valid Postal Code"});
    }

    if(email===''){
      this.setState({emailError: "Please Enter your Email ID"});
    } else if (!regexEmail.test(email)) {
      this.setState({ emailError: "Enter a valid email address" });
    }

    if(radioOne===false && radioTwo===false){
      this.setState({radioError: "Please select an option"});
    }

    if(mobileNumber===''){
      this.setState({mobileNumberError: "Please Enter your Phone Number"});
    } else if(mobileNumber.length < 9){
      this.setState({mobileNumberError: "Please Enter a valid Phone Number"});
    }

    if(district==='0' || district===''){
      this.setState({districtError: "Please Enter your Town/City name"});
    }

    if ( fullName==='' || address==='' || postalCode==='' || postalCode.length<6 || email==='' || 
    (radioOne===false && radioTwo===false) || mobileNumber==='' || district==='0' || district==='' 
    || /\d/.test(fullName) || regexSpecialChar.test(fullName) || mobileNumber.length < 9
    ) return false;
    return true;
  }

  submitAddress = () => {
    const { fullName, address, postalCode, email, radioOne, radioTwo, mobileNumber, state, district,  } = this.state;
    const isValid = this.isValid();
    const insertURL = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/addAddress';
    let body = { 
      name: fullName,
      email: email,
      mobile: mobileNumber,
      state: parseInt(state),
      city: parseInt(district),
      address: address,
      postal_code: parseInt(postalCode),
      address_flag: radioOne === true ? 1 : 2,
    }
    
    if (isValid) {

        body['user_id'] = parseInt(this.state.user_id);
        console.warn('body sent', body)
        console.log('body sent', JSON.stringify(body))

        fetch(insertURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(res => {
            console.warn('response', res);
            this.responseHandler(res)
          })
          .catch(err => {
            console.warn('submit Address', err)
          });
    } 
  }

  responseHandler = (res) => {
    if (res.status === 200){
      this.setState({ modalMessage: "Address added Successfully", modalVisible: true,});
      setTimeout( () => {
        this.props.navigation.goBack();
      }, 2000 );
    } 
    else {
      this.setState({  modalMessage: "Something went wrong, please try again later", modalVisible: true,});
      setTimeout( () => {
        this.setState({modalVisible: false, modalMessage: ''});
      }, 2000 );
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: hp("78%") }}>
            <View>
              <TextInput
                placeholder={"Full Name"}
                placeholderTextColor={"gray"}
                value={this.state.fullName}
                style={styles.tabone}
                onChangeText={text => {
                  this.setState({ fullName: text });
                }}
                onFocus={() => this.setState({ fullNameError: "" })}
              />
            </View>
            {this.state.fullNameError === "" ? null : (
              <Text style={styles.errorText}>{this.state.fullNameError}</Text>
            )}

            <View style={styles.addressContainer}>
              <TextInput
                placeholder={"Address"}
                value={this.state.address}
                placeholderTextColor={"gray"}
                multiline={true}
                numberOfLines={3}
                style={styles.addressText}
                onChangeText={text => {
                  this.setState({ address: text });
                }}
                onFocus={() => this.setState({ addressError: "" })}
              />
            </View>
            {this.state.addressError === "" ? null : (
              <Text style={styles.errorText}>{this.state.addressError}</Text>
            )}

            <StyleProvider style={getTheme(platform)}>
              <View style={styles.radioBox}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Radio
                    style={{ marginRight: wp("2.7%") }}
                    color={"black"}
                    selectedColor={"orange"}
                    onPress={() => this.Radioclick("1")}
                    selected={this.state.radioOne}
                  />
                  <Text style={{ fontSize: wp("3%") }}>Home</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Radio
                    style={{ paddingRight: wp("2.7%") }}
                    color={"black"}
                    selectedColor={"orange"}
                    onPress={() => this.Radioclick("2")}
                    selected={this.state.radioTwo}
                  />
                  <Text style={{ fontSize: wp("3%") }}>Office/ Commercial</Text>
                </View>
              </View>
            </StyleProvider>
            {this.state.radioError === "" ? null : (
              <Text style={styles.errorText}>{this.state.radioError}</Text>
            )}

            <View>
              <TextInput
                placeholder={"Mobile Number"}
                placeholderTextColor={"gray"}
                style={styles.tabone}
                value={this.state.mobileNumber}
                keyboardType="phone-pad"
                maxLength={10}
                onChangeText={text => {
                  this.setState({ mobileNumber: text });
                }}
                onFocus={() => this.setState({ mobileNumberError: "" })}
              />
              {this.state.mobileNumberError === "" ? null : (
                <Text style={styles.errorText}>
                  {this.state.mobileNumberError}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                placeholder={"Email ID"}
                value={this.state.email}
                placeholderTextColor={"gray"}
                keyboardType="email-address"
                style={styles.tabone}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
                onFocus={() => this.setState({ emailError: "" })}
              />
            </View>
            {this.state.emailError === "" ? null : (
              <Text style={styles.errorText}>{this.state.emailError}</Text>
            )}

            <View style={styles.tabtwo}>
              <Picker
                style={styles.pickerBox}
                selectedValue={this.state.state}
                onValueChange={(itemValue, itemIndex) => {
                  this.callCity(itemValue);
                  this.setState({ state: itemValue });
                }}
              >
                <Picker.Item label="Please Select State" value="0" />
                {this.state.stateArray.map((element, index) => (
                  <Picker.Item
                    key={index}
                    label={element.state}
                    value={element.id}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.tabtwo}>
              <Picker
                style={styles.pickerBox}
                selectedValue={this.state.district}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ district: itemValue, districtError:'' })
                }
              >
                <Picker.Item label="Please select Town/City " value="0" />
                {this.state.cityArray.map((element, index) => (
                  <Picker.Item
                    key={index}
                    label={element.city}
                    value={element.id}
                  />
                ))}
              </Picker>
            </View>
            {this.state.districtError === "" ? null : (
              <Text style={styles.errorText}>{this.state.districtError}</Text>
            )}

            <View>
              <TextInput
                placeholder={"Postal Code"}
                placeholderTextColor={"gray"}
                value={this.state.postalCode}
                keyboardType="numeric"
                style={styles.tabone}
                maxLength={6}
                onChangeText={text => {
                  this.setState({ postalCode: text.replace(/\s/g, "") });
                }}
                onFocus={() => this.setState({ postalCodeError: "" })}
              />
            </View>
            {this.state.postalCodeError === "" ? null : (
              <Text style={styles.errorText}>{this.state.postalCodeError}</Text>
            )}
          </View>
          </ScrollView>

          <View style={styles.bigButtonContainer}>
            <TouchableOpacity
              onPress={() => this.submitAddress()}
              style={styles.bigButton}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        
          <Modal
            isVisible={this.state.modalVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            backdropOpacity={0}
            onBackButtonPress={() => {this.setModalVisible(!this.state.modalVisible);}}
            onBackdropPress={() => {this.setModalVisible(!this.state.modalVisible);}}
            style={styles.bottomModal}
          >
            <View style={styles.modalContainer}>
              <Text style={{color:'white', fontWeight:'800'}}>
                {this.state.modalMessage}
              </Text>
            </View>
          </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	},
	tabone: {
    alignSelf: "center",
    fontSize: wp("3%"),
    color: "grey",
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
  addressText: {
    fontSize: wp("3%"),
    color: "grey",
    paddingLeft: wp("3%"),
    paddingRight: wp("3%"),
    paddingTop: hp("1%"),
    paddingBottom: hp("2%")
  },
  addressContainer: {
    alignSelf: "center",
    justifyContent: "flex-start",
    height: hp("16%"),
    width: wp("80%"),
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.65%"),
    marginTop: hp("2.5%")
  },
  radioBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: wp("2.7%"),
    marginTop: wp("4%"),
  },
  pickerBox: {
    width: wp("77%"),
    height: hp("4%"),
  },
  errorText: {
    color: 'red', 
    fontSize: wp('3%'), 
    marginLeft: wp('12%'), 
    marginTop: hp('1%'),
  },
  bigButton: {
    backgroundColor:'#fdbd30',
    width:wp('88%'),
    height:hp('6%'),
    //position:'absolute',
    //bottom:hp('3%'),
    alignItems:'center',
    justifyContent:'center',
    alignSelf: "center",
  },
  bigButtonContainer: {
    height: hp("10%"),
    width: wp("100%"),
    position: "absolute",
    bottom: 0,
    left:0,
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    backgroundColor: '#fdbd30',
    padding: wp("2%"),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp("10%")
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});