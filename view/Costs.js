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
class Costs extends Component {
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
         title: '转账'
      };
   };

   render() {
    
      return (
            <View>
            	<View style={{width:parseInt(660*w),backgroundColor:'#fff',marginLeft:'auto',marginRight:'auto',marginTop:parseInt(40*w),paddingBottom:parseInt(75*w)}}>
                <Image style={{width:parseInt(88*w),height:parseInt(88*w),marginLeft:'auto',marginRight:'auto',marginTop:parseInt(30*w)}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
                <Text style={{fontSize:parseInt(22*w),color:'#898989',textAlign:'center',marginTop:parseInt(30*w)}}>某人</Text>
                <View style={{width:parseInt(548*w),marginLeft:'auto',marginRight:'auto',marginTop:parseInt(80*w)}}>
                  <Text style={{fontSize:parseInt(25*w)}}>转账金额</Text>
                  <View style={{borderBottomWidth:1,borderBottomColor:'#e9e9e9'}}>
                    <TextInput value={this.state.text}  placeholder="0.00" keyboardType="numeric"
                  style={{height: parseInt(122*w),width:parseInt(548*w),backgroundColor:'#fff',marginLeft:'auto',marginRight:'auto',borderRadius:parseInt(5*w),textAlign:'center'}} 
                 />
                    <View style={{position:'absolute',top:parseInt(10*w),left:parseInt(10*w)}}>
                      <Text style={{fontSize:parseInt(40*w)}}>￥</Text>
                    </View>
                  </View>
                  <Text style={{fontSize:parseInt(25*w),marginTop:parseInt(21*w)}}>添加转账说明</Text>
                  <View style={{width:parseInt(548*w),height:parseInt(90*w),backgroundColor:'#52e252',borderWidth:1,borderColor:'#40be36',borderRadius:parseInt(10*w),marginTop:parseInt(60*w)}}>
                  <Text style={{fontSize:parseInt(40*w),textAlign:'center',color:'#fff',lineHeight:parseInt(70*w)}}>转账</Text>
                  </View>
                </View>
                
              </View>
              
            </View>
         );
   }
}

export default Costs;