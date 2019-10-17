import React from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
	Image,
  Text,
  FlatList
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
import AsyncStorage from "@react-native-community/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { NavigationEvents } from "react-navigation";
import MyBackTwo from "../../MyBackTwo";
import MyBackButton from "../../MyBackButton";
import { ScrollView } from "react-native-gesture-handler";

export default class MerchAddressOne extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
  
  async componentDidMount(){
    const LOGINDATA = await AsyncStorage.getItem('LOGINDATA');
    const data = JSON.parse(LOGINDATA)
    this.setState({user_id: data.id})
    //console.warn('retrieved logindata', LOGINDATA)
    //console.warn('this is the id', parseInt(data.id))
    this.getAddressList(data.id);
  }


  getAddressList = (userid) => {
    const URL = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getAddressBookList";

    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(userid) })
    })
      .then(res => res.json())
      .then(resjson => {
        if (resjson.length === 0) {
          this.setState({noData: true})
        } else {
          this.setState({noData: false})
        }
        console.warn("api response", resjson);
        this.setState({ addressArray: resjson, loading: false });
      })
      .catch(err => {
        console.warn('address list err',err)
        //alert(`Something went wrong, please try again later`, err);
      });
  }



  setDefaultAddress = (addressId) => {
    const URL = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/setDefaultAddress";
    const body = { id: parseInt(addressId), user_id: parseInt(this.state.user_id)}
    console.warn('body', body)
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if(res.status===200){
          alert("Default Address updated successfully");
          this.props.navigation.goBack();
        } else {
          console.warn('status', res.status);
          alert(`Something went wrong, please try again later`);
        }
      })
      .catch(err => {
        console.warn('setDefaultAddress', err)
        //alert(`Something went wrong, please try again later`);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => this.getAddressList(this.state.user_id)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
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
              ListFooterComponent={() => <View style={{ height: hp("1%") }} />}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={()=>this.setDefaultAddress(item.id)}>
                    <View style={[styles.tile, {
                      borderColor: item.default_address==="1" ? "#fdbd30" : "lightgray" ,
                      borderWidth: item.default_address==="1" ? 2 : 1 ,
                      backgroundColor: item.default_address==="1" ? '#f3f3f3' : 'white' ,
                      }]}>
                      <View style={{ margin: wp("4%") }}>
                        <View>
                          <Text
                            style={[{ fontWeight: "bold", fontSize: wp("4%"), 
                            color: item.default_address==="1" ? "black" : "gray" ,
                          }]}
                          >
                            {item.name}
                          </Text>
                        </View>
                        <View>
                          <Text style={{color: item.default_address==="1" ? "black" : "gray"}}>{item.address}</Text>
                        </View>
                        <View>
                          <Text style={{color: item.default_address==="1" ? "black" : "gray"}}>{`${item.cityname} - ${item.postal_code}`}</Text>
                        </View>
                        <View>
                          <Text style={{color: item.default_address==="1" ? "black" : "gray"}}>{`Mobile: ${item.mobile_no}`}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          )}
          {this.state.noData && <Text>No Address added yet</Text>}
        </View>
        </ScrollView>

        <View style={styles.bigButtonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MerchAddressTwo")}
            style={styles.bigButton}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Add New Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems:'center'
  },
  tile: {
    width: wp("88%"),
    borderColor: "lightgray",
    borderWidth: 1,
    marginTop: hp("2//.5%"),
  },
  bigButton: {
    backgroundColor: "#fdbd30",
    width: wp("88%"),
    height: hp("6%"),
    //marginTop: hp("2%"),
    //position: "absolute",
    //bottom: hp("2%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  bigButtonContainer: {
    height: hp("10%"),
    width: wp("100%"),
    position: "absolute",
    bottom: 0,
    left:0,
    alignItems: "center",
    justifyContent: "center",
  },
  
});
