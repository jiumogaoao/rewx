import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   FlatList,
   TouchableOpacity,
   PanResponder,
   StatusBar
} from 'react-native';
import Mimasuo from '../svg/Mimasuo';
class Password extends Component {
  constructor(props) {
            //加载父类方法,不可省略
            super(props);
            //设置初始的状态
            this.state = {
              a1:false,
              a2:false,
              a3:false,
              a4:false,
              a5:false,
              a6:false,
              a7:false,
              a8:false,
              a9:false,
              a3a5:false,
              a5a7:false,
              a1a5:false,
              a5a9:false,
              a3a6:false,
              a6a9:false,
              a8a9:false,
              a7a8:false,
              a4a7:false,
              a1a4:false,
              a1a2:false,
              a2a3:false,
              a2a5:false,
              a5a8:false,
              a5a6:false,
              a4a5:false,
              a2a4:false,
              a4a8:false,
              a6a8:false,
              a2a6:false,
              password:[],
              collect:true
            };
        }
  drawManage(name,can){
    if(this.state['a'+name]||(this.state.password.length&&!can.some((value)=>{return value==this.state.password[this.state.password.length-1]}))){
        return;
      }else{
        let obj={}
        obj['a'+name]=true;
        if(this.state.password.length&&name<this.state.password[this.state.password.length-1]){
          obj['a'+name+'a'+this.state.password[this.state.password.length-1]]=true;
        }else if(this.state.password.length&&name>this.state.password[this.state.password.length-1]){
          obj['a'+this.state.password[this.state.password.length-1]+'a'+name]=true;
        }
        this.state.password.push(name)
        this.setState(obj)
      }
  }
  dragManage(x,y){
    if((y>=359&&y<=474)&&(x>=106&&x<=218)){
      this.drawManage(1,[2,4,5])
    }else if((y>=359&&y<=474)&&(x>=301&&x<=416)){
      this.drawManage(2,[1,3,4,5,6])
    }else if((y>=359&&y<=474)&&(x>=499&&x<=613)){
      this.drawManage(3,[2,5,6])
    }else if((y>=558&&y<=675)&&(x>=106&&x<=218)){
      this.drawManage(4,[1,2,5,7,8])
    }else if((y>=558&&y<=675)&&(x>=301&&x<=416)){
      this.drawManage(5,[1,2,3,4,6,7,8,9])
    }else if((y>=558&&y<=675)&&(x>=499&&x<=613)){
      this.drawManage(6,[2,3,5,8,9])
    }else if((y>=752&&y<=886)&&(x>=106&&x<=218)){
      this.drawManage(7,[4,5,8])
    }else if((y>=752&&y<=886)&&(x>=301&&x<=416)){
      this.drawManage(8,[4,5,6,7,9])
    }else if((y>=752&&y<=886)&&(x>=499&&x<=613)){
      this.drawManage(9,[5,6,8])
    }
  }
  static navigationOptions = ({ navigation }) => {
      return {
         title: '手势密码'
      };
   };
   componentWillMount(){
          this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
              // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

              // gestureState.{x,y} 现在会被设置为0
              this.dragManage(gestureState.x0/w,gestureState.y0/w)
            },
            onPanResponderMove: (evt, gestureState) => {
              // 最近一次的移动距离为gestureState.move{X,Y}

              // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
              this.dragManage(gestureState.moveX/w,gestureState.moveY/w)
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
              // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
              // 一般来说这意味着一个手势操作已经成功完成。
              this.dragManage(gestureState.moveX/w,gestureState.moveY/w)
              if(this.state.password.toString()!=[1,5,8,6,2,4,7].toString()){
                this.setState({
              a1:false,
              a2:false,
              a3:false,
              a4:false,
              a5:false,
              a6:false,
              a7:false,
              a8:false,
              a9:false,
              a3a5:false,
              a5a7:false,
              a1a5:false,
              a5a9:false,
              a3a6:false,
              a6a9:false,
              a8a9:false,
              a7a8:false,
              a4a7:false,
              a1a4:false,
              a1a2:false,
              a2a3:false,
              a2a5:false,
              a5a8:false,
              a5a6:false,
              a4a5:false,
              a2a4:false,
              a4a8:false,
              a6a8:false,
              a2a6:false,
              password:[],
              collect:false
            })
              }else{
                this.setState({
              a1:false,
              a2:false,
              a3:false,
              a4:false,
              a5:false,
              a6:false,
              a7:false,
              a8:false,
              a9:false,
              a3a5:false,
              a5a7:false,
              a1a5:false,
              a5a9:false,
              a3a6:false,
              a6a9:false,
              a8a9:false,
              a7a8:false,
              a4a7:false,
              a1a4:false,
              a1a2:false,
              a2a3:false,
              a2a5:false,
              a5a8:false,
              a5a6:false,
              a4a5:false,
              a2a4:false,
              a4a8:false,
              a6a8:false,
              a2a6:false,
              password:[],
              collect:true
            });
                this.props.navigation.navigate('Wallet', {})
              }
            }
            })
        }

   render() {
    
      return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar backgroundColor="#000"/>
              <Text style={{textAlign:'center',fontSize:parseInt(30*w),color:this.state.collect?'#000':'red',marginTop:parseInt(128*w)}}>{this.state.collect?'请输入手势密码':'密码错误'}</Text>
              <View style={{marginLeft:'auto',marginRight:'auto',height:parseInt(510*w),width:parseInt(510*w),marginTop:parseInt(124*w),zIndex:1}} {...this._panResponder.panHandlers}>
              <Mimasuo s={0.5} data={this.state}/>
              </View>
              <View style={{position:'absolute',left:0,bottom:46,width:'100%'}}><Text style={{textAlign:'center',fontSize:parseInt(24*w),color:'#1e5c97'}}>忘记手势密码？</Text></View>
            </View>
         );
   }
}

export default Password;