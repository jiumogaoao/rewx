import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Cell extends Component {
   
   render() {
      return (
            <View style={{backgroundColor:"#fff"}}>
              <TouchableOpacity onPress={this.props.go}>
              <View style={{flexDirection:'row',height:parseInt(84*w),borderBottomWidth:1,borderBottomColor:"#e2e2e2",width:parseInt(700*w),marginLeft:'auto'}}>
                {this.props.other?this.props.other:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                 style={{width: parseInt(43*w), height: parseInt(43*w),marginTop:parseInt(20*w),marginLeft:parseInt(3*w)}} />}
                <View style={{flex:1}}>
                  <Text style={{marginLeft:parseInt(38*w),fontSize:parseInt(30*w),marginTop:parseInt(28*w),color:'#000'}}>{this.props.name}</Text>
                </View>
                {this.props.dsc?<Text style={{textAlign:"left",marginTop:parseInt(25*w),fontSize:parseInt(24*w)}}>{this.props.dsc}</Text>:null}
                {this.props.deg?<Icon name="jiao" style={{marginRight:parseInt(30*w),fontSize:parseInt(24*w),marginTop:parseInt(28*w),lineHeight:parseInt(25*w)}}/>:null}
              </View>
              </TouchableOpacity>
            </View>
         );
   }
}

export default Cell;