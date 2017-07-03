import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
import Face from '../svg/Face';
var ImagePicker = require('react-native-image-picker');
const styles = StyleSheet.create({
  svg:{
    marginLeft:40,
    marginTop:30
  }
})
class ToolCell extends Component {
  render(){
    return (
      <TouchableOpacity onPress={() => {this.props.c()}} style={{width:'25%',height:130}}>
        <View style={{flex:1}}>
          <Icon name={this.props.icon} style={{width:80,height:80,backgroundColor:'#fff',marginLeft:35,textAlign:'center',fontSize:50,lineHeight:60,marginBottom:10,borderRadius:10,borderColor:'#999',borderWidth:1}}></Icon>
          <Text style={{textAlign:'center',marginBottom:10}}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
      )
  }
}
class FaceCell extends Component {
  render(){
    return (
      <TouchableOpacity onPress={() => {this.props.c(this.props.n)}} style={[styles.svg,{width:45,height:45}]}>
                            <View style={{flex:1}}>
                              <Face s={0.2} num={this.props.n}/>
                            </View>
                          </TouchableOpacity>
      )
  }
}
class TalkFoot extends Component {
  draw(first,last){
    const itemArr = [];
    for(var i=first;i<=last;i++){
                          itemArr.push(<FaceCell n={i} c={(n)=>{this.props.faceClick(n)}}/>)
                        }
    return itemArr;
  }
  constructor(props) {
       super(props);
       this.state = { state: 0 };//0:默认,1:表情,2:其他功能
     }
   renderScrollItem(list) {
      const itemArr = [];
      for(var i = 0; i < list.length; i++) {
      itemArr.push(
      <ToolCell icon={list[i].icon} name={list[i].name} c={list[i].c}/>
      );
    }
    return itemArr;
   }
   render() {
      return (
            <View style={{height : this.state.state==0?100:400,flexDirection:'column',borderTopColor:'#000',borderTopWidth:1,backgroundColor:'#eee'}}>
              <View style={{height:100,flexDirection:'row',justifyContent : 'space-between'}}>
                <TouchableOpacity onPress={() => this.setState({state: 0 })}>
                  <Icon name="yuying" style={{fontSize:40,lineHeight:40,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginTop:25}}/>
                </TouchableOpacity>
                <TextInput
                  style={{height: 60,flex:1,backgroundColor:'#fff',marginLeft:10,marginTop:20}}
                  placeholder="Type here to translate!"
                 />
                <TouchableOpacity onPress={() => this.setState({state: 1 })}>
                  <Icon name="biaoqing" style={{fontSize:40,lineHeight:40,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginTop:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({state: 2 })}>
                  <Icon name="jia" style={{fontSize:40,lineHeight:37,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginRight:10,marginTop:25}}/>
                </TouchableOpacity>
              </View>
              {this.state.state==2?(
                <View style={{flex:1,flexDirection:'column'}}>
                <ScrollView
          //水平方向  
       horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                  <View style={{width:600,height:300,flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderScrollItem([
                      {icon:'xiangche',name:'相册',key:'a',c:()=>{ImagePicker.showImagePicker({
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source
    });
  }
});}},
                      {icon:'paise',name:'拍摄',key:'aa',c:()=>{}},
                      {icon:'shiping',name:'视频聊天',key:'aaa',c:()=>{}},
                      {icon:'weizhi',name:'位置',key:'aaaa',c:()=>{}},
                      {icon:'hongbao',name:'红包',key:'aaaaa',c:()=>{}},
                      {icon:'zhuanzhang',name:'转账',key:'aaaaaa',c:()=>{}},
                      {icon:'wo2',name:'个人名片',key:'aaaaaaa',c:()=>{}},
                      {icon:'yuying',name:'语音输入',key:'aaaaaaaa',c:()=>{}}])}
                  </View>
                  <View style={{width:600,height:300,flexDirection:'row'}}>
                    {this.renderScrollItem([
                      {icon:'shoucang',name:'收藏',key:'aaaaaaaaa',c:()=>{}},
                      {icon:'kaquan',name:'卡券',key:'aaaaaaaaaa',c:()=>{}}])}
                  </View>
                </ScrollView>
              </View>
                ):null}
              {this.state.state==1?(
  <View style={{flex:1,flexDirection:'column'}}>
                  <ScrollView
            //水平方向  
         horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                    <View style={{width:600,height:300,flexDirection:'row',flexWrap:'wrap'}}>
                      {
                        this.draw(0,19)
                      }
                    </View>
                    <View style={{width:600,height:300,flexDirection:'row'}}>
                      {
                        this.draw(20,22)
                      }
                    </View>
                  </ScrollView>
                </View>
                ):null}
              
            </View>
         );
   }
}

export default TalkFoot;