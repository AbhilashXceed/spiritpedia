import React from "react";
import fetchStates from "../../../apis/states";
import fetchSpirits from "../../../apis/spirit";
import fetchMixers from "../../../apis/mixers";
import fetchFoods from "../../../apis/food";
import fetchSmokes from "../../../apis/smoke";
import fetchMusics from "../../../apis/music";

import { PropTypes } from "prop-types";
import { NavigationEvents } from "react-navigation";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
  ScrollView
} from "react-native";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
  Textarea,
  DatePicker
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import MyBackButton from "../../MyBackButton";
import MyBackTwo from "../../MyBackTwo";
import { TextInput } from "react-native-gesture-handler";

import ImagePicker from "react-native-image-picker";

import { Icon } from "react-native-elements";

// import { ScrollView } from "react-native-gesture-handler";

const options = {
  title: "SPIRITPEDIA",
  takePhotoButtonTitle: "Camera",
  chooseFromLibraryButtonTitle: "Gallery"
};

export default class Profileedit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      FirstName: null,
      LastName: null,
      Email: null,
      Phone: null,
      City: null,
      DOB: null,
      Bio: null,
      chosenDate: new Date(),
      valueD: "",
      keyOne: '',
      spiritArray:[],
      spiritLength:0,
      mixerArray:[],
      mixerLength:0,
      foodArray:[],
      foodLength:0,
      smokeArray:[],
      smokeLength:0,
      musicArray:[],
      musicLength:0,
      somekey:null,
      arraynumber: null,
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { padding: 5 },
      headerRightContainerStyle: { paddingRight: 15, paddingTop: 5 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>Profile</Text>
      ),
      headerLeft: <MyBackTwo navigation={navigation} />,
      headerRight: (
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
      )
    };
  };

  ImageFunction = () => {
    ImagePicker.showImagePicker(options, response => {
      console.warn("Response = ", response);

      if (response.didCancel) {
        console.warn("User cancelled image picker");
      } else if (response.error) {
        console.warn("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.warn("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  //
  //
  // D  R  O  P  D  O  W  N
  //
  //

  arrayChecker=(key)=>{
    const {spiritLength, mixerLength, musicLength, smokeLength, foodLength} = this.state

    if(key=='1'){
      if (spiritLength<3) {
        this.handleDPress(key)
      } else { alert("You can not have more than 3 Spirits")}
    } else if (key=='2'){
      if (mixerLength<3) {
        this.handleDPress(key)
      } else { alert("You can not have more than 3 Mixers")}
    } else if (key=='3'){
      if (foodLength<3) {
        this.handleDPress(key)
      } else { alert("You can not have more than 3 Foods")}
    } else if (key=='4'){
      if (smokeLength<2) {
        this.handleDPress(key)
      } else { alert("You can not have more than 2 Smokes")}
    } else if (key=='5'){
      if (musicLength<2) {
        this.handleDPress(key)
      } else { alert("You can not have more than 2 Music")}
    }
  }


  handleDPress = (key) => {
    let fetchfunction;
    const {
      navigation: { navigate }
    } = this.props;
    this.setState({keyOne: key})
    const { valueD } = this.state;
    if (key=='1') {
      fetchfunction = fetchSpirits
    } else if (key=='2'){
      fetchfunction = fetchMixers
    } else if (key=='3'){
      fetchfunction = fetchFoods
    } else if (key=='4'){
      fetchfunction = fetchSmokes
    } else if (key=='5'){
      fetchfunction = fetchMusics
    }
    navigate("Autocomplete", {
      // fetchOptions: fetchStates,
      fetchOptions: fetchfunction,
      returnRoute: "Profilethree",
      value: valueD,
    });
  };

  handleDidFocusOne = ({ state: { params: { value} = {} } }) => {
    const { keyOne, spiritLength, valueD} = this.state;
    let catchFunction = (spirit) => {return spirit == value;}
    const arrayResult = this.state.spiritArray.some(catchFunction);
    if (arrayResult) return;
    if (value === undefined) return;
    // if (value === valueD) return;
    if (keyOne=='1') {    
      this.setState({valueD: value});
      if (spiritLength <3){
        this.setState({spiritLength: spiritLength+1})
        this.state.spiritArray.push(value)
      }
    } 
  };

  handleDidFocusTwo = ({ state: { params: { value} = {} } }) => {
    const { keyOne, mixerLength, valueD } = this.state;
    let catchFunction = (mixer) => {return mixer == value;}
    const arrayResult = this.state.mixerArray.some(catchFunction);
    if (arrayResult) return;
    if (value === undefined) return;
    // if (value === valueD) return;
    if (keyOne=='2') {    
      this.setState({valueD: value});
      if (mixerLength <3){
        this.setState({mixerLength: mixerLength+1})
        this.state.mixerArray.push(value)      
      }
    }
  };

  handleDidFocusThree = ({ state: { params: { value} = {} } }) => {
    const { keyOne, foodLength, valueD } = this.state;
    let catchFunction = (food) => {return food == value;}
    const arrayResult = this.state.foodArray.some(catchFunction);
    if (arrayResult) return;
    if (value === undefined) return;
    // if (value === valueD) return;
    if (keyOne=='3') { 
      this.setState({valueD: value});
      if (foodLength <3){
        this.setState({foodLength: foodLength+1})
        this.state.foodArray.push(value)
      }
    }
  };

  handleDidFocusFour = ({ state: { params: { value} = {} } }) => {
    const { keyOne, smokeLength, valueD } = this.state;
    let catchFunction = (smoke) => {return smoke == value;}
    const arrayResult = this.state.smokeArray.some(catchFunction);
    if (arrayResult) return;
    if (value === undefined) return;
    // if (value === valueD ) return;
    if (keyOne=='4') {
      this.setState({valueD: value});
      if (smokeLength <2){
        this.setState({smokeLength: smokeLength+1})
        this.state.smokeArray.push(value)      
      }
    }
  };

  handleDidFocusFive = ({ state: { params: { value} = {} } }) => {
    const { keyOne, musicLength, valueD } = this.state;
    let catchFunction = (music) => {return music == value;}
    const arrayResult = this.state.musicArray.some(catchFunction);
    if (arrayResult) return;
    if (value === undefined) return;
    // if (value === valueD) return;
    if (keyOne=='5') {
      this.setState({valueD: value});
      if (musicLength <2){
        this.setState({musicLength: musicLength+1})
        this.state.musicArray.push(value)     
      }
    }
  };

  deleteTab = (key, arraynumber) => {
    const {spiritLength, mixerLength, musicLength, smokeLength, foodLength} = this.state;
    if (arraynumber=='1') {
      this.setState({somekey: key, spiritLength:spiritLength-1, arraynumber:arraynumber})
      this.state.spiritArray.splice(key, 1);
    } else if (arraynumber=='2') {
      this.setState({somekey: key, mixerLength:mixerLength-1, arraynumber:arraynumber})
      this.state.mixerArray.splice(key, 1);
    } else if (arraynumber=='3') {
      this.setState({somekey: key, foodLength:foodLength-1, arraynumber:arraynumber})
      this.state.foodArray.splice(key, 1);
    } else if (arraynumber=='4') {
      this.setState({somekey: key, smokeLength:smokeLength-1, arraynumber:arraynumber})
      this.state.smokeArray.splice(key, 1);
    } else if (arraynumber=='5') {
      this.setState({somekey: key, musicLength:musicLength-1, arraynumber:arraynumber})
      this.state.musicArray.splice(key, 1);
    }
    

  }


  render() {
    const { valueD } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                width: wp("50%"),
                height: hp("32%"),
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity onPress={() => this.ImageFunction()}>
                <View
                  style={{
                    height: wp("38%"),
                    width: wp("38%"),
                    borderRadius: wp("19%"),
                    backgroundColor: "#e3e3e3",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {this.state.avatarSource ? (
                    <Image
                      source={this.state.avatarSource}
                      style={{
                        height: wp("38%"),
                        width: wp("38%"),
                        borderRadius: wp("19%")
                      }}
                    />
                  ) : (
                    <Text style={{ fontSize: wp("2.7%"), color: "gray" }}>
                      Profile Picture
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: wp("50%"), height: hp("32%") }}>
              <View>
                <TextInput
                  placeholder={"First Name"}
                  placeholderTextColor={"gray"}
                  style={styles.tab}
                />
              </View>

              <View>
                <TextInput
                  placeholder={"Last Name"}
                  placeholderTextColor={"gray"}
                  style={styles.tab}
                />
              </View>

              <View>
                <TextInput
                  placeholder={"Email Address"}
                  placeholderTextColor={"gray"}
                  style={styles.tab}
                />
              </View>

              <View>
                <TextInput
                  placeholder={"+91-"}
                  placeholderTextColor={"gray"}
                  style={styles.tab}
                />
              </View>

              <View>
                <TextInput
                  placeholder={"City"}
                  placeholderTextColor={"gray"}
                  style={styles.tab}
                />
              </View>

              <View
                style={[
                  styles.tab,
                  { justifyContent: "center", paddingLeft: 0 }
                ]}
              >
                <DatePicker
                  defaultDate={new Date(1994, 4, 4)}
                  minimumDate={new Date(1950, 1, 1)}
                  maximumDate={new Date(1994, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "black", fontSize: wp("2.7%") }}
                  placeHolderTextStyle={{ color: "gray", fontSize: wp("2.7%") }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                alignSelf: "center",
                justifyContent: "flex-start",
                height: hp("16%"),
                width: wp("80%"),
                backgroundColor: "#e3e3e3",
                borderRadius: hp("1.65%")
              }}
            >
              <TextInput
                multiline={true}
                placeholder={"Bio upto 300 words"}
                placeholderTextColor={"gray"}
                maxLength={300}
                style={{
                  fontSize: wp("3%"),
                  color: "black",
                  padding: 0,
                  paddingLeft: wp("3%"),
                  paddingRight: wp("3%"),
                  paddingTop: hp("2%"),
                  paddingBottom: hp("2%")
                }}
              />
            </View>
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite spirit?  (max 3)</Text>
              <NavigationEvents onDidFocus={this.handleDidFocusOne} />
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.arrayChecker('1')}>
                  <View  style={{marginTop:hp('1.5%'), marginRight:wp('2%')}}>
                    <Icon name="pluscircleo" type="antdesign" color="black" size={wp("6%")}/>
                  </View>                 
                </TouchableOpacity>
                {this.state.spiritArray.map((elements, key)=>(
                  <View 
                  key={key}
                  style={styles.autoselecttab}>
                    <Text style={{fontSize: wp("2.7%"), color: "black", textAlign:'center'}}>
                      {elements}
                    </Text>
                      <TouchableOpacity style={{marginLeft:wp('1.5%')}} onPress={()=>this.deleteTab(key, '1')}>
                        <Icon name="close" type="antdesign" color="black" size={wp("4%")}/>
                      </TouchableOpacity>
                  </View>
                ))}
                { this.state.spiritLength==0 && (<Text style={styles.trialstyle}></Text>)}
              </View>
            </View>


            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite mixer?  (max 3)</Text>
              <NavigationEvents onDidFocus={this.handleDidFocusTwo} />
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.arrayChecker('2')}>
                  <View  style={{marginTop:hp('1.5%'), marginRight:wp('2%')}}>
                    <Icon name="pluscircleo" type="antdesign" color="black" size={wp("6%")}/>
                  </View>                 
                </TouchableOpacity>
                {this.state.mixerArray.map((elements, key)=>(
                  <View 
                  key={key}
                  style={styles.autoselecttab}>
                    <Text style={{fontSize: wp("2.7%"), color: "black", textAlign:'center'}}>
                      {elements}
                    </Text>
                      <TouchableOpacity style={{marginLeft:wp('1.5%')}} onPress={()=>this.deleteTab(key, '2')}>
                        <Icon name="close" type="antdesign" color="black" size={wp("4%")}/>
                      </TouchableOpacity>
                  </View>
                ))}
                { this.state.mixerLength==0 && (<Text style={styles.trialstyle}></Text>)}
            </View>


              
            </View>
            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite finger food?  (max 3)</Text>
              <NavigationEvents onDidFocus={this.handleDidFocusThree} />
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.arrayChecker('3')}>
                  <View  style={{marginTop:hp('1.5%'), marginRight:wp('2%')}}>
                    <Icon name="pluscircleo" type="antdesign" color="black" size={wp("6%")}/>
                  </View>                 
                </TouchableOpacity>

                {this.state.foodArray.map((elements, key)=>(
                  <View 
                  key={key}
                  style={styles.autoselecttab}>
                    <Text style={{fontSize: wp("2.7%"), color: "black", textAlign:'center'}}>
                      {elements}
                    </Text>
                      <TouchableOpacity style={{marginLeft:wp('1.5%')}} onPress={()=>this.deleteTab(key, '3')}>
                        <Icon name="close" type="antdesign" color="black" size={wp("4%")}/>
                      </TouchableOpacity>
                  </View>
                ))}
                { this.state.foodLength==0 && (<Text style={styles.trialstyle}></Text>)}
              </View>
            </View>


            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite smoke?  (max 2)</Text>
              <NavigationEvents onDidFocus={this.handleDidFocusFour} />
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.arrayChecker('4')}>
                  <View  style={{marginTop:hp('1.5%'), marginRight:wp('2%')}}>
                    <Icon name="pluscircleo" type="antdesign" color="black" size={wp("6%")}/>
                  </View>                 
                </TouchableOpacity>
                {this.state.smokeArray.map((elements, key)=>(
                  <View 
                  key={key}
                  style={styles.autoselecttab}>
                    <Text style={{fontSize: wp("2.7%"), color: "black", textAlign:'center'}}>
                      {elements}
                    </Text>
                      <TouchableOpacity style={{marginLeft:wp('1.5%')}} onPress={()=>this.deleteTab(key, '4')}>
                        <Icon name="close" type="antdesign" color="black" size={wp("4%")}/>
                      </TouchableOpacity>
                  </View>
                ))}
                { this.state.smokeLength==0 && (<Text style={styles.trialstyle}></Text>)}
              </View>
            </View>


            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite music?  (max 2)</Text>
              <NavigationEvents onDidFocus={this.handleDidFocusFive} />
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.arrayChecker('5')}>
                  <View  style={{marginTop:hp('1.5%'), marginRight:wp('2%')}}>
                    <Icon name="pluscircleo" type="antdesign" color="black" size={wp("6%")}/>
                  </View>                 
                </TouchableOpacity>
                {this.state.musicArray.map((elements, key)=>(
                  <View 
                  key={key}
                  style={styles.autoselecttab}>
                    <Text style={{fontSize: wp("2.7%"), color: "black", textAlign:'center'}}>
                      {elements}
                    </Text>
                      <TouchableOpacity style={{marginLeft:wp('1.5%')}} onPress={()=>this.deleteTab(key, '5')}>
                        <Icon name="close" type="antdesign" color="black" size={wp("4%")}/>
                      </TouchableOpacity>
                  </View>
                ))}
                { this.state.musicLength==0 && (<Text style={styles.trialstyle}></Text>)}
              </View>
            </View>
          </View>
          <View style={{height:hp('3%')}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  tab: {
    fontSize: wp("2.7%"),
    color: "black",
    height: hp("3.5%"),
    width: wp("40%"),
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.65%"),
    padding: 0,
    paddingLeft: wp("3%"),
    marginTop: hp("1.5%")
  },
  tabtwo: {
    fontSize: wp("2.7%"),
    color: "black",
    height: hp("3.5%"),
    width: wp("60%"),
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.65%"),
    padding: 0,
    paddingLeft: wp("3%"),
    marginTop: hp("0.5%")
  },
  label: {
    fontSize: wp("3%")
  },

  headedtabs: {
    width: wp("80%"),
    marginTop: hp("1%")
  },
  autoselecttab: {
    flexDirection:'row',
    height: hp("3.5%"),
    flexWrap:'wrap',
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.65%"),
    padding: 0,
    paddingLeft: wp("3%"),
    paddingTop: wp("1%"),
    paddingRight: wp("3%"),
    marginTop: hp("1.5%"),
    marginRight:wp('3%')
    },
  trialstyle:{
    fontSize: wp("2.7%"),
    color: "black",
    height: hp("3.5%"),
    width: wp("40%"),
    backgroundColor: "#e3e3e3",
    borderRadius: hp("1.65%"),
    padding: 0,
    paddingLeft: wp("3%"),
    marginTop: hp("1.5%")
  }
});
