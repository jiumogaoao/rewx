/**
 * Created by gaozhiqiang on 2017/5/9.
 */
import React from 'react';
import {
   AppRegistry
} from 'react-native';
import { TabNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import Index from './view/Index';
import AddressList from './view/AddressList';
import Found from './view/Found';
import Mine from './view/Mine';
import Info from './view/Info';
import Talk from './view/Talk';
import Zone from './view/Zone';
import MapV from './view/MapV';
const rewx = StackNavigator({
   Index: { screen: Index },
   Info: { screen: Info },
   Talk: { screen: Talk },
   Zone: { screen: Zone },
   MapV:{screen:MapV}
});

AppRegistry.registerComponent('rewx', () => rewx);
