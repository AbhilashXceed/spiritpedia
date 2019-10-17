import AuthScreen from "../AuthScreen";
import RegisterUser from "../RegisterUser";
import ExploreOne from "../ExploreOne";
import BookmarksOne from "../BookmarksOne";
import OffersOne from "../OffersOne";

import EventOne from "../eventbloc/EventOne";
import EventFilter from "../eventbloc/EventFilter";
import EventTwo from "../eventbloc/EventTwo";

import FeedOne from "../feedbloc/FeedOne";
import FeedTwo from "../feedbloc/FeedTwo";

import TourOne from "../tourbloc/TourOne";
import TourTwo from "../tourbloc/TourTwo";

import AuthLoad from "../AuthLoad";
import LogOut from "../LogOut";
import Boarding from "../Boarding";

import  MyBackButton  from "../MyBackButton";
import  MyBackTwo  from "../MyBackTwo";

import ShareService from "../sidedrawer/ShareService";
import Refer from "../sidedrawer/Refer";
import Support from "../sidedrawer/Support";
import FAQ from "../sidedrawer/FAQblock/FAQ";
import Feedback from "../sidedrawer/Feedback";

import AddressOne from "../sidedrawer/Addressbloc/AddressOne"
import AddressTwo from "../sidedrawer/Addressbloc/AddressTwo"

import PointsOne from "../sidedrawer/Pointbloc/PointsOne";
import PointsTwo from "../sidedrawer/Pointbloc/PointsTwo";

import MerchandiseOne from "../sidedrawer/Merchandisebloc/MerchandiseOne";
import MerchandiseTwo from "../sidedrawer/Merchandisebloc/MerchandiseTwo";
import MerchandiseBuyNow from "../sidedrawer/Merchandisebloc/MerchandiseBuyNow";
import MerchAddressOne from "../sidedrawer/Merchandisebloc/MerchAddressOne";
import MerchAddressTwo from "../sidedrawer/Merchandisebloc/MerchAddressTwo";
import MerchCart from "../sidedrawer/Merchandisebloc/MerchCart";

import InstituteOne from "../institutebloc/InstituteOne";
import InstituteTwo from "../institutebloc/InstituteTwo";

import NewsOne from "../newsbloc/NewsOne";
import NewsTwo from "../newsbloc/NewsTwo";

import About from "../sidedrawer/Aboutbloc/About";
import TermConditions from "../sidedrawer/Aboutbloc/TermConditions";
import PrivacyPolicy from "../sidedrawer/Aboutbloc/PrivacyPolicy";

import Profile from "../sidedrawer/Profilebloc/Profile";
import Followers from "../sidedrawer/Profilebloc/Followers"
import Profileedit from "../sidedrawer/Profilebloc/Profileedit"
import Autocomplete from "../Autocomplete";

import Setting from "../sidedrawer/Setting";

import Drawermenu from '../navigation/Drawermenu';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Icon } from "react-native-elements";


import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems,
  createNavigator
} from "react-navigation";

import { Container, Content, Header, Body } from "native-base";
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-community/async-storage";




const InstituteStack = createStackNavigator({
  InstituteOne: {
    screen: InstituteOne
  },
  InstituteTwo: {
    screen: InstituteTwo
  }
})

const TourStack = createStackNavigator({
  TourOne: {
    screen: TourOne,
  },
  TourTwo: {
    screen: TourTwo,
  }
})

const NewsStack = createStackNavigator({
  NewsOne: {
    screen: NewsOne
  },
  NewsTwo: {
    screen: NewsTwo
  }
})

const EventStack = createStackNavigator({
  EventOne: {
    screen: EventOne,
    navigationOptions: {
      header: null
    }
  },
  EventFilter: {
    screen: EventFilter,
    navigationOptions: {
      header: null
    }
  },
  EventTwo: {
    screen: EventTwo,
  }

})



const Home = createStackNavigator({
  
  ExploreOne: {
    screen: ExploreOne,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({padding:10}),
        headerRightContainerStyle:({padding:10}),
        headerRight:(
          <Icon
            name="bell"
            color="white"
            type="material-community"
            size={25}
          />
        ),
        headerLeft: (
          <Icon
            name="menu"
            type="entypo"
            color="white"
            size={40}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  },

  FeedOne: {
    screen: FeedOne,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({paddingLeft:2}),
        headerRightContainerStyle:({padding:10}),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Feed</Text>),
        headerLeft: (
          <MyBackTwo navigation={navigation} />
        )
      };
    }
  },

  FeedTwo: {
    screen: FeedTwo,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({paddingLeft:2}),
        headerRightContainerStyle:({padding:10}),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Feed</Text>),
        headerLeft: (<MyBackTwo navigation={navigation} />)
      };
    }
  },


  Tourbloc: {
    screen: TourStack,
    navigationOptions: {
      header: null
    }
  },

  Institutebloc:{
    screen: InstituteStack,
    navigationOptions: {
      header: null
    }
  },

  Newsbloc:{
    screen: NewsStack,
    navigationOptions: {
      header: null
    }
  },

  Eventbloc:{
    screen:EventStack,
    navigationOptions: {
      header: null,
    }
  }

});

const Bookmarks = createStackNavigator({
  BookmarksOne: {
    headerTitle: Bookmarks,
    screen: BookmarksOne,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="menu"
            type="entypo"
            color="coral"
            size={45}
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
});

const Offers = createStackNavigator({
  OffersOne: {
    headerTitle: Offers,
    screen: OffersOne,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="menu"
            type="entypo"
            color="coral"
            size={45}
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
});

// Home.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible,
//   };
// };

// Home.navigationOptions={
//   tabBarVisible: false
// }


const LandingTabNavigator = createBottomTabNavigator(
  {
    Home,
    Bookmarks,
    Offers,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "Home") {
          iconName = "home";
          iconType = "entypo";
        } else if (routeName === "Bookmarks") {
          iconName = "bookmark";
          iconType = "font-awesome";
        } else if (routeName === "Offers") {
          iconName = "tag";
          iconType = "font-awesome";
        }
        return (
          <Icon name={iconName} type={iconType} size={25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fdbd30",
      inactiveTintColor: "#bfbfbf",
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "white"
    },
  }
);


const FAQstack = createStackNavigator({
  FAQone: {
    screen: FAQ,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({padding:5, }),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>FAQ's</Text>),
        headerLeft: (
          <MyBackButton navigation={navigation} />
        )
      };
    }
  },
})

const Profilestack = createStackNavigator({
  Profileone: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({padding:5, }),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Profile</Text>),
        headerLeft: (
          <MyBackButton navigation={navigation} />
        )
      };
    }
  },
  Profiletwo: {
    screen: Followers,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({padding:5, }),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Followers</Text>),
        headerLeft: (
          <MyBackTwo navigation={navigation} />
        )
      };
    }
  },

  Profilethree:{ screen: Profileedit },

  Autocomplete:{ screen: Autocomplete }
})

const ReferStack = createStackNavigator({
  ReferScreen:{
    screen: Refer,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({paddingLeft:2}),
        headerRightContainerStyle:({padding:10}),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Refer and Earn</Text>),
        headerLeft: (
          <MyBackButton navigation={navigation} />
        )
      };
    }
  }
})

const PointsStack = createStackNavigator({
  PointsOne:{ screen: PointsOne },
  PointsTwo:{ screen: PointsTwo }

})

const AboutStack = createStackNavigator({
  AboutScreen:{
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({paddingLeft:2}),
        headerRightContainerStyle:({padding:10}),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>About Us</Text>),
        headerLeft: (
          <MyBackButton navigation={navigation} />
        )
      };
    }
  },
  TermsScreen:{
    screen: TermConditions,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({paddingLeft:2}),
        headerRightContainerStyle:({padding:10}),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Terms and Conditions</Text>),
        headerLeft: (
          <MyBackTwo navigation={navigation} />
        )
      };
    }
  },
  PrivacyScreen:{
    screen: PrivacyPolicy,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({paddingLeft:2}),
        headerRightContainerStyle:({padding:10}),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Privacy Policy</Text>),
        headerLeft: (
          <MyBackTwo navigation={navigation} />
        )
      };
    }
  }
})


const TransactionStack = createStackNavigator({
  MerchandiseOne: { 
    screen: MerchandiseOne,
    navigationOptions: { header: null } 
  },
  MerchandiseTwo: { 
    screen: MerchandiseTwo,
    navigationOptions: { header: null }
  },
  MerchandiseBuyNow: { 
    screen: MerchandiseBuyNow,
  },
  MerchAddressOne: {
    screen: MerchAddressOne,
  },
  MerchAddressTwo: {
    screen: MerchAddressTwo,
  },
  MerchCart: {
    screen: MerchCart,
  }
})

const AddressStack = createStackNavigator({
  AddressOne: { screen: AddressOne },
  AddressTwo: { screen: AddressTwo }
})

const WrapperStackTab = createStackNavigator({

  LandingTabNavigator: {
    screen: LandingTabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

const WIDTH = Dimensions.get('window').width;

const drawerConfig = {
  drawerWidth: WIDTH*0.83,
  contentComponent: ({navigation })=>{
    return(<Drawermenu navigation={navigation}/>)
  }
}

const LandingDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: WrapperStackTab },

    Profilebloc: { screen: Profilestack },

    LogOut: { screen: LogOut },

    Location: { screen: AddressStack },

    Transactions: { screen: TransactionStack },

    Points: { screen: PointsStack },

    ShareService: { screen: ShareService },

    Refer: { screen: ReferStack },

    Support: { screen: Support },

    FAQbloc: { screen: FAQstack },

    About: { screen: AboutStack },

    Feedback: { screen: Feedback },

    Setting: { screen: Setting }
  },
  drawerConfig
  
);


const AuthStack = createStackNavigator({
  Boarding: {
    screen: Boarding,
    navigationOptions: {
      header: null
    }
  },
  AuthScreen: {
    screen: AuthScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      header: null,
    }
  }
});


const AuthSwitchNavigator = createSwitchNavigator(
  {
    AuthLoad: { screen: AuthLoad },

    AuthBloc: { screen: AuthStack }, 

    Landingone: { screen: LandingDrawerNavigator }
  },
  {
    initialRouteName: "AuthLoad"
  }
);

export default createAppContainer(AuthSwitchNavigator);
