import AuthScreen from './pages/AuthScreen'
import RegisterUser from './pages/RegisterUser'
import ExploreOne from './pages/ExploreOne'
import BookmarksOne from './pages/BookmarksOne'
import OffersOne from './pages/OffersOne'
import FeedOne from './pages/FeedOne'
import AuthLoad from './pages/AuthLoad';
import LogOut from './pages/LogOut'

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
    // headerTitle: Explore,
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
},
// {
//   navigationOptions:({navigation})=>{
//     const {routeName} = navigation.state.routes[navigation.state.index]
//     return{
//       header: null,
//       headerTitle: routeName
//     }
//   }
// }
{
  defaultNavigationOptions: ({ navigation })=>({
    tabBarIcon: ({ focused, horizontal, tintColor})=> {
      const { routeName } = navigation.state;
      let iconName;
      let iconType;
      if (routeName === 'Explore') {
        iconName = 'appstore1';
        iconType = 'antdesign';
      } else if (routeName === 'Bookmarks') {
        iconName = 'bookmark';
        iconType = 'font-awesome';
      } else if (routeName === 'Offers') {
        iconName = 'price-tag';
        iconType = 'entypo';
      } else if (routeName === 'Feed') {
        iconName = 'feed';
        iconType = 'font-awesome';
      }
      return(<Icon name={iconName} type={iconType} size={20} color={tintColor}/>)
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'coral',
    activeBackgroundColor: '#263238',
    inactiveBackgroundColor: '#263238'
  }
}
)

const WrapperStackTab = createStackNavigator({
  LandingTabNavigator: {
    screen: LandingTabNavigator,
    navigationOptions: {
      header: null
    }
  }
  
}
// {
//   defaultNavigationOptions:({navigation})=>{
//     return {
//       headerLeft:(
//         <Icon 
//         name="menu" 
//         type="entypo" 
//         color="coral" 
//         size={45}
//         style={{paddingLeft:15}}
//         onPress={()=>navigation.openDrawer()}/>
//       )
//     }
//   }
// }
)


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
  },
  LogOut: {
    screen: LogOut
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
