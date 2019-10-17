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
import HTMLView from 'react-native-htmlview';

export default class InstituteTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      institute: null,
      loading: true,
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerStyle: { backgroundColor: "#fdbd30", elevation: 0 },
      headerLeftContainerStyle: { paddingLeft: 2 },
      headerRightContainerStyle: { padding: 10 },
      headerTitle: (
        <Text style={{ color: "white", fontSize: wp("5.5%") }}>Whiskey Institutes</Text>
      ),
      headerLeft: <MyBackTwo navigation={navigation} />
    };
  };

  componentDidMount = () => {
    const { navigation: { getParam } } = this.props;
    const id = getParam('id', null);
    const item = getParam('item', null);
    this.getInstitute(id);
  };

  getInstitute = (id) => {
    const URL = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/getInstitutes";

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: id})
    })
      .then(res => res.json())
      .then(resjson => {
        console.warn("we got this", resjson);
        this.setState({ institute: resjson, loading: false });
      })
      .catch(err => {
        alert(`Something went wrong: ${err}`);
      });
  };

  render() {
		const { institute } = this.state;
    return (
      <View style={styles.container}>
        {this.state.loading && (
          <View>
            <ActivityIndicator size="large" />
            <Text>Loading</Text>
          </View>
        )}
        {institute && (
					<ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignSelf: "center", width: wp("88%"),  }}>
            <Image source={{ uri: institute[0].image }} style={styles.image} />
            <View>
              <Text style={{ fontWeight: "bold", color: "black", marginTop:hp('2%') }}>
                {institute[0].institute_name.toUpperCase()}
              </Text>
            </View>
						<HTMLView
        			value={institute[0].description.replace(/\r\n\r\n/g, "")}
        			stylesheet={styleshtml}
        			addLineBreaks={false}
        			// paragraphBreak
      			/>
          </View>
					</ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height: hp("30%"),
    width: wp("100%"), 
    alignSelf:'center'
  },
});

const styleshtml = StyleSheet.create({
  p: {
    flexWrap:'wrap',
    fontSize: wp("3%"),
    paddingTop:wp("1%"),
    //paddingLeft:wp("2.2%"),
    //paddingRight:wp("2.2%"),
  },
  // n: {
  //   padding:0,
  //   height: null,
  //   width: null
  // }
})