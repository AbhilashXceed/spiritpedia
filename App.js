import HomeScreen from './pages/HomeScreen'
import RegisterUser from './pages/RegisterUser'
import LandingScreen from './pages/LandingScreen'
import PushService from './pages/PushService'

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
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
  },
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      header: null
    }
  },
  PushService: {
    screen: PushService,
    navigationOptions: {
      headerStyle: { backgroundColor: 'skyblue' }
    }
  }
});

export default createAppContainer(AppNavigator);
