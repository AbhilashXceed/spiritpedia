import React from "react";
import {
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
    Text
  } from "react-native";
  
 

export default class LandingScreen extends React.Component {

  logOut = ()=>{
    // AsyncStorage.setItem('user', JSON.stringify(''));
    // AsyncStorage.setItem('password', JSON.stringify(''))
    // this.props.navigation.navigate('HomeScreen');
  }

  async componentDidMount(){
    // let normaluser = AsyncStorage.getItem('user');
    // let parsed = JSON.parse(normaluser);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.temp}>Landing Screen</Text>
        <Button title='LOGOUT' onPress={this.logOut} color='black'/>
        <Text style={{fontSize: 20}}>{this.parsed}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'orange',
    },
    temp: {
      color: 'black',
      fontSize: 100,
      fontWeight: 'bold'

    }
})