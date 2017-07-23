import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class AddressCell extends Component {
   
   render() {
      return (
            <View style={{backgroundColor:"#fff"}}>
              <TouchableOpacity onPress={()=>this.props.p()}>
              <View style={{flexDirection:'row',height:parseInt(108*w),width:parseInt(700*w),marginLeft:'auto',borderBottomWidth:1,borderBottomColor:"#dfdfdf"}}>
                {this.props.other?this.props.other:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                  style={{width: parseInt(68*w), height: parseInt(68*w),marginTop:parseInt(18*w),marginLeft:parseInt(10*w)}} />}
                <View style={{flex:1}}>
                  <Text style={{marginLeft:parseInt(20*w),fontSize:parseInt(28*w),marginTop:parseInt(30*w),color:'#000'}}>{this.props.name}</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
         );
   }
}

export default AddressCell;