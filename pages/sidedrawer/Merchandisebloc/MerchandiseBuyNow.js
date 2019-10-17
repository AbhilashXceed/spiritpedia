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
  ScrollView,
} from "react-native";

import {
  Item,
  Input,
  Label,
  Textarea,
  CheckBox,
  StyleProvider,
  Radio,
} from "native-base";
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { ButtonGroup } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import MyBackButton from "../../MyBackButton";
import MyBackTwo from "../../MyBackTwo";
import AsyncStorage from "@react-native-community/async-storage";

import Modal from "react-native-modal";

export default class MerchandiseBuyNow extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      item: null,
      data: [],
      defaultAddress: null
    }
  }

  static navigationOptions = ({navigation, navigationOptions}) => {
    const { params } = navigation.state;
    return {
      headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
      headerLeftContainerStyle:({paddingLeft:2}),
      headerRightContainerStyle:({padding:10}),
      headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Place Order</Text>),
      headerLeft: (
        <MyBackTwo navigation={navigation} />
      )
    };
  }

	
	
	componentDidMount(){
    //this.servercaller();
    const { navigation: { getParam } } = this.props;
    const id = getParam('id', null);
    const item = getParam('item', null);
    const defaultAddress = getParam('defaultAddress', null)
    if (id === null) throw new Error('ID is not coming from previous page');
    this.setState({ id, item, defaultAddress })
  }



	servercaller = () => {
    const Urltwo = "https://api.unsplash.com/photos/?client_id=234e2acd3ac4d6004e6df98b128efa9576075f5dcda00c13fc25eb5adbc6f9da"

    fetch(Urltwo, {
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Version": "v1",
        },
    })
    .then(res=>res.json())
    .then(res=>{
      console.warn(res)
      this.setState({
				data: res,
				//error: res.error || null,
				loading: false,
				refreshing: false
      })
		})
		.catch(err => this.setState({
			err, loading:false
		}))
  }

  
  

  render() {
		const { item } = this.state;
    return (
      <View style={{flexWrap:'wrap'}}>

        <ScrollView>
          
          {this.state.item && (
            <View style={modulestyles.infobox}>
              <View>
                <Image/>
              </View>
              <View>
                <Text style={{ fontWeight: "800", marginTop: wp("0.5%") }}>
                  {item.product_name}
                </Text>
                <Text style={{ color: "black" }}>this will have item description</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "800", color: "black" }}>
                    {`\u20B9 ${item.discount_price}`}
                  </Text>
                  <Text
                    style={modulestyles.cutprice}
                  >{`\u20B9 ${item.actual_price}`}</Text>
                  <Text
                    style={[modulestyles.discount, { marginLeft: wp("3%") }]}
                  >{`${item.discount}% off`}</Text>
                </View>
                  <Text style={[modulestyles.discount]}>Special Price</Text>
                </View>
              
            </View>
          )}

          <View style={[modulestyles.sizeContainer]}>
            <Text style={modulestyles.boxTitles}>Product Details</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{marginLeft: wp("1%"), width:wp('40%')}}><Text>Sleeve</Text></View>
              <Text style={{color:'black'}}>Half Sleeve</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{marginLeft: wp("1%"), width:wp('40%')}}><Text>Fabric</Text></View>
              <Text style={{color:'black'}}>Cotton Blend</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{marginLeft: wp("1%"), width:wp('40%')}}><Text>Neck Type</Text></View>
              <Text style={{color:'black'}}>Polo Neck</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{marginLeft: wp("1%"), width:wp('40%')}}><Text>Pattern</Text></View>
              <Text style={{color:'black'}}>Striped</Text>
            </View>
          </View>
          
          <View 
            style={[ modulestyles.sizeContainer, {
              flexDirection:'row', 
              marginBottom:hp('2%'), 
            }]}>
              <View  style={{width: wp('60%')}}>
              {this.state.defaultAddress!==null && (
                  <View>
                    <Text style={{color:'black'}}>{`Deliver to ${this.state.defaultAddress[0].name}`}</Text>
                    <Text >{this.state.defaultAddress[0].address}</Text>
                    <Text >{`${this.state.defaultAddress[0].cityname} - ${this.state.defaultAddress[0].postal_code}`}</Text>
                  </View>
                )}          
              </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const modulestyles = StyleSheet.create({
  infobox: {
    backgroundColor: "white",
    width: wp("88%"),
    paddingVertical: wp("2%"),
    alignSelf: "center",
    borderColor: 'lightgrey',

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
    width: wp("88%"),
    marginTop: hp("2%"),
    borderColor: "lightgrey",
    borderWidth: 1,
    alignSelf: "center",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("2%")
  },
  boxTitles: {
    marginLeft: wp("1%"),
    color: "black",
    fontWeight: "800",
    marginBottom: wp("1%")
  },
  bigButton: {
    backgroundColor:'#fdbd30',
    width:wp('88%'),
    height:hp('6%'),
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'center',
    marginTop: hp("2%"),
  },
});

