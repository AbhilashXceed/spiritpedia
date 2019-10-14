import AuthScreen from "./pages/AuthScreen";
import RegisterUser from "./pages/RegisterUser";
import ExploreOne from "./pages/ExploreOne";
import BookmarksOne from "./pages/BookmarksOne";
import OffersOne from "./pages/OffersOne";

import AuthLoad from "./pages/AuthLoad";
import LogOut from "./pages/LogOut";

import Refer from "./pages/sidedrawer/Refer";
import Support from "./pages/sidedrawer/Support";
import Feedback from "./pages/sidedrawer/Feedback";
import Points from "./pages/sidedrawer/Points";


import AuthSwitchNavigator from "./pages/navigation/Authswitch";

import React from "react";

export default class App extends React.Component {
  render() {
    return <AuthSwitchNavigator />
  }
}

