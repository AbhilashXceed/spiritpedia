import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AsyncStorage from "@react-native-community/async-storage";

import { Icon } from "react-native-elements";
import  MyBackButton  from "../MyBackButton";
import  MyBackTwo  from "../MyBackTwo";


export default class EventOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageArray: [],
    };
  }

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;
  //   return {
  //     headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
  //     headerLeftContainerStyle:({paddingLeft:2}),
  //     headerRightContainerStyle:({padding:10}),
  //     headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Upcoming Events</Text>),
  //     headerLeft: (<MyBackButton navigation={navigation} />)
  //   };
  // };
  

  componentDidMount = async () => {
    // this.servercaller();
  };


  servercaller = () => {
    const URL = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getMobileDashboard";

    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>response.json())
    
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
            <Text style={{color:'white', fontSize:wp('5.5%')}}>Upcoming Events</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:hp('1%'), marginRight:wp('2%')}}>
          <Icon
              name="filter"
              type="feather"
              color="white"
              size={wp('7%')}
              onPress={() => {this.props.navigation.navigate('EventFilter')}}
            />
          </View>
        </View>
        {/*  CUSTOM HEADER  */}


        <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EventTwo')}>
          <View style={styles.tile}>            
              <Image
              source={require("../../assets/images/event2.png")}
              style={styles.image}
              // resizeMode="contain"
              />  
              <View style={{marginVertical:wp('1.5%'), flexDirection:'row'}}>
								<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
									<Text style={[styles.textbox, {fontSize:wp('4%')}]}>18 Aug</Text>
									{/* <Text style={[styles.textbox, {fontSize:wp('3.5%'),}]}>onwards</Text>					 */}
								</View>
								<View style={{flex:2, borderLeftWidth:1, borderColor:'lightgray'}}>
									<Text style={[styles.textbox, {fontSize:wp('3.5%'), fontWeight:'bold', textAlign:'left', marginLeft:wp('2%')}]}>DJ Night at Lord of the Drinks</Text>
								</View>
								<View style={{flex:1, alignItems:'center'}}>
									<TouchableOpacity 
										style={{
											alignItems:'center',  
											justifyContent:'center',
											backgroundColor:'#fdbd30',
											height:hp('3.5%'),
											width:wp('18%'),
											borderRadius:wp('4%')
											}}>
										<Text style={{color:'white', fontWeight:'bold'}}>Book</Text>
									</TouchableOpacity>
									<Text style={[styles.textbox, {fontSize:wp('3.5%'), marginTop:hp('1%')}]}>Rs 1000</Text>
                  {/* <Text style={[styles.textbox, {fontSize:wp('3.5%'), fontWeight:'100'}]}>onwards</Text> */}
								</View>
              </View>
         		</View>
          </TouchableOpacity>

					<TouchableOpacity>
          <View style={styles.tile}>            
              <Image
              source={require("../../assets/images/event1.png")}
              style={styles.image}
              // resizeMode="contain"
              />  
              <View style={{marginVertical:wp('1.5%'), flexDirection:'row'}}>
								<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
									<Text style={[styles.textbox, {fontSize:wp('4%')}]}> 26 Aug</Text>
									{/* <Text style={[styles.textbox, {fontSize:wp('3.5%')}]}>onwards</Text>	 */}
								</View>
								<View style={{flex:2, borderLeftWidth:1, borderColor:'lightgray'}}>
									<Text style={[styles.textbox, {fontSize:wp('3.5%'), fontWeight:'bold',  textAlign:'left', marginLeft:wp('2%')}]}>Eat and Drink all You can</Text>
								</View>
								<View style={{flex:1, alignItems:'center'}}>
									<TouchableOpacity 
										style={{
											alignItems:'center',  
											justifyContent:'center',
											backgroundColor:'#fdbd30',
											height:hp('3.5%'),
											width:wp('18%'),
											borderRadius:wp('4%')
											}}>
										<Text style={{color:'white', fontWeight:'bold'}}>Book</Text>
									</TouchableOpacity>
									<Text style={[styles.textbox, {fontSize:wp('3.5%'), marginTop:hp('1%')}]}>Rs 2000</Text>
                  {/* <Text style={[styles.textbox, {fontSize:wp('3.5%'), fontWeight:'100'}]}>onwards</Text> */}
								</View>
              </View>
         		</View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const essay = 'University of Scotland, Scotland, University of Scotland, Scotland University of Scotland, Scotland University of Scotland, Scotland University of Scotland, Scotland University of Scotland, Scotland University of Scotland, ScotlandUniversity of Scotland, ScotlandUniversity of Scotland, ScotlandUniversity of Scotland, Scotland'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems:'center'
  },
  image:{
    height: hp("26%"),
    width: wp("87%"),  
    marginTop:wp('1.5%')
  },
  tile:{
    height:hp("37%"), 
    width:wp("90%"), 
    marginTop:hp('1.5%'),
    borderColor:'lightgray',
    borderWidth: 1,
    alignItems:'center'
  },
  textbox:{
    textAlign:'center',
    textAlignVertical:'center',
    color:'black', 
    // fontWeight:'bold',
    // borderColor:'blue',
    // borderWidth:1,
    lineHeight:hp('2.9%'),
    // marginBottom:-3,
    margin: 0
  }
});
