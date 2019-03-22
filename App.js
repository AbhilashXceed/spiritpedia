import HomeScreen from './pages/HomeScreen'

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default createAppContainer(AppNavigator);
