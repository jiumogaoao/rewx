/**
 * Created by gaozhiqiang on 2017/5/9.
 */
import React from 'react';
import {
   AppRegistry,
   Dimensions
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
global.w = Dimensions.get('window').width/720;
var navoption={
    headerTintColor: '#fff',headerStyle:{backgroundColor:"#000"},headerTitleStyle:{fontSize:30}
  }
const rewx = StackNavigator({
   Index: { screen: Index,navigationOptions:navoption},
   Info: { screen: Info,navigationOptions: navoption},
   Talk: { screen: Talk,navigationOptions: navoption},
   Zone: { screen: Zone,navigationOptions: navoption},
   MapV:{screen:MapV,navigationOptions: navoption}
});

AppRegistry.registerComponent('rewx', () => rewx);
