import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Alert,
    StatusBar
  } from "react-native";
  
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
  import  MyBackButton  from "./MyBackButton";
  import  MyBackTwo  from "./MyBackTwo";

  import { NavigationActions } from 'react-navigation';

export default class BookmarksOne extends React.Component {


      static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
          headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
          headerLeftContainerStyle:({paddingLeft:2}),
          headerRightContainerStyle:({padding:10}),
          headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Distillery Tour</Text>),
          headerLeft: (<MyBackButton navigation={navigation} />)
        };
      };
    render(){
        return(
            <View>
                <Text>Bookmarks</Text>
            </View>
        );
    }
}