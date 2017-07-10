import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class TopRightPop extends Component {
   
   render() {
      return (
          <View>
            <Icon name='shangjiao' style={{fontSize:20,lineHeight:20,left:170}}/>
            <View style={{width:200,backgroundColor:'#999',top:-5}}>
               <View style={{flexDirection:'row',height:40}}>
                  <Icon name='qipao' style={{color:'#fff',fontSize:20,lineHeight:23,marginLeft:10}}/>
                  <Text style={{color:'#fff',fontSize:20,lineHeight:20,marginLeft:10,marginTop:5}}>发起群聊</Text>
               </View>
               <View style={{flexDirection:'row',height:40}}>
                  <Icon name='jiahaoyou' style={{color:'#fff',fontSize:20,lineHeight:23,marginLeft:10}}/>
                  <Text style={{color:'#fff',fontSize:20,lineHeight:20,marginLeft:10,marginTop:5}}>添加好友</Text>
               </View>
               <View style={{flexDirection:'row',height:40}}>
                  <Icon name='saoyisao' style={{color:'#fff',fontSize:20,lineHeight:23,marginLeft:10}}/>
                  <Text style={{color:'#fff',fontSize:20,lineHeight:20,marginLeft:10,marginTop:5}}>扫一扫</Text>
               </View>
               <View style={{flexDirection:'row',height:40}}>
                  <Icon name='shoufukuan' style={{color:'#fff',fontSize:20,lineHeight:23,marginLeft:10}}/>
                  <Text style={{color:'#fff',fontSize:20,lineHeight:20,marginLeft:10,marginTop:5}}>收付款</Text>
               </View>
            </View>
          </View>
         );
   }
}

export default TopRightPop;