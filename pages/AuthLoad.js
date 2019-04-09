import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";


export default class AuthLoad extends React.Component {
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    }


    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('user');
        this.props.navigation.navigate(userToken ? 'Landingone' : 'AuthScreen');
}

render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgrounColor: '#263238'
      }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

}