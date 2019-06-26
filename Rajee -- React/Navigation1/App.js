/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);

// Start a App
Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: "awesome-places.AuthScreen"
        }
      }],
      options: {
        topBar: {
          title: {
            text: "Login"
          }
        }
      }
    }
  }
 });


//screen: {
 // screen: "awesome-places.AuthScreen",
 // title: "Login"