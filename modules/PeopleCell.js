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
            <View style={{flexDirection:'row',height:parseInt(120*w),borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              <Image source={{uri: this.props.img}}
       style={{width: parseInt(100*w), height: parseInt(100*w),marginTop:parseInt(10*w),marginLeft:parseInt(10*w)}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:parseInt(10*w),fontSize:parseInt(30*w),marginTop:parseInt(10*w)}}>{this.props.name}</Text>
                <Text style={{marginTop:parseInt(15*w),marginLeft:parseInt(10*w)}}>{this.props.dsc}</Text>
              </View>
              <Icon name="erweima" style={{fontSize:parseInt(25*w),marginRight:parseInt(10*w)}}/>
              <Icon name="jiao" style={{fontSize:parseInt(25*w),lineHeight:parseInt(25*w),marginRight:parseInt(20*w),marginTop:parseInt(40*w)}}/>
            </View>
         );
   }
}

export default PeopleCell;