import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   FlatList,
   StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Collection extends Component {
  constructor(props) {
            //加载父类方法,不可省略
            super(props);
            //设置初始的状态
            this.state = {

            };
        }

  static navigationOptions = ({ navigation }) => {
      return {
         title: '收藏'
      };
   };

   render() {
    
      return (
            <FlatList data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
  renderItem={({item}) => <View style={{height:parseInt(418*w),width:'100%',backgroundColor:'#fff',marginTop:parseInt(10*w)}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',marginLeft:parseInt(38*w),marginTop:parseInt(37*w)}}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:parseInt(48*w),height:parseInt(48*w),borderRadius:parseInt(48*w)}}/>
        <Text style={{marginLeft:parseInt(10*w),lineHeight:parseInt(35*w)}}>某人</Text>
      </View>
      <View style={{marginTop:parseInt(50*w),marginRight:parseInt(40*w)}}><Text>2016/8/9</Text></View>
    </View>
    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:parseInt(443*w),height:parseInt(265*w),marginTop:parseInt(27*w),marginLeft:parseInt(38*w)}}/>
  </View>}/>
         );
   }
}

export default Collection;