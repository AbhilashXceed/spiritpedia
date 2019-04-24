import AuthScreen from "../AuthScreen";
import RegisterUser from "../RegisterUser";
import ExploreOne from "../ExploreOne";
import BookmarksOne from "../BookmarksOne";
import OffersOne from "../OffersOne";
import FeedOne from "../FeedOne";
import AuthLoad from "../AuthLoad";
import LogOut from "../LogOut";


import Transactions from "../sidedrawer/Transactions";
import Location from "../sidedrawer/Location";
import Share from "../sidedrawer/Share";
import Refer from "../sidedrawer/Refer";
import Support from "../sidedrawer/Support";
import About from "../sidedrawer/About";
import FAQ from "../sidedrawer/FAQ";
import Feedback from "../sidedrawer/Feedback";
import Points from "../sidedrawer/Points";
import profile from "../sidedrawer/profile";

import Drawermenu from '../navigation/Drawermenu';

import { Icon } from "react-native-elements";


import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";

import { Container, Content, Header, Body } from "native-base";
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-community/async-storage";



const Explore = createStackNavigator({
  ExploreOne: {
    screen: ExploreOne,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Explore",
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

const Feed = createStackNavigator({
  FeedOne: {
    headerTitle: Feed,
    screen: FeedOne,
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


const LandingTabNavigator = createBottomTabNavigator(
  {
    Explore,
    Bookmarks,
    Offers,
    Feed
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "Explore") {
          iconName = "appstore1";
          iconType = "antdesign";
        } else if (routeName === "Bookmarks") {
          iconName = "bookmark";
          iconType = "font-awesome";
        } else if (routeName === "Offers") {
          iconName = "price-tag";
          iconType = "entypo";
        } else if (routeName === "Feed") {
          iconName = "feed";
          iconType = "font-awesome";
        }
        return (
          <Icon name={iconName} type={iconType} size={20} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "coral",
      activeBackgroundColor: "#263238",
      inactiveBackgroundColor: "#263238"
    }
  }
);


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
    Home: {
      screen: WrapperStackTab,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="entypo" size={20} color="white" />
      }
    },

    profile: {
      screen: profile,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="entypo" size={20} color="white" />
      }
    },

    
    LogOut: {
      screen: LogOut,
      navigationOptions: {
        drawerIcon: <Icon name="power" type="feather" size={20} color="white" />
      }
    },
    Location: {
      screen: Location,
      navigationOptions: {
        drawerIcon: (
          <Icon name="location-pin" type="entypo" size={20} color="white" />
        )
      }
    },
    Transactions: {
      screen: Transactions,
      navigationOptions: {
        drawerIcon: (
          <Icon name="calculator" type="entypo" size={20} color="white" />
        )
      }
    },
    Points: {
      screen: Points,
      navigationOptions: {
        drawerIcon: <Icon name="wallet" type="entypo" size={20} color="white" />
      }
    },
    Share: {
      screen: Share,
      navigationOptions: {
        drawerIcon: <Icon name="share" type="entypo" size={20} color="white" />
      }
    },
    Refer: {
      screen: Refer,
      navigationOptions: {
        drawerIcon: <Icon name="credit" type="entypo" size={20} color="white" />
      }
    },
    Support: {
      screen: Support,
      navigationOptions: {
        drawerIcon: (
          <Icon name="support" type="font-awesome" size={20} color="white" />
        )
      }
    },
    FAQ: {
      screen: FAQ,
      navigationOptions: {
        drawerIcon: (
          <Icon
            name="questioncircle"
            type="antdesign"
            size={20}
            color="white"
          />
        )
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        drawerIcon: (
          <Icon name="info" type="font-awesome" size={20} color="white" />
        )
      }
    },
    Feedback: {
      screen: Feedback,
      navigationOptions: {
        drawerIcon: <Icon name="chat" type="entypo" size={20} color="white" />
      }
    }
  },
  drawerConfig
  // {
  //   initialRouteName: "Home",
  //   drawerOpenRoute: "DrawerOpen",
  //   drawerCloseRoute: "DrawerClose",
  //   drawerToggleRoute: "DrawerToggle",

  //   contentOptions: {
  //     activeTintColor: "white",
  //     inactiveTintColor: "white",
  //     activeBackgroundColor: "#ff9800"
  //   }
  // }
);


const AuthStack = createStackNavigator({
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
      title: "Register User",
      headerStyle: { backgroundColor: "orange" },
      headerTintColor: "white"
    }
  }
});


const AuthSwitchNavigator = createSwitchNavigator(
  {
    AuthLoad: {
      screen: AuthLoad
    },
    AuthScreen: {
      screen: AuthStack
    },
    Landingone: {
      screen: LandingDrawerNavigator
    }
  },
  {
    initialRouteName: "AuthLoad"
  }
);

export default createAppContainer(AuthSwitchNavigator);
