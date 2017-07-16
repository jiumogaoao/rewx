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
   constructor(props) {
       super(props);
       this.state = { page: 0 ,weiXingPop:false};
       this.style = StyleSheet.create({
         list:{
            flexDirection:'row',height:parseInt(82*w),width:parseInt(210*w),marginLeft:'auto',marginRight:'auto',borderBottomWidth:1,borderBottomColor:'#565658'
         },
         icon:{color:'#fff',fontSize:parseInt(28*w),lineHeight:parseInt(28*w),marginTop:parseInt(22*w),marginLeft:parseInt(10*w)},
         text:{color:'#fff',fontSize:parseInt(28*w),lineHeight:parseInt(28*w),marginLeft:parseInt(34*w),marginTop:parseInt(27*w)}
       })
     };
   render() {
      return (
          <View>
            <Icon name='shangjiao' style={{fontSize:parseInt(20*w),lineHeight:parseInt(20*w),left:parseInt(245*w),color:'#49494b'}}/>
            <View style={{width:parseInt(264*w),backgroundColor:'#49494b',top:-parseInt(5*w),borderRadius:parseInt(3*w)}}>
               <View style={this.style.list}>
                  <Icon name='qipao' style={this.style.icon}/>
                  <Text style={this.style.text}>发起群聊</Text>
               </View>
               <View style={this.style.list}>
                  <Icon name='jiahaoyou' style={this.style.icon}/>
                  <Text style={this.style.text}>添加好友</Text>
               </View>
               <View style={this.style.list}>
                  <Icon name='saoyisao' style={this.style.icon}/>
                  <Text style={this.style.text}>扫一扫</Text>
               </View>
               <View style={this.style.list}>
                  <Icon name='shoufukuan' style={this.style.icon}/>
                  <Text style={this.style.text}>收付款</Text>
               </View>
            </View>
          </View>
         );
   }
}

export default TopRightPop;