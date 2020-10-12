import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen312133Navigator from '../features/BlankScreen312133/navigator';
import BlankScreen212115Navigator from '../features/BlankScreen212115/navigator';
import BlankScreen112110Navigator from '../features/BlankScreen112110/navigator';
import BlankScreen012109Navigator from '../features/BlankScreen012109/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen312133: { screen: BlankScreen312133Navigator },
BlankScreen212115: { screen: BlankScreen212115Navigator },
BlankScreen112110: { screen: BlankScreen112110Navigator },
BlankScreen012109: { screen: BlankScreen012109Navigator },

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
