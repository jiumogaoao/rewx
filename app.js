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

const rewx = StackNavigator({
   Index: { screen: Index },
   AddressList: { screen: AddressList },
   Found:{screen:Found},
   Mine:{screen:Mine},
   Info: { screen: Info },
   Talk: { screen: Talk },
   Zone: { screen: Zone }
});

AppRegistry.registerComponent('rewx', () => rewx);
