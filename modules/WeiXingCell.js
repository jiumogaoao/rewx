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
            <View style={{flexDirection:'row',height:parseInt(100*w),borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              <Image source={{uri: this.props.img}}
       style={{width: parseInt(80*w), height: parseInt(80*w),marginTop:parseInt(10*w),marginLeft:parseInt(10*w)}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:parseInt(10*w),fontSize:parseInt(25*w),marginTop:parseInt(10*w)}}>{this.props.name}</Text>
                <Text style={{marginTop:parseInt(10*w),marginLeft:parseInt(10*w)}}>{this.props.dsc}</Text>
              </View>
              <View>
                <Text style={{textAlign:'right',marginTop:parseInt(10*w),marginRight:parseInt(20*w)}}>{this.props.time}</Text>
                <Icon name={this.props.state} style={{textAlign:'right',marginRight:parseInt(20*w),fontSize:parseInt(15*w),lineHeight:parseInt(15*w),marginTop:parseInt(10*w)}}/>
              </View>
            </View>
          </TouchableHighlight>
         );
   }
}

export default WeiXingCell;