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
import Album from './view/Album';
import Password from './view/Password';
import Wallet from './view/Wallet';
import Qrcode from './view/Qrcode';
import Picture from './view/Picture';
import AddZone from './view/AddZone';
import Detail from './view/Detail';
import RedPackage from './view/RedPackage';
import Costs from './view/Costs';
import Collection from './view/Collection';
global.w = Dimensions.get('window').width/720;
global.h = Dimensions.get('window').height/720;
var navoption={
    headerTintColor: '#fff',headerStyle:{backgroundColor:"#000"},headerTitleStyle:{fontSize:parseInt(33*w)}
  }
const rewx = StackNavigator({
   Index: { screen: Index,navigationOptions:navoption},
   Info: { screen: Info,navigationOptions: navoption},
   Talk: { screen: Talk,navigationOptions: navoption},
   Zone: { screen: Zone,navigationOptions: navoption},
   MapV:{screen:MapV,navigationOptions: navoption},
   Album:{screen:Album,navigationOptions: navoption},
   Password:{screen:Password,navigationOptions: navoption},
   Wallet:{screen:Wallet,navigationOptions: navoption},
   Qrcode:{screen:Qrcode,navigationOptions: navoption},
   Picture:{screen:Picture,navigationOptions: navoption},
   AddZone:{screen:AddZone,navigationOptions: navoption},
   Detail:{screen:Detail,navigationOptions: navoption},
   RedPackage:{screen:RedPackage,navigationOptions: navoption},
   Costs:{screen:Costs,navigationOptions: navoption},
   AddressList:{screen:AddressList,navigationOptions: navoption},
   Collection:{screen:Collection,navigationOptions: navoption}
});

AppRegistry.registerComponent('rewx', () => rewx);
