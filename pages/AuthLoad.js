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
      this._bootstrap();
      // this.getAllKeys();
    }


    _bootstrap = async () => {
      // console.warn('inside funtion')
      const LOGINDATA = await AsyncStorage.getItem('LOGINDATA');
        // console.warn(LOGINDATA);
        this.props.navigation.navigate(LOGINDATA ? 'Landingone' : 'AuthBloc')

        
  }

  componentDidMount() {
    // this._bootstrapAsync();
    // firebase.auth().onAuthStateChanged(user => {
    //   this.props.navigation.navigate(user ? 'Landingone' : 'AuthBloc');
    //   })
  }
  

  // getAllKeys = async () => {
  //   let keys = []
  //   try {
  //     keys = await AsyncStorage.getAllKeys()
  //   } catch(e) {
  //     // read key error
  //   }
  
  //   console.warn(keys)
  //   // example console.log result:
  //   // ['@MyApp_user', '@MyApp_key']
  // }

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
        <StatusBar backgroundColor="#263238" barStyle="dark-content" />
      </View>
    );
  }

}