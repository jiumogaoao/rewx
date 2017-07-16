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
            <View style={{flexDirection:'row',height:parseInt(168*w),borderBottomWidth:1,borderBottomColor:"#e6e5eb",backgroundColor:"#fff"}}>
              <Image source={{uri: this.props.img}}
       style={{width: parseInt(124*w), height: parseInt(124*w),marginTop:parseInt(20*w),marginLeft:parseInt(26*w)}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:parseInt(23*w),fontSize:parseInt(30*w),marginTop:parseInt(43*w),color:'#000'}}>{this.props.name}</Text>
                <Text style={{marginTop:parseInt(24*w),marginLeft:parseInt(23*w),color:'#000',fontSize:parseInt(24*w)}}>{this.props.dsc}</Text>
              </View>
              <Icon name="erweima" style={{fontSize:parseInt(25*w),marginRight:parseInt(10*w),marginTop:parseInt(30*w)}}/>
              <Icon name="jiao" style={{fontSize:parseInt(25*w),lineHeight:parseInt(25*w),marginRight:parseInt(30*w),marginTop:parseInt(70*w)}}/>
            </View>
         );
   }
}

export default PeopleCell;