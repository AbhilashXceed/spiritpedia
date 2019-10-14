import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";

import SplashScreen from "react-native-splash-screen";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
  Accordion,
  Title,
  Content
} from "native-base";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar
  // ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import HTMLView from 'react-native-htmlview';

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arraytwo: []
    }
    this.questionarray = [
      "What is Whisky App?",
      "What is One Time Password?",
      "Why do I need to provide my E-mail",
      "What are Whiskey karma Points",
      "Problems sending and receiving"
    ];
    this.dataArray = [
      {title: "What is Whisky App?", content: "jshbfiajbf kajwfnd akwjf awkfj nawkjfn aakwj dnakwjfn awkawkjfn akwjfn "},
      {title: "What is One Time Password?", content: "jshbfiajbf kajwfnd akwjf awkfj nawkjfn aakwj dnakwjfn awkawkjfn akwjfn "},
      {title: "Why do I need to provide my E-mail", content: "jshbfiajbf kajwfnd akwjf awkfj nawkjfn aakwj dnakwjfn awkawkjfn akwjfn "},
      {title: "What are Whiskey karma Points", content: "jshbfiajbf kajwfnd akwjf awkfj nawkjfn aakwj dnakwjfn awkawkjfn akwjfn "},
      {title: "Problems sending and receiving", content: "jshbfiajbf kajwfnd akwjf awkfj nawkjfn aakwj dnakwjfn awkawkjfn akwjfn "}
    ];
  }

  componentDidMount(){
    SplashScreen.hide();
    this.serverCaller();
  }

  serverCaller = () => {
    const URL = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFAQ'

    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>response.json())
    .then(resJson=>{
      console.warn(resJson)
      this.setState({
        arraytwo: resJson
      })
      // console.warn(this.state.arraytwo);
    })
  }


  _renderHeader(item, expanded) {
    return (
      <View style={
        expanded? styles.openstyle : styles.closedstyle
      }>
          <View  style={{ paddingLeft: wp("2%"), flex:9 }}>
            <Text style={{ fontSize: wp("3%") }}>
            {" "}{item.question}
            </Text>
          </View>
      
          <View style={{ flex: 1 }}>
            {expanded
            ? <Icon name="chevron-up" type="feather" color="black" size={wp("4%")} />
            : <Icon name="chevron-down" type="feather" color="black" size={wp("4%")} />}
          </View>
      </View>
    );
  }


  _renderContent(item) {
    return (
      <View
        style={{
          // height: hp("5%"),
              width: wp("88%"),
              borderWidth: 1,
              borderColor: "black",
              borderBottomLeftRadius:5,
              borderBottomRightRadius:5,
              alignItems: "center",
              borderTopWidth:0,
              // marginTop: wp("5%"),
              // marginBottom: wp("2%"),
              flexDirection: "row",
              // flexWrap:'wrap'
        }}>
        {/* <Text style={{ fontSize: wp("3%"), padding:wp("2%") }} >
        {item.answer}
      </Text> */}
      <HTMLView
        value={item.answer}
        stylesheet={styleshtml}
        addLineBreaks={false}
        // paragraphBreak
      />
      </View>
      
    );
  }


  render() {
    return (
      <ScrollView  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={{ height: hp("100%"), alignItems: "center" }}>
        
          <View style={{ height: hp("2.5%"), backgroundColor: "white" }} />
          {/* {this.questionarray.map((question, key) => (
            <TouchableOpacity key={key} onPress={()=>console.warn(key)}>
              <View
                style={{
                  height: hp("5%"),
                  width: wp("88%"),
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 5,
                  // justifyContent: "center",
                  alignItems: "center",
                  marginTop: wp("3%"),
                  marginBottom: wp("2%"),
                  flexDirection: "row"
                }}
              >
                <Text style={{ paddingLeft: wp("2%"), fontSize: wp("3%"), flex:9 }}>
                  {question}
                </Text>
                <View style={{ flex: 1 }}>
                  <Icon
                    name="chevron-right"
                    type="feather"
                    color="black"
                    size={wp("4%")}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))} */}

         
          <Accordion
            style={{borderWidth:1, borderColor:'white'}}
            dataArray={this.state.arraytwo}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
           
            
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  closedstyle:{
    height: hp("5%"),
    width: wp("88%"),
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        alignItems: "center",
        marginTop: wp("5%"),
        flexDirection: "row"
  },
  openstyle:{
    height: hp("5%"),
        width: wp("88%"),
        borderColor: "black",
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        // borderBottomWidth:1,
        alignItems: "center",
        marginTop: wp("5%"),
        flexDirection: "row"
  }
});

const styleshtml = StyleSheet.create({
  p: {
    flexWrap:'wrap',
    fontSize: wp("3%"),
    paddingTop:wp("2%"),
    paddingLeft:wp("2.2%"),
    paddingRight:wp("2.2%"),
    paddingBottom:wp("2%"),
  },
  // n: {
  //   padding:0,
  //   height: null,
  //   width: null
  // }
})
