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
  FlatList,
  ActivityIndicator
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AsyncStorage from "@react-native-community/async-storage";

import { Icon } from "react-native-elements";
import MyBackButton from "../MyBackButton";
import MyBackTwo from "../MyBackTwo";

export default class NewsOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArray: [],
      loading: true,
      noData: false,
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { paddingLeft: 2 },
      headerRightContainerStyle: { padding: 10 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>News</Text>
      ),
      headerLeft: <MyBackButton navigation={navigation} />
    };
  };

  componentDidMount = () => {
    this.getNewsList();
  };

  getNewsList = () => {
    const URL =
      "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getNewsList";

    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resjson => {
        if (resjson.length === 0) {
          this.setState({noData: true})
        } else {
          this.setState({noData: false})
        }
        console.warn("we got this", resjson);
        this.setState({ newsArray: resjson, loading: false });
      })
      .catch(err => {
        alert(`Something went wrong: ${err}`);
      });
  };

  handleItemPress = (key, item) => {
    const { navigation: { navigate } } = this.props;
   
    navigate("NewsTwo", {
      returnRoute: "NewsOne",
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
              data={this.state.newsArray}
              keyExtractor={item => item.id}
              horizontal={false}
              ListFooterComponent= {()=>(<View style={{height:hp('1%')}} />)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={()=>this.handleItemPress(item.id, item)}>
                    <View style={styles.tile}>
                      <View style={[styles.titlebox, {width:wp('28%')}]}>
                        <Text style={{color: 'black'}}>{item.date}</Text>
                      </View>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                      <View style={{ margin: wp("1.5%"),}}>
                        <Text style={{ fontWeight: "bold", color: "black" }}>
                          {item.title}
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
    justifyContent:'center', 
    alignItems:'center',
  },
  image:{
    height: hp("26%"),
    width: wp("87%"),  
    position:'relative', 
    top:wp('1.5%'), 
    alignSelf:'center'
  },
  tile:{
    height:hp("34%"), 
    paddingBottom: hp('1%'), 
    width:wp("90%"), 
    marginTop:hp('1.5%'),
    borderColor:'lightgray',
    borderWidth: 1,
    //alignItems:'center',
    overflow: 'hidden',
  },
  titlebox:{
    height:hp('3.5%'), 
    backgroundColor:'#fdbd30', 
    position:'absolute',
    top:0,
    left:wp('3.5%'),
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
