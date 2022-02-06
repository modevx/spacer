import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Screen_CameraPhotos from "./app/screens/Screen_CameraPhotos";
import Screen_Home from "./app/screens/Screen_Home";
import Screen_Rover from "./app/screens/Screen_Rover";
/**
 * TODO: remove HomeScreen header
 */

const AppStackNavigator = createStackNavigator(
  {
    Home: { screen: Screen_Home },
    Rover: { screen: Screen_Rover },
    CameraPhotos: { screen: Screen_CameraPhotos },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ROVERCAM",
    },
  }
);

export default createAppContainer(AppStackNavigator);
