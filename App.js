import HomeScreen from './pages/HomeScreen'
import RegisterUser from './pages/RegisterUser'

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
});

export default createAppContainer(AppNavigator);
