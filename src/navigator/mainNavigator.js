import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile153044Navigator from '../features/UserProfile153044/navigator';
import Settings153043Navigator from '../features/Settings153043/navigator';
import Settings153041Navigator from '../features/Settings153041/navigator';
import SignIn2153039Navigator from '../features/SignIn2153039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile153044: { screen: UserProfile153044Navigator },
Settings153043: { screen: Settings153043Navigator },
Settings153041: { screen: Settings153041Navigator },
SignIn2153039: { screen: SignIn2153039Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
