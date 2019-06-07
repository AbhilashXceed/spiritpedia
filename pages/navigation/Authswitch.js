import AuthScreen from "../AuthScreen";
import RegisterUser from "../RegisterUser";
import ExploreOne from "../ExploreOne";
import BookmarksOne from "../BookmarksOne";
import OffersOne from "../OffersOne";
import FeedOne from "../FeedOne";
import AuthLoad from "../AuthLoad";
import LogOut from "../LogOut";
import Boarding from "../Boarding";



import Transactions from "../sidedrawer/Transactions";
import Location from "../sidedrawer/Location";
import ShareService from "../sidedrawer/ShareService";
import Refer from "../sidedrawer/Refer";
import Support from "../sidedrawer/Support";
import About from "../sidedrawer/About";
import FAQ from "../sidedrawer/FAQblock/FAQ";
import FAQanswer from "../sidedrawer/FAQblock/FAQanswer";
import Feedback from "../sidedrawer/Feedback";
import Points from "../sidedrawer/Points";
import Profile from "../sidedrawer/Profile";
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
  DrawerItems
} from "react-navigation";

import { Container, Content, Header, Body } from "native-base";
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-community/async-storage";




const Home = createStackNavigator({
  
  ExploreOne: {
    screen: ExploreOne,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30'}),
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
    screen: FeedOne,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeft: (
          <Icon
            name="menu"
            type="entypo"
            color="white"
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
    Home,
    Feed,
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
        } else if (routeName === "Feed") {
          iconName = "search";
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
    }
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
          <Icon
            name="chevron-left"
            type="feather"
            color="white"
            size={wp('10%')}
            // onPress={() => this.props.navigation.navigate('Landingone')}
          />
        )
      };
    }
  },
  
  FAQtwo: {
    screen: FAQanswer,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
        headerLeftContainerStyle:({padding:5, }),
        headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>FAQ's</Text>),
        headerLeft: (
          <Icon
            name="chevron-left"
            type="feather"
            color="white"
            size={wp('10%')}
            // onPress={() => this.props.navigation.navigate('FAQone')}
          />
        )
      };
    }
  }

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
    Home: {
      screen: WrapperStackTab,
      // navigationOptions: {
      //   drawerIcon: <Icon name="home" type="entypo" size={20} color="white" />
      // }
    },

    Profile: {
      screen: Profile,
      
    },

    LogOut: {
      screen: LogOut,
      
    },
    Location: {
      screen: Location,
      
    },
    Transactions: {
      screen: Transactions,
      
    },
    Points: {
      screen: Points,
      
    },
    ShareService: {
      screen: ShareService,
      
    },
    Refer: {
      screen: Refer,
      
    },
    Support: {
      screen: Support,
      
    },
    FAQbloc: {
      screen: FAQstack,
    
    },
    About: {
      screen: About,
      
    },
    Feedback: {
      screen: Feedback,
      
    },
    Setting: {
      screen: Setting,
    }
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
    AuthLoad: {
      screen: AuthLoad
    },
    AuthBloc: {
      screen: AuthStack
    },
    Landingone: {
      screen: LandingDrawerNavigator
    }
  },
  {
    initialRouteName: "AuthBloc"
  }
);

export default createAppContainer(AuthSwitchNavigator);
