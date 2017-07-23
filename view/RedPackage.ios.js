import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   SectionList,
   StatusBar,
   TextInput,
   Button
} from 'react-native';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
class RedPackage extends Component {
  constructor(props) {
            //加载父类方法,不可省略
            super(props);
            //设置初始的状态
            this.state = {
            	text:'0.00'
            };
        }

  static navigationOptions = ({ navigation }) => {
      return {
         title: '红包'
      };
   };

   render() {
    
      return (
            <View>
            	<View style={{marginTop:parseInt(80*w)}}>
            		<TextInput value={this.state.text}  placeholder="0.00" keyboardType="numeric"
                  style={{height: parseInt(103*w),width:parseInt(660*w),backgroundColor:'#fff',marginLeft:'auto',marginRight:'auto',borderWidth:1,borderColor:'#e3e3e5',borderRadius:parseInt(5*w),textAlign:'center'}} underlineColorAndroid='transparent' 
                 />
                 <View style={{position:'absolute',top:parseInt(30*w),left:parseInt(50*w),zIndex:3}}>
                 	<Text style={{fontSize:parseInt(28*w),
            backgroundColor:'transparent'}}>金额</Text>
                 </View>
                 <View style={{position:'absolute',top:parseInt(30*w),right:parseInt(50*w),zIndex:3}}>
                 	<Text style={{fontSize:parseInt(28*w),
            backgroundColor:'transparent'}}>元</Text>
                 </View>
            	</View>
            	<View>
            		<TextInput multiline={true} placeholder="恭喜发财，大吉大利"
                  style={{height: parseInt(135*w),width:parseInt(660*w),backgroundColor:'#fff',marginLeft:'auto',marginRight:'auto',marginTop:parseInt(80*w),borderWidth:1,borderColor:'#e3e3e5',borderRadius:parseInt(5*w)}} underlineColorAndroid='transparent' 
                 />
            	</View>
            	<View style={{marginTop:parseInt(80*w),flexDirection:'row',justifyContent:'center'}}>
            		<Text style={{fontSize:parseInt(20*w)}}>￥</Text>
            		<Text style={{fontSize:parseInt(40*w)}}>{this.state.text}</Text>
            	</View>
            	<View style={{marginTop:parseInt(80*w),width:parseInt(547*w),height:parseInt(90*w),marginLeft:'auto',marginRight:'auto',backgroundColor:'#ed390c',borderRadius:parseInt(10*w)}}>
            		<Text style={{color:'#fff',fontSize:parseInt(30*w),textAlign:'center',lineHeight:parseInt(85*w),
            backgroundColor:'transparent'}}>塞进红包</Text>
            	</View>
            </View>
         );
   }
}

export default RedPackage;