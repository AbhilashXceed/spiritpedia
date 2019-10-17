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
  Image,
  FlatList
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AsyncStorage from "@react-native-community/async-storage";

import { Icon } from "react-native-elements";
import  MyBackButton  from "../MyBackButton";
import  MyBackTwo  from "../MyBackTwo";


export default class InstituteOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],

  }
}

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
      headerLeftContainerStyle:({paddingLeft:2}),
      headerRightContainerStyle:({padding:10}),
      headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Whiskey Institutes</Text>),
      headerLeft: (
        <MyBackButton navigation={navigation} />
      )
    };
  };
  

  componentDidMount = () => {
    this.getInstitutesList();
  };

  getInstitutesList = () => {
    const URL = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getInstituteList";

    fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>response.json())
    .then(resJson=>{
      if (resJson.length === 0) {
        this.setState({noData: true})
      } else {
        this.setState({noData: false})
      }
      console.warn('institutes', resJson);
      this.setState({dataArray: resJson, loading: false})
    })
    .catch(err => {
      alert(`Something went wrong, please try again later`);
    });
  }

  handleItemPress = (key, item) => {
    const { navigation: { navigate } } = this.props;
   
    navigate("InstituteTwo", {
      returnRoute: "InstituteOne",
      id: key,
      item: item,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignSelf: "center",}}>
          { this.state.loading ? (
            <View>
              <ActivityIndicator size='large'/>
              <Text>Loading</Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.dataArray}
              keyExtractor={item => item.id}
              horizontal={false}
              ListFooterComponent= {()=>(<View style={{height:hp('1%')}} />)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={()=>this.handleItemPress(item.id, item)}>
                    <View style={styles.tile}>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                      <View style={{ margin: wp("1.5%"), }}>
                        <Text style={{ fontWeight: "bold", color: "black" }}>
                          {item.institute_name}
                        </Text>
                        <Text numberOfLines={3} style={{ fontSize: wp("3%"), color: "black" }}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          )}
          {this.state.noData && (
            <Text>No Data to display</Text>
          )}
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height: hp("26%"),
    width: wp("87%"),  
    marginTop:wp('1.5%')
  },
  tile:{
    height:hp("38%"), 
    width:wp("90%"), 
    marginTop:hp('1.5%'), 
    borderColor:'lightgray',
    borderWidth: 1,
    alignItems:'center',
    overflow: 'hidden',
  }
});
