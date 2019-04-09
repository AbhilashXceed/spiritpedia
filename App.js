import AuthScreen from './pages/AuthScreen'
import RegisterUser from './pages/RegisterUser'
import ExploreOne from './pages/ExploreOne'
import BookmarksOne from './pages/BookmarksOne'
import OffersOne from './pages/OffersOne'
import FeedOne from './pages/FeedOne'
import AuthLoad from './pages/AuthLoad';

import { 
  createStackNavigator, 
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator 
} from "react-navigation";

import { View } from "react-native"
import { Icon } from "react-native-elements";
import React from "react";

const Explore = createStackNavigator({
  ExploreOne: {
    screen: ExploreOne,
    headerTitle: Explore,
    navigationOptions:({navigation})=>{
      return{
        headerLeft:
        <Icon 
          name="menu" 
          type="entypo" 
          color="coral" 
          size={45}
          style={{paddingLeft:15}}
          onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
})

const Bookmarks = createStackNavigator({
  BookmarksOne: {
    headerTitle: Bookmarks,
    screen: BookmarksOne,
    navigationOptions:({navigation})=>{
      return{
        headerLeft:
        <Icon 
          name="menu" 
          type="entypo" 
          color="coral" 
          size={45}
          style={{paddingLeft:15}}
          onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
})

const Offers = createStackNavigator({
  OffersOne: {
    headerTitle: Offers,
    screen: OffersOne,
    navigationOptions:({navigation})=>{
      return{
        headerLeft:
        <Icon 
          name="menu" 
          type="entypo" 
          color="coral" 
          size={45}
          style={{paddingLeft:15}}
          onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
})

const Feed = createStackNavigator({
  FeedOne: {
    headerTitle: Feed,
    screen: FeedOne,
    navigationOptions:({navigation})=>{
      return{
        headerLeft:
        <Icon 
          name="menu" 
          type="entypo" 
          color="coral" 
          size={45}
          style={{paddingLeft:15}}
          onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
})


const LandingTabNavigator = createBottomTabNavigator({
  Explore,
  Bookmarks,
  Offers,
  Feed,
},{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      header: null,
      headerTitle: routeName
    }
  }
})

const WrapperStackTab = createStackNavigator({
  LandingTabNavigator: LandingTabNavigator
},{
  defaultNavigationOptions:({navigation})=>{
    return {
      headerLeft:(
        <Icon 
        name="menu" 
        type="entypo" 
        color="coral" 
        size={45}
        style={{paddingLeft:15}}
        onPress={()=>navigation.openDrawer()}/>
      )
    }
  }
})


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
      title: 'Register User',
      headerStyle: { backgroundColor: 'orange' },
      headerTintColor: 'white',
    },
  }

})

const LandingDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: WrapperStackTab
  }
})

const AuthSwitchNavigator = createSwitchNavigator({
  AuthLoad: {
    screen: AuthLoad
  },
  AuthScreen: {
    screen: AuthStack
  },
  Landingone: {
    screen: LandingDrawerNavigator
  },
}, {
  initialRouteName: 'AuthLoad',
})

export default createAppContainer(AuthSwitchNavigator);
