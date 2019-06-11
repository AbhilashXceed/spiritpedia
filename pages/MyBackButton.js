import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";


export default class MyBackButton extends React.Component {
  render() {
    return (
    
            <Icon
            name="chevron-left"
            type="feather"
            color="white"
            size={wp('10%')}
            onPress={() => {this.props.navigation.navigate('Home');
            console.warn("button is pressed")}}
      />
        
    )
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop

// export default withNavigation(MyBackButton);