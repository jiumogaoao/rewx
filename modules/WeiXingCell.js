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
          <TouchableHighlight onPress={() => this.props.go(this.props.id)}>
            <View style={{flexDirection:'row',height:parseInt(130*w),borderBottomWidth:1,borderBottomColor:"#dfdfdf",backgroundColor:"#fff"}}>
              <Image source={{uri: this.props.img}}
       style={{width: parseInt(96*w), height: parseInt(96*w),marginTop:parseInt(17*w),marginLeft:parseInt(19*w),borderRadius:parseInt(5*w)}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:parseInt(20*w),fontSize:parseInt(30*w),marginTop:parseInt(28*w),color:'#000'}}>{this.props.name}</Text>
                <Text style={{marginTop:parseInt(5*w),marginLeft:parseInt(20*w),fontSize:parseInt(24*w),color:'#9a9a9a'}}>{this.props.dsc}</Text>
              </View>
              <View>
                <Text style={{textAlign:'right',marginTop:parseInt(27*w),marginRight:parseInt(22*w),fontSize:parseInt(22*w),color:'#b0b0b0'}}>{this.props.time}</Text>
                <Icon name={this.props.state} style={{textAlign:'right',marginRight:parseInt(22*w),fontSize:parseInt(24*w),lineHeight:parseInt(24*w),marginTop:parseInt(10*w),color:'#dadada'}}/>
              </View>
            </View>
          </TouchableHighlight>
         );
   }
}

export default WeiXingCell;