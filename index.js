/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/navigation/Router';
import "react-native-gesture-handler"

AppRegistry.registerComponent(appName, () => Router);
