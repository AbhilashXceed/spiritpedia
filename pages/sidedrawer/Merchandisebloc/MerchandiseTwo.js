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

import { Icon, Badge, } from "react-native-elements";
import SliderEntry from "./SliderEntry";
import styles, { colors } from './styles/index.style';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import Modal from "react-native-modal";
const SLIDER_1_FIRST_ITEM = 1;

export default class MerchandiseTwo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radioOne: false,
      radioTwo: false,
      groupOneIndex: 0,

      item: null,
      address: '',
      fullName: '',
      state: '',
      district: '',
      data: [],
      modalVisible: false,
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
			ENTRIES1 : [
				{
						illustration: 'https://i.imgur.com/UYiroysl.jpg'
				},
				{
						illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
				},
				{
						illustration: 'https://i.imgur.com/MABUbpDl.jpg'
				},
				{
						illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
				},
				{
						illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
				},
				{
						illustration: 'https://i.imgur.com/lceHsT6l.jpg'
				}
		 ]
    }
  }

	
	
	componentDidMount(){
    //this.servercaller();
    const { navigation: { getParam } } = this.props;
    const id = getParam('id', null);
    const item = getParam('item', null)
    if (id === null) throw new Error('ID is not coming from previous page');
    this.setState({ id, item })
  }

  updateIndexOne = (groupOneIndex) => {
    this.setState({groupOneIndex})
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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

	_renderItemWithParallax ({item, index}, parallaxProps) {
		return (
				<SliderEntry
					data={item}
					even={(index + 1) % 2 === 0}
					parallax={true}
					parallaxProps={parallaxProps}
				/>
		);
  }
  
  addToCart = () => {
    //here write flow of adding item to cart
    this.setModalVisible(true);
    setTimeout( () => {
      this.setState({ modalVisible: false })
    }, 2000 );
  }

  render() {
    const buttonsTwo = ['S', 'M', 'L', 'XL', 'XXL']
		const { slider1ActiveSlide, ENTRIES1, item, groupOneIndex } = this.state;
    return (
      <View style={{flexWrap:'wrap'}}>

        {/*   CUSTOM HEADER  */}
        <View 
          style={{
            backgroundColor:'#fdbd30', 
            width:wp('100%'), 
            height:hp('9%'),
            flexDirection:'row'
          }}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingRight:wp('1%')}}>
            <Icon
              name="chevron-left"
              type="feather"
              color="white"
              size={wp('10%')}
              onPress={() => {this.props.navigation.navigate('MerchandiseOne')}}
            />
          </View>
          <View style={{flex:6, justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:wp('5.5%')}}>Merchandise</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:hp('1%'), marginRight:wp('3%')}}>
            <Icon
              name="shoppingcart"
              type="antdesign"
              color="white"
              size={wp('7%')}
            />
            <Badge
              value={'2'}
              status="primary"
              containerStyle={{ position: 'absolute', top: 0, right: -3 }}
            />
          </View>
        </View>
        {/*  CUSTOM HEADER  */}


        <ScrollView>
          <Carousel
            ref={c => (this._slider1Ref = c)}
            data={ENTRIES1}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.98}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={styles.slider}
            loop={false}
            loopClonesPerSide={2}
            autoplay={false}
            onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
          />

          <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotColor={"#fdbd30"}
            dotStyle={styles.paginationDot}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />

          {this.state.item && (
            <View style={modulestyles.infobox}>
              <Text style={{ fontWeight: "800", marginTop: wp("0.5%") }}>
                {item.user.name}
              </Text>
              <Text style={{ color: "black" }}>{item.alt_description}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "800", color: "black" }}>
                  {`\u20B9 ${item.height}`}
                </Text>
                <Text
                  style={modulestyles.cutprice}
                >{`\u20B9 ${item.width}`}</Text>
                <Text
                  style={[modulestyles.discount, { marginLeft: wp("3%") }]}
                >{`${item.likes}% off`}</Text>
              </View>
              <Text style={[modulestyles.discount]}>Special Price</Text>
            </View>
          )}

          <View style={modulestyles.sizeContainer}>
            <Text style={modulestyles.boxTitles}>Size</Text>
            <View style={{ marginLeft: wp("1%") }}>
              <ButtonGroup
                onPress={this.updateIndexOne}
                selectedIndex={groupOneIndex}
                buttons={buttonsTwo}
                containerStyle={{ height: hp("5%"), width: wp("70%") }}
                selectedButtonStyle={{ backgroundColor: "#fdbd30" }}
              />
            </View>
          </View>

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

          <TouchableOpacity 
				    style={modulestyles.bigButton}>
					    <Text style={{color:'white', fontWeight:'bold'}}>Add to Wishlist</Text>
			    </TouchableOpacity>
          
          <View 
            style={[ modulestyles.sizeContainer, {
              flexDirection:'row', 
              marginBottom:hp('2%'), 
              justifyContent:'space-around'
            }]}>
              <View  style={{width: wp('60%')}}>
                <Text style={{color:'black'}}>{`Deliver to PLACEHOLDER`}</Text>
                <Text >{`Address details will be shown here`}</Text>
              </View>
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity 
                  style={modulestyles.changeButton}>
                  <Text style={{color:'white'}}>Change</Text>
                </TouchableOpacity>
              </View>
          </View>
        </ScrollView>

        <View style={{ flexDirection: 'row', alignSelf:'center'}}>
          <TouchableOpacity 
            style={modulestyles.bottomButtonOne}
            onPress={this.addToCart}>
            <Text style={{color:'#fdbd30', fontWeight:'800'}}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={modulestyles.bottomButtonTwo}>
            <Text style={{color:'white', fontWeight:'800'}}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={this.state.modalVisible}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          backdropOpacity={0}
          onBackButtonPress={() => {this.setModalVisible(!this.state.modalVisible);}}
          onBackdropPress={() => {this.setModalVisible(!this.state.modalVisible);}}
          style={modulestyles.bottomModal}
        >
          <View style={modulestyles.modalContainer}>
            <Text style={{color:'white', fontWeight:'800'}}>
              Item is added to cart
            </Text>
          </View>
        </Modal>
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
  changeButton: {
    backgroundColor: '#fdbd30',
    height: hp('5%'),
    width: wp('17%'),
    alignItems:'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    borderRadius: 4
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
  bottomButtonOne: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#fdbd30',
    borderWidth: 2,
    height: hp('6%'),
    width: wp('49.99%')
  },
  bottomButtonTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdbd30',
    height: hp('6%'),
    width: wp('49.99%')
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fdbd30',
    padding: wp("2%"),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp("10%")
  },
});

