import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class WeiXingCell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:100,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 80, height: 80,marginTop:10,marginLeft:10}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:20,marginTop:10}}>文字</Text>
                <Text style={{marginTop:10,marginLeft:10}}>内容</Text>
              </View>
              <View style={{width:100}}>
                <Text style={{textAlign:'center',marginTop:10}}>08:48</Text>
                <Icon name="fujinderen"/>
              </View>
            </View>
         );
   }
}

export default WeiXingCell;