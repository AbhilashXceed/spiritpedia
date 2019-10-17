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
  FlatList,
  TouchableHighlight,
  ScrollView
} from "react-native";

import {
  Item,
  Input,
  Label,
  Textarea,
  CheckBox,
  StyleProvider,
  Radio
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import MyBackButton from "../../MyBackButton";
import MyBackTwo from "../../MyBackTwo";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationEvents } from "react-navigation";
import { Icon, Badge } from "react-native-elements";
import Modal from "react-native-modal";

export default class MerchCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      address: "",
      fullName: "",
      state: "",
      district: "",
      data: [],
      defaultAddress: null
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { paddingLeft: 2 },
      headerRightContainerStyle: { padding: 10 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>Cart</Text>
      ),
      headerLeft: <MyBackTwo navigation={navigation} />
    };
  };

  async componentDidMount() {
    const LOGINDATA = await AsyncStorage.getItem("LOGINDATA");
    const data = JSON.parse(LOGINDATA);
    this.setState({ user_id: data.id });
    this.setState({ id, item });
    //this.getCartdata(data.id);
    this.getAddressList(data.id);
  }

  getAddressList = userid => {
    const URL =
      "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getAddressBookList";

    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(userid) })
    })
      .then(res => res.json())
      .then(resjson => {
        if (resjson.length === 0) {
          this.setState({ noAddress: true });
        } else {
          let defaultAddress = resjson.filter(function(element) {
            return element.default_address === "1";
          });
          this.setState({ defaultAddress: defaultAddress });
        }
        console.warn("api response", resjson);
      })
      .catch(err => {
        console.warn("address list err", err);
        //alert(`Something went wrong, please try again later`, err);
      });
  };

  getCartdata = userId => {
    const Urltwo =
      "https://api.unsplash.com/photos/?client_id=234e2acd3ac4d6004e6df98b128efa9576075f5dcda00c13fc25eb5adbc6f9da";

    fetch(Urltwo, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1"
      },
      body: JSON.stringify({ id: userId })
    })
      .then(res => res.json())
      .then(res => {
        console.warn(res);
        this.setState({
          item: res,
          //error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(err =>
        this.setState({
          err,
          loading: false
        })
      );
  };

  handleplaceOrder = user_id => {};

  render() {
    return (
      <View style={{ flexWrap: "wrap" }}>
        <NavigationEvents
          onDidFocus={() => this.getAddressList(this.state.user_id)}
        />
        <View
          style={[
            modulestyles.sizeContainer,
            {
              flexDirection: "row",
              marginBottom: hp("2%"),
              justifyContent: "space-around"
            }
          ]}
        >
          <View style={{ width: wp("60%") }}>
            {this.state.defaultAddress === null ? (
              <Text style={{ color: "black" }}>No Address added yet</Text>
            ) : (
              <View>
                <Text
                  style={{ color: "black" }}
                >{`Deliver to ${this.state.defaultAddress[0].name}`}</Text>
                <Text>{`${this.state.defaultAddress[0].cityname} - ${this.state.defaultAddress[0].postal_code}`}</Text>
              </View>
            )}
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MerchAddressOne")}
              style={modulestyles.changeButton}
            >
              {this.state.defaultAddress !== null ? (
                <Text style={{ color: "white" }}>Change</Text>
              ) : (
                <Text style={{ color: "white" }}>Add</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={{ alignSelf: "center", height: hp("78%") }}>
            {this.state.loading ? (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
                <Text>Loading</Text>
              </View>
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.addressArray}
                keyExtractor={item => item.id}
                horizontal={false}
                ListFooterComponent={() => (
                  <View style={{ height: hp("1%") }} />
                )}
                renderItem={({ item }) => {
                  return (
                    <View style={modulestyles.infobox}>
                      <Text
                        style={{ fontWeight: "800", marginTop: wp("0.5%") }}
                      >
                        {item.product_name}
                      </Text>
                      <Text style={{ color: "black" }}>
                        "place description here"
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "800", color: "black" }}>
                          {`\u20B9 ${item.discount_price}`}
                        </Text>
                        <Text
                          style={modulestyles.cutprice}
                        >{`\u20B9 ${item.actual_price}`}</Text>
                        <Text
                          style={[
                            modulestyles.discount,
                            { marginLeft: wp("3%") }
                          ]}
                        >{`${item.discount}% off`}</Text>
                      </View>
                      <Text style={[modulestyles.discount]}>Special Price</Text>
                    </View>
                  );
                }}
              />
            )}
            {this.state.noData && <Text>No Item added yet</Text>}
          </View>
        </ScrollView>

        <View style={{ flexDirection: "row" }}>
          <View style={modulestyles.bottomButtonOne}>
            <Text
              style={{ color: "black", fontWeight: "800", fontSize: wp("5%") }}
            >{`Total `}</Text>
          </View>
          <TouchableOpacity
            style={modulestyles.bottomButtonTwo}
            onPress={() => this.handleplaceOrder(this.state.user_id)}
          >
            <Text style={{ color: "white", fontWeight: "800" }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const modulestyles = StyleSheet.create({
  infobox: {
    backgroundColor: "white",
    width: wp("88%"),
    paddingVertical: wp("2%"),
    alignSelf: "center"
  },
  discount: {
    fontWeight: "800",
    color: "darkgreen"
  },
  cutprice: {
    fontWeight: "800",
    fontSize: wp("2.8%"),
    textDecorationLine: "line-through",
    marginLeft: wp("1%")
  },
  sizeContainer: {
    width: wp("100%"),
    //marginTop: hp("2%"),
    borderColor: "lightgrey",
    borderWidth: 1,
    alignSelf: "center",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("2%")
  },
  changeButton: {
    backgroundColor: "#fdbd30",
    height: hp("5%"),
    width: wp("17%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    borderRadius: 4
  },
  bottomButtonOne: {
    //alignItems: 'center',
    justifyContent: "center",
    paddingLeft: wp("5%"),
    borderColor: "#fdbd30",
    borderWidth: 1,
    height: hp("6%"),
    width: wp("60%")
  },
  bottomButtonTwo: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdbd30",
    height: hp("6%"),
    width: wp("40%")
  }
});
