import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class PeopleCell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:120,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 100, height: 100,marginTop:10,marginLeft:10}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:30,marginTop:10}}>文字</Text>
                <Text style={{marginTop:15,marginLeft:10}}>内容</Text>
              </View>
              <Icon name="erweima"/>
              <Icon name="jiao"/>
            </View>
         );
   }
}

export default PeopleCell;