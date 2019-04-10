import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import firebase, { Firebase } from "react-native-firebase";


export default class AuthLoad extends React.Component {
    constructor(props) {
      super(props);
      // this._bootstrapAsync();
    }


  //   _bootstrapAsync = async () => {
  //       const userToken = await AsyncStorage.getItem('user');
  //       this.props.navigation.navigate(userToken ? 'Landingone' : 'AuthScreen');
  // }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Landingone' : 'AuthScreen');
      })
  }
  

render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgrounColor: '#263238'
      }}>
        <ActivityIndicator size='large'/>
        <Text>Loading</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }

}