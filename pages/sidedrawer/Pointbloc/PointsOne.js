import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
  ScrollView,
  Linking
} from "react-native";

import {
  Container,
  Header,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  DatePicker
} from "native-base";

import { Icon } from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import  MyBackButton  from "../../MyBackButton";
import  MyBackTwo  from "../../MyBackTwo";

const trial =
  'The art of distillation spread to Ireland and Scotland no later than the 15th century, as did the common European practice of distilling "aqua vitae", spirit alcohol, primarily for medicinal purposes. The practice of medicinal distillation eventually passed from a monastic setting to the secular via professional medical practitioners of th';

export default class PointsOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
      headerLeftContainerStyle:({paddingLeft:2}),
      headerRightContainerStyle:({padding:10}),
      headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Whiskey Points</Text>),
      headerLeft: (
        <MyBackButton navigation={navigation} />
      )
    };
  };
  

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
          <Image 
            source={require('../../../assets/images/spd-wallet.png')}
            style={{height:hp('20%'),}}
            resizeMode='center'
          />
          <Text style={[styles.titletext, {marginTop:hp('3%')}]}>250 points (Beginner)</Text>
          <Text style={[styles.titletext]}>Whiskey Guide Level - 1</Text>
        </View>
        <View style={{marginTop:hp('1%'), marginBottom:hp('4%'), borderTopWidth:1, borderColor:'gray'}}>
          <View style={styles.box}>
            <Text style={[styles.titletext]}>Number of Contributions</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.firsthalf}>
              <View style={styles.iconbox}><Icon name='message-square' type='feather' size={wp('4%')}/></View>
              <Text>Answers</Text></View>
            <View style={styles.secondhalf}><Text>- 50 Points</Text></View> 
          </View>
          <View  style={styles.box}>
            <View style={styles.firsthalf}>
              <View style={styles.iconbox}><Icon name='youtube' type='feather' size={wp('4%')}/></View>           
              <Text>Video Upload</Text></View>
            <View style={styles.secondhalf}><Text>- 100 points</Text></View> 
            
          </View>
          <View  style={styles.box}>
            <View style={styles.firsthalf}>
              <View style={styles.iconbox}><Icon name='user-check' type='feather' size={wp('4%')}/></View>
              <Text>Refer and Earn</Text></View>
            <View style={styles.secondhalf}><Text>- 100 Points</Text></View>
            
          </View>
        </View>
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate('PointsTwo')}
        style={{
          backgroundColor:'#fdbd30',
          width:wp('84%'),
          height:hp('5%'),
          justifyContent:'center',
          alignItems:'center',
          borderRadius:wp('5%'),
          position:'absolute',
          bottom:hp('4%')
        }}>
          <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}>Learn More</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  titletext:{
    color:'black',
    fontWeight:'bold',
    fontSize:wp('4%')
  },
  box:{
    height:hp('6%'),
    width:wp('84%'),
    flexDirection:'row',
    borderBottomWidth: 1,
    borderColor:'gray',
    alignItems:'center',
    justifyContent:'center'
  },
  firsthalf:{
    width:wp('60%'),
    flexDirection:'row'
  },
  secondhalf: {
    width:wp('24%')
  },
  iconbox:{
    marginTop:hp('0.6%'), 
    marginRight:wp('3%')
  }
  
  
  
});
