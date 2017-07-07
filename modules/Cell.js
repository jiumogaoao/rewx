import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Cell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:parseInt(60*w),borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              {this.props.other?this.props.other:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: parseInt(40*w), height: parseInt(40*w),marginTop:parseInt(10*w),marginLeft:parseInt(10*w)}} />}
              <View style={{flex:1}}>
                <Text style={{marginLeft:parseInt(10*w),fontSize:parseInt(30*w),marginTop:parseInt(7*w)}}>{this.props.name}</Text>
              </View>
              {this.props.dsc?<Text style={{textAlign:"left",marginTop:parseInt(14*w),fontSize:parseInt(20*w)}}>{this.props.dsc}</Text>:null}
              {this.props.deg?<Icon name="jiao" style={{marginRight:parseInt(20*w),fontSize:parseInt(25*w),marginTop:parseInt(14*w),lineHeight:parseInt(25*w)}}/>:null}
            </View>
         );
   }
}

export default Cell;