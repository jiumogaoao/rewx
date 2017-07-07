import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class AddressCell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:parseInt(80*w),borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              {this.props.other?this.props.other:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: parseInt(60*w), height: parseInt(60*w),marginTop:parseInt(10*w),marginLeft:parseInt(10*w)}} />}
              <View style={{flex:1}}>
                <Text style={{marginLeft:parseInt(10*w),fontSize:parseInt(30*w),marginTop:parseInt(16*w)}}>{this.props.name}</Text>
              </View>
            </View>
         );
   }
}

export default AddressCell;