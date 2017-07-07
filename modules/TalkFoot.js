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
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Sound from 'react-native-sound';
let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
var ImagePicker = require('react-native-image-picker');

class ToolCell extends Component {
  render(){
    
    return (
      <TouchableOpacity onPress={() => {this.props.c()}} style={{width:'25%',height:parseInt(130*w)}}>
        <View style={{flex:1}}>
          <Icon name={this.props.icon} style={{width:parseInt(80*w),height:parseInt(80*w),backgroundColor:'#fff',marginLeft:parseInt(35*w),textAlign:'center',fontSize:parseInt(50*w),lineHeight:parseInt(60*w),marginBottom:parseInt(10*w),borderRadius:parseInt(10*w),borderColor:'#999',borderWidth:1}}></Icon>
          <Text style={{textAlign:'center',marginBottom:parseInt(10*w)}}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
      )
  }
}
class FaceCell extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
  svg:{
    marginLeft:parseInt(40*w),
    marginTop:parseInt(30*w)
  }
  })
  }
  render(){
    
    return (
      <TouchableOpacity onPress={() => {this.props.c(this.props.n)}} style={[this.styles.svg,{width:parseInt(45*w),height:parseInt(45*w)}]}>
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
            <View style={{height : this.state.state==0?parseInt(100*w):parseInt(400*w),flexDirection:'column',borderTopColor:'#000',borderTopWidth:1,backgroundColor:'#eee'}}>
              <View style={{height:parseInt(100*w),flexDirection:'row',justifyContent : 'space-between'}}>
                <TouchableOpacity onPress={() => this.setState({state: 0 })}>
                  <Icon name="yuying" style={{fontSize:parseInt(40*w),lineHeight:parseInt(40*w),textAlign:'center',width:parseInt(50*w),height:parseInt(50*w),borderColor:'#000',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginTop:parseInt(25*w)}}/>
                </TouchableOpacity>
                <TextInput
                  style={{height: parseInt(60*w),flex:1,backgroundColor:'#fff',marginLeft:parseInt(10*w),marginTop:parseInt(20*w)}}
                  placeholder="Type here to translate!"
                 />
                <TouchableOpacity onPress={() => this.setState({state: 1 })}>
                  <Icon name="biaoqing" style={{fontSize:parseInt(40*w),lineHeight:parseInt(40*w),textAlign:'center',width:parseInt(50*w),height:parseInt(50*w),borderColor:'#000',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginTop:parseInt(25*w)}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({state: 2 })}>
                  <Icon name="jia" style={{fontSize:parseInt(40*w),lineHeight:parseInt(37*w),textAlign:'center',width:parseInt(50*w),height:parseInt(50*w),borderColor:'#000',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginRight:parseInt(10*w),marginTop:parseInt(25*w)}}/>
                </TouchableOpacity>
              </View>
              {this.state.state==2?(
                <View style={{flex:1,flexDirection:'column'}}>
                <ScrollView
          //水平方向  
       horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                  <View style={{width:parseInt(600*w),height:parseInt(300*w),flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderScrollItem([
                      {icon:'xiangche',name:'相册',key:'a',c:()=>{ImagePicker.showImagePicker({
  title: 'Select Avatar',
  takePhotoButtonTitle:null,
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
                      {icon:'paise',name:'拍摄',key:'aa',c:()=>{ImagePicker.showImagePicker({
  title: 'Select Avatar',
  chooseFromLibraryButtonTitle:null,
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
                      {icon:'shiping',name:'视频聊天',key:'aaa',c:()=>{}},
                      {icon:'weizhi',name:'位置',key:'aaaa',c:this.props.place},
                      {icon:'hongbao',name:'红包',key:'aaaaa',c:()=>{}},
                      {icon:'zhuanzhang',name:'转账',key:'aaaaaa',c:()=>{
                        setTimeout(() => {
      var sound = new Sound(audioPath, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
                      }},
                      {icon:'wo2',name:'个人名片',key:'aaaaaaa',c:()=>{
                        AudioRecorder.stopRecording();
                      }},
                      {icon:'yuying',name:'语音输入',key:'aaaaaaaa',c:()=>{
                        AudioRecorder.prepareRecordingAtPath(audioPath, {
                          SampleRate: 22050,
                          Channels: 1,
                          AudioQuality: "Low",
                          AudioEncoding: "aac"
                        });
                        AudioRecorder.startRecording();
                      }}])}
                  </View>
                  <View style={{width:parseInt(600*w),height:parseInt(300*w),flexDirection:'row'}}>
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
                    <View style={{width:parseInt(600*w),height:parseInt(300*w),flexDirection:'row',flexWrap:'wrap'}}>
                      {
                        this.draw(0,19)
                      }
                    </View>
                    <View style={{width:parseInt(600*w),height:parseInt(300*w),flexDirection:'row'}}>
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