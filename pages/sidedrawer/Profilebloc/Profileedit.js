import React from "react";
import fetchStates from "../../../apis/states";
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
      spiritArray:[]
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

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

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

  handleDPress = () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { valueD } = this.state;
    navigate("Autocomplete", {
      fetchOptions: fetchStates,
      returnRoute: "Profilethree",
      value: valueD
    });
  };

  handleDidFocus = ({ state: { params: { value } = {} } }) => {
    if (value === undefined) return;
    this.state.spiritArray.push(value)
    this.setState({
      valueD: value,
    });
  };

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
                  {/* <Image
                    source={this.state.avatarSource}
                    style={{
                      height: wp("38%"),
                      width: wp("38%"),
                      borderRadius: wp("19%")
                    }}
                  /> */}

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
              <Text style={styles.label}>What's your favourite spirit?</Text>
              <NavigationEvents onDidFocus={this.handleDidFocus} />
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.handleDPress}>
                  <View  style={{marginTop:hp('1.5%'), marginRight:wp('2%')}}>
                    <Icon name="pluscircleo" type="antdesign" color="black" size={wp("6%")}/>
                  </View>                 
                </TouchableOpacity>

                {this.state.spiritArray.map((elements, key)=>(
                  <View 
                  key={key}
                  style={{
                  color: "black",
                  height: hp("3.5%"),
                  flexWrap:'wrap',
                  // width: wp("40%"),
                  backgroundColor: "#e3e3e3",
                  borderRadius: hp("1.65%"),
                  padding: 0,
                  paddingLeft: wp("3%"),
                  marginTop: hp("1.5%"),
                  marginRight:wp('3%')}}>
                    <Text style={{fontSize: wp("2.7%"), color: "black",}}>
                      {elements}
                    </Text>

                  </View>
                ))}
                <Text
                  style={{
                    fontSize: wp("2.7%"),
                    color: "black",
                    height: hp("3.5%"),
                    width: wp("40%"),
                    backgroundColor: "#e3e3e3",
                    borderRadius: hp("1.65%"),
                    padding: 0,
                    paddingLeft: wp("3%"),
                    marginTop: hp("1.5%")
                  }}
                >
                  {valueD}
                </Text>
              </View>

              {/* <TextInput placeholderTextColor={"gray"} style={styles.tabtwo} /> */}
            </View>

            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite mixer?</Text>
              <TextInput placeholderTextColor={"gray"} style={styles.tabtwo} />
            </View>

            <View style={styles.headedtabs}>
              <Text style={styles.label}>
                What's your favourite finger food?
              </Text>
              <TextInput placeholderTextColor={"gray"} style={styles.tabtwo} />
            </View>

            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite smoke?</Text>
              <TextInput placeholderTextColor={"gray"} style={styles.tabtwo} />
            </View>

            <View style={styles.headedtabs}>
              <Text style={styles.label}>What's your favourite music?</Text>
              <TextInput placeholderTextColor={"gray"} style={styles.tabtwo} />
            </View>
          </View>
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
  }
});
