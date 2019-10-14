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
} from "react-native";
import Modal from "react-native-modal";
import {
  Item,
  Input,
  Label,
  Textarea,
  CheckBox,
  StyleProvider,
  Radio
} from "native-base";

import getTheme from "../../../native-base-theme/components";
import platform from "../../../native-base-theme/variables/platform";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Icon } from "react-native-elements";
import MyBackButton from "../../MyBackButton";
import MyBackTwo from "../../MyBackTwo";
import AsyncStorage from "@react-native-community/async-storage";

export default class MerchandiseOne extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radioOne: false,
      radioTwo: false,

      address: '',
      fullName: '',
      state: '',
      district: '',
      data: [],
      modalVisible: false,

      radioOne: true,
      radioTwo: false,
      radioThree: false,
      radioFour: false,
      radioFive: false,
    }
  }
	
	componentDidMount(){
		this.servercaller();
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  Radioclick = (value) => {
    if (value==="1") {

    } else if (value==="2") {

    } else if (value==="3") {

    } else if (value==="4") {

    } 
  }

  handleItemPress = (key, item) => {
    const { navigation: { navigate } } = this.props;
   
    navigate("MerchandiseTwo", {
      returnRoute: "MerchandiseOne",
      id: key,
      item: item,
    });
  };

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
    return (
      <View style={styles.container}>

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
              onPress={() => {this.props.navigation.navigate('ExploreOne')}}
            />
          </View>
          <View style={{flex:6, justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:wp('5.5%')}}>Merchandise</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:hp('1%'), marginRight:wp('2%')}}>
          <Icon
              name="sort"
              type="FontAwesome"
              color="white"
              size={wp('7%')}
              onPress={() => {this.setModalVisible(true);}}
            />
          </View>
        </View>
        {/*  CUSTOM HEADER  */}


        <View style={{alignSelf: "center", marginBottom: hp('10%')}}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={()=>this.handleItemPress(item.id, item)}>
                <View style={styles.tilebox}>
                  <Image
                    style={{
                      height: hp("25%"),
                      width: wp("49.9%")
                    }}
                    source={{ uri: item.urls.small }}
                  />
                  <View style={styles.infobox}>
                    <Text style={{ color: "black" }}>{item.user.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontWeight: "800",
                          color: "black"
                        }}
                      >
                        {`\u20B9 ${item.height}`}
                      </Text>
                      <Text style={styles.cutprice}>
                        {`\u20B9 ${item.width}`}
                      </Text>
                      <Text style={styles.discount}>
                        {`${item.likes}% off`}
                      </Text>
                    </View>
                    <Text style={{ fontSize: wp("2.5%") }}>
                      {`Free on ${item.width} Whiskey Points`}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              );
            }}
          />
        </View>


        <Modal
          isVisible={this.state.modalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropColor="#fdbd30"
          backdropOpacity={0.4}
          onBackButtonPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          onBackdropPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          style={styles.bottomModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderBox}>
              <Text style={styles.modalHeaderText}>Sort By</Text>
            </View>

            <StyleProvider style={getTheme(platform)}>
              <View style={styles.parentRadioBox}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>High - Low</Text>
                  <Radio
                    color={"black"}
                    selectedColor={"orange"}
                    onPress={() => this.Radioclick("1")}
                    selected={this.state.radioOne}
                  />
                </View>

                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Low - High</Text>
                  <Radio
                    color={"black"}
                    selectedColor={"orange"}
                    onPress={() => this.Radioclick("2")}
                    selected={this.state.radioTwo}
                  />
                </View>

                <View style={styles.modalView}>
                  <Text style={styles.modalText}>A - Z</Text>
                  <Radio
                    color={"black"}
                    selectedColor={"orange"}
                    onPress={() => this.Radioclick("3")}
                    selected={this.state.radioThree}
                  />
                </View>
              </View>
            </StyleProvider>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: hp('100%'),
	},
  discount: {
    fontWeight:"800",
    marginLeft: wp("3%"),
    color: "darkgreen", 
  },
  cutprice: {
    fontWeight:"800",
    fontSize: wp("2.8%"),
    textDecorationLine: "line-through",
    marginLeft: wp("1%")
  },
  tilebox: {
    height: hp("35%"),
    width: wp("50%"),
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  infobox: {
    backgroundColor: "#f0f0f0",
    height: hp("9.9%"),
    paddingHorizontal: wp("2%"),
    paddingVertical: wp("2%")
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: wp("2%"),
    alignItems: 'center',
    height: hp("40%")
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView : {
    flexDirection: "row",
    marginTop: hp("2%")
  },
  modalText: {
    width:wp("60%")
  },
  parentRadioBox: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: wp("2.7%"),
    marginTop: wp("4%"),
  },
  modalHeaderBox: {
    backgroundColor: "#fdbd30",
    justifyContent:'center',
    alignItems: 'center',
    width: wp("100%"),
    height: hp("7%")
  },
  modalHeaderText: {
    color: 'white',
    fontSize: wp("4%"),
    fontWeight: '800'
  }
});