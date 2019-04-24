import AuthScreen from "./pages/AuthScreen";
import RegisterUser from "./pages/RegisterUser";
import ExploreOne from "./pages/ExploreOne";
import BookmarksOne from "./pages/BookmarksOne";
import OffersOne from "./pages/OffersOne";
import FeedOne from "./pages/FeedOne";
import AuthLoad from "./pages/AuthLoad";
import LogOut from "./pages/LogOut";

import Transactions from "./pages/sidedrawer/Transactions";
import Location from "./pages/sidedrawer/Location";
import Share from "./pages/sidedrawer/Share";
import Refer from "./pages/sidedrawer/Refer";
import Support from "./pages/sidedrawer/Support";
import About from "./pages/sidedrawer/About";
import FAQ from "./pages/sidedrawer/FAQ";
import Feedback from "./pages/sidedrawer/Feedback";
import Points from "./pages/sidedrawer/Points";
import profile from "./pages/sidedrawer/profile";


import AuthSwitchNavigator from "./pages/navigation/Authswitch";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";


import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default class App extends React.Component {
  render() {
    return <AuthSwitchNavigator />
  }
}

const styles = StyleSheet.create({
  drawerImage: {}
});
