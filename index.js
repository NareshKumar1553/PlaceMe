/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavApp from './lib/NavApp';

AppRegistry.registerComponent(appName, () => NavApp);
