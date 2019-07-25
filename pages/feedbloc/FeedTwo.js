import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text
} from "native-base";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image
  // ScrollView
} from "react-native";
import { Icon } from "react-native-elements";

export default class FeedTwo extends React.Component {
  constructor(props){
    super(props)
    this.followerarray=[

      {
        name:'Rohit Supe',
        firstname: 'Rohit',
        lastname: 'Supe',
        followers: '270',
        id: '3',
        answer: 'This is is answer 1 awljkfn wala lwfn awlf  alwfk nawlk na wlfknaw '
      },
      {
        name:'Guru Agavane',
        firstname: 'Guru',
        lastname: 'Agavanee',
        followers: '130',
        id: '5',
        answer: 'This is answer 2 lawd awfjdnawk awljkfn wala lwfn awlf  alwfk nawlk na wlfknaw '
      },
      {
        name:'Nikhil Khanse',
        firstname: 'Nikhil',
        lastname: 'Khanse',
        followers: '230',
        id: '6',
        answer: 'This is answer 3 lawd awfjdnawk awljkfn wala lwfn awlf  alwfk nawlk na wlfknaw awfjdnawk awljkfn wala lwfn awlf  alwfk nawlk na wlfknaw'
      },
      // "Rohit Supe",
      // "Guru Agavane",
      // "Nikhil Khanse",
      // "Arindam Ghosh",
      // "Sagar Agarwal",
      // "Kishor Kumar",
      // "Rupesh Mane",
      // "Kiran Vedpathak",
      // "Rahul Joshi"
    ]

  }

  // componentDidMount(){}

  // Feeder = () => {
  //   const URL='';
    
  //   fetch(URL, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response=>response.json())
  //   .then(resjson=>{
  //     // console.warn(JSON.stringify(resjson))
  //     console.warn('clicked');
  //   })
  // }

  render() {
    return (
      <View style={{height: hp("102%"), alignItems: "center"}}>
        <View style={{width: wp('100%'), alignItems: "center", flexWrap:'wrap', backgroundColor:'#f0f0f0'}}>

        <View
          style={styles.questionbox}
        >
          <View
            style={{
              flexDirection: "row",
              width: wp("88%"),
              paddingBottom: hp("3%"),
              paddingLeft: wp('2%'),
            }}
          >

          <TouchableOpacity style={{ flex: 1, paddingTop:hp('1%'), }}>
            <Image
              style={styles.Imgview}
              source={require("../../assets/images/drawer.png")}
            />
          </TouchableOpacity>       
          <TouchableOpacity style={{flex: 6, justifyContent: "flex-end", marginLeft:wp('3%')}}>
            <Text style={styles.title}>Guruprasad Agavane</Text>
            <Text style={styles.subtitle}>12.4 K Followers</Text>
            <Text style={styles.subtitle}>05 June at 21:14 pm</Text>
          </TouchableOpacity>         
        </View>
					<View style={{flexWrap:'wrap'}}>
						<Text style={{ marginHorizontal: wp("3%"), textAlign:'left', marginBottom:wp('4%'), fontSize: wp("3%"), color:'gray'}}>
            	What would be the best mild beer for house party?
              I prefer lights over towers. The ones on my mind right now are 
              bira blonde, KF draught, bira white and REPEAT. Let me know If you people know 
              some deadly combo here.???
          	</Text>
					</View>
          <View style={{width:wp('87.5%'), height:wp('8%'), borderTopColor: 'lightgray', borderTopWidth: 1, flexDirection:'row-reverse'}}>
            <View style={styles.IconsStyle}><Icon name="adduser" type="antdesign" color="gray" size={wp('4%')} onPress={()=>console.warn('clicked')}/></View>
            <View style={styles.IconsStyle}><Icon name="message-square" type="feather" color="gray" size={wp('4%')} /></View>
            <View style={styles.IconsStyle}><Icon name="hearto" type="antdesign" color="gray" size={wp('4%')} /></View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>   
        <View>
        {this.followerarray.map((follower, key) => (
          <View
          key={key}
          style={{
            // height: hp("10%"),
            width: wp("88%"),
            // justifyContent: "center",
            alignItems:'center',
            flexDirection: "row",     
            marginTop:hp('2%'),
          }}
        >

          
          <View
            style={{
              // flex: 1,
              height: hp("6%"),
              width: hp("6%"),
              backgroundColor:'#f0f0f0',
              borderRadius: hp("3%"),
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'flex-start'
            }}
          >
            <Text style={{fontSize:wp('4%'), color:'gray'}}>
              {follower.firstname.charAt(0) + follower.lastname.charAt(0)}
            </Text>
            
          </View>

          <View style={{flexWrap:'wrap', backgroundColor:'#f0f0f0', width:wp('76%'), marginLeft:wp('2%'),
            borderRadius:wp('2%')}}>
            <View style={{marginLeft:wp('3%'), flexDirection:'row'}}>
              <Text style={{ fontSize: wp("4%"), marginTop:wp('2%') }}>{follower.name}</Text>
              <Text style={{ fontSize: wp("3%"), marginTop:wp('3%'), marginLeft:wp('2%')  }}>{follower.followers + ' followers'}</Text>
            </View>
            <View>
            <Text style={{ fontSize: wp("3%"), marginHorizontal:wp('3%'), marginBottom:wp('2%'), color:'gray'}}>{follower.answer}</Text>
            </View>
          </View>

          
        </View>
        ))}
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: wp("3.8%"),
    color: "black",
    textAlign: "left"
  },
  questionbox:{
    width: wp("88%"),
    borderWidth: 1,
    borderColor: "lightgray",
    flexWrap:'wrap',
    marginTop: wp("6%"),
    flexDirection: "column",
    marginBottom:hp('4%'),
  },
  subtitle: {
    fontSize: wp("2.8%"),
    color: "black",
    textAlign: "left",
    color: 'gray',
  },
  Imgview: {
    height: wp("12%"),
    width: wp("12%"),
    borderRadius: wp("6%")
  },
  IconsStyle: {
    marginRight:wp('4%'),
    paddingTop:wp('2%'),
  }
});

//  <View style={{ height: 300 }}>
// 				<WebView
// 					style={styles.WebViewContainer}
// 					javaScriptEnabled={true}
// 					domStorageEnabled={true}
// 					source={{uri: 'https://www.youtube.com/embed/JKCgwL-IfgM'}}>
// 				</WebView>
// 			 </View>
// WebViewContainer: {
// 	marginTop: Platform.OS == "ios" ? 20 : 0
// },
