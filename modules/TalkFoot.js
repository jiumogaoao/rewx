import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   TextInput,
   Button
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
import Face from '../svg/Face';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Sound from 'react-native-sound';
var ImagePicker = require('react-native-image-picker');
var audioPath=AudioUtils.DocumentDirectoryPath + '/test.aac';
class ToolCell extends Component {
  render(){
    
    return (
      <TouchableOpacity onPressIn={this.props.passIn}  onPressOut={this.props.passOut} style={{width:'25%',height:parseInt(187*w)}}>
        <View style={{flex:1,top:parseInt(20*w)}}>
          <Icon name={this.props.icon} style={{width:parseInt(115*w),height:parseInt(115*w),backgroundColor:'#fff',marginLeft:parseInt(34*w),textAlign:'center',fontSize:parseInt(50*w),lineHeight:parseInt(75*w),marginBottom:parseInt(10*w),borderRadius:parseInt(20*w),borderColor:'#dedee0',borderWidth:1,color:'#6f7277'}}></Icon>
          <Text style={{textAlign:'center',marginBottom:parseInt(10*w),fontSize:parseInt(22*w),marginTop:parseInt(10*w)}}>{this.props.name}</Text>
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
    marginTop:parseInt(50*w)
  }
  })
  }
  render(){
    
    return (
      <TouchableOpacity onPressIn={() => {this.props.c({name:"a", key: 'id_'+(new Date().getTime()),from:1,face:this.props.n})}} style={[this.styles.svg,{width:parseInt(45*w),height:parseInt(45*w)}]}>
                            <View style={{flex:1}}>
                              <Face s={0.23} num={this.props.n}/>
                            </View>
                          </TouchableOpacity>
      )
  }
}
class TalkFoot extends Component {

  draw(first,last){
    const itemArr = [];
    for(var i=first;i<=last;i++){
                          itemArr.push(<FaceCell n={i} c={this.props.addData}/>)
                        }
    return itemArr;
  }
  changeName(t){
    t=t+"";
    let returnName='';
    let warry=['a','b','c','d','e','f','g','h','i','j','k']
    for(let i of t){
      returnName+=warry[i]
    }
    return returnName;
  }
  constructor(props) {
       super(props);
       this.state = { 
        state: 0 ,//0:默认,1:表情,2:其他功能,3:语音
        sound: false,
        audioPath:AudioUtils.DocumentDirectoryPath + '/a.aac',
        text:''
      };
     }
   renderScrollItem(list) {
      const itemArr = [];
      for(var i = 0; i < list.length; i++) {
      itemArr.push(
      <ToolCell icon={list[i].icon} name={list[i].name} passIn={list[i].c} passOut={list[i].d}/>
      );
    }
    return itemArr;
   }
   startSound(){
    this.state.audioPath=AudioUtils.DocumentDirectoryPath + '/id'+new Date().getTime()+'.aac';
    this.setState({audioPath:this.state.audioPath})
    AudioRecorder.prepareRecordingAtPath(this.state.audioPath, {
                          SampleRate: 22050,
                          Channels: 1,
                          AudioQuality: "Low",
                          AudioEncoding: "aac"
                        });
                        this.setState({sound:true});
                        AudioRecorder.startRecording();
                        this.props.sound(true);
   }
   stopSound(){
    AudioRecorder.stopRecording();
    this.setState({sound:false});
    this.props.addData({name:"a", key: 'id_'+(new Date().getTime()),from:1,sound:this.state.audioPath});
    this.props.sound(false);
   }
   getPic(type){
      ImagePicker.showImagePicker({
                          title: '发送图片',
                          takePhotoButtonTitle:type?'拍摄照片':null,
                          chooseFromLibraryButtonTitle:type?null:'从相册选择图片',
                          storageOptions: {
                            skipBackup: true,
                            path: 'images'
                          }
                        }, (response) => {

                          console.log(response);

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
                            this.props.addData({name:"a", key: 'id_'+(new Date().getTime()),from:1,img:response.uri,width:response.width,height:response.height})
                          }    
                        });
   }
   render() {
      return (
            <View style={{height : (this.state.state==0||this.state.state==3)?parseInt(96*w):parseInt(525*w),flexDirection:'column',borderTopColor:'#d9d9db',borderTopWidth:1,backgroundColor:'#f5f5f7'}}>
              <View style={{height:parseInt(96*w),flexDirection:'row',justifyContent : 'space-between'}}>
                {
                  this.state.state==3?(<TouchableOpacity onPress={() => this.setState({state: 0 })}>
                  <Icon name="jianpan" style={{fontSize:parseInt(40*w),lineHeight:parseInt(43*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>):(<TouchableOpacity onPress={() => this.setState({state: 3 })}>
                  <Icon name="yuying" style={{fontSize:parseInt(40*w),lineHeight:parseInt(43*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>)
                }
                
                {
                  this.state.state==3?(
                  <TouchableOpacity style={{flex:1,height: parseInt(82*w)}} onPressIn={()=>{this.state.sound?null:this.startSound()}} onPressOut={()=>{this.stopSound()}}>
                    <View style={{height: parseInt(82*w),flex:1,backgroundColor:'#fff',marginLeft:parseInt(10*w),marginTop:parseInt(12*w),borderWidth:1,borderColor:'#e3e3e5',borderRadius:parseInt(5*w)}}>
                      <Text style={{textAlign:'center',fontSize:parseInt(29*w),lineHeight:parseInt(55*w)}}>按住 说话</Text>
                    </View>
                  </TouchableOpacity>):(<TextInput value={this.state.text} onFocus={()=>this.setState({state:0})} onChangeText={(text) => this.setState({text})} onSubmitEditing={(text)=>{this.props.addData({name:"a", key: 'id_'+(new Date().getTime()),from:1,text:this.state.text});this.setState({text:''})}}
                  style={{height: parseInt(70*w),flex:1,backgroundColor:'#fff',marginLeft:parseInt(10*w),marginTop:parseInt(12*w),borderWidth:1,borderColor:'#e3e3e5',borderRadius:parseInt(5*w)}} underlineColorAndroid='transparent' 
                 />)
                }
                <TouchableOpacity onPress={() => this.setState({state: 1 })}>
                  <Icon name="biaoqing" style={{fontSize:parseInt(40*w),lineHeight:parseInt(43*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({state: 2 })}>
                  <Icon name="jia" style={{fontSize:parseInt(40*w),lineHeight:parseInt(37*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(50*w),marginLeft:parseInt(10*w),marginRight:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>
              </View>
              {this.state.state==2?(
                <View style={{flex:1,flexDirection:'column'}}>
                <ScrollView
          //水平方向  
       horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                  <View style={{width:parseInt(720*w),height:parseInt(300*w),flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderScrollItem([
                      {icon:'xiangche',name:'相册',key:'a',c:()=>{
                        this.getPic(0)
                      },d:()=>{}},
                      {icon:'paise',name:'拍摄',key:'aa',c:()=>{
                        this.getPic(1)
                      },d:()=>{}},
                      {icon:'shiping',name:'视频聊天',key:'aaa',c:()=>{},d:()=>{}},
                      {icon:'weizhi',name:'位置',key:'aaaa',c:this.props.place,d:()=>{}},
                      {icon:'hongbao',name:'红包',key:'aaaaa',c:()=>{},d:()=>{}},
                      {icon:'zhuanzhang',name:'转账',key:'aaaaaa',c:()=>{},d:()=>{}},
                      {icon:'wo2',name:'个人名片',key:'aaaaaaa',c:()=>{},d:()=>{}},
                      {icon:'yuying',name:'语音输入',key:'aaaaaaaa',c:()=>{this.startSound()},d:()=>{this.stopSound()}}])}
                  </View>
                  <View style={{width:parseInt(720*w),height:parseInt(300*w),flexDirection:'row'}}>
                    {this.renderScrollItem([
                      {icon:'shoucang',name:'收藏',key:'aaaaaaaaa',c:()=>{},d:()=>{}},
                      {icon:'kaquan',name:'卡券',key:'aaaaaaaaaa',c:()=>{},d:()=>{}}])}
                  </View>
                </ScrollView>
              </View>
                ):null}
              {this.state.state==1?(
  <View style={{flex:1,flexDirection:'column'}}>
                  <ScrollView
            //水平方向  
         horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                    <View style={{width:parseInt(720*w),height:parseInt(300*w),flexDirection:'row',flexWrap:'wrap'}}>
                      {
                        this.draw(0,19)
                      }
                    </View>
                    <View style={{width:parseInt(720*w),height:parseInt(300*w),flexDirection:'row'}}>
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