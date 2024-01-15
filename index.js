/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ProductList from './src/ProductList';

AppRegistry.registerComponent(appName, () => ProductList);
