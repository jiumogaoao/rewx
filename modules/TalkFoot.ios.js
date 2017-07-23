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
import BlackPoint from '../modules/BlackPoint';
var ImagePicker = require('react-native-image-picker');
var audioPath=AudioUtils.DocumentDirectoryPath + '/test.aac';
class ToolCell extends Component {
  render(){
    
    return (
      <TouchableOpacity onPress={this.props.passIn}  onPressOut={this.props.passOut} style={{width:'25%',height:parseInt(187*w)}}>
        <View style={{flex:1,top:parseInt(20*w)}}>
          <View style={{width:parseInt(115*w),height:parseInt(115*w),backgroundColor:'#fff',marginLeft:parseInt(34*w),marginBottom:parseInt(10*w),borderRadius:parseInt(20*w),borderColor:'#dedee0',borderWidth:1}}><Icon name={this.props.icon} style={{textAlign:'center',fontSize:parseInt(50*w),lineHeight:parseInt(75*w),color:'#6f7277',backgroundColor:'transparent',marginTop:parseInt(6*w)}}></Icon></View>
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
      <TouchableOpacity onPress={() => {this.props.c({name:"a", key: 'id_'+(new Date().getTime()),from:1,face:this.props.n})}} style={[this.styles.svg,{width:parseInt(45*w),height:parseInt(45*w)}]}>
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
        text:'',
        toolScroll:0,
        faceScroll:0
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
   toolScroll(){
    this.setState({toolScroll:this.state.toolScroll==0?1:0});
   }
   faceScroll(){
    this.setState({faceScroll:this.state.faceScroll==0?1:0});
   }
   render() {
      return (
            <View style={{height : (this.state.state==0||this.state.state==3)?parseInt(96*w):parseInt(525*w),flexDirection:'column',borderTopColor:'#d9d9db',borderTopWidth:1,backgroundColor:'#f5f5f7'}}>
              <View style={{height:parseInt(96*w),flexDirection:'row',justifyContent : 'space-between'}}>
                {
                  this.state.state==3?(<TouchableOpacity onPress={() => this.setState({state: 0,toolScroll:0,faceScroll:0 })}>
                  <Icon name="jianpan" style={{fontSize:parseInt(40*w),lineHeight:parseInt(48*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(25*w),marginLeft:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>):(<TouchableOpacity onPress={() => this.setState({state: 3 ,toolScroll:0,faceScroll:0})}>
                  <Icon name="yuying" style={{fontSize:parseInt(40*w),lineHeight:parseInt(48*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(25*w),marginLeft:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
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
                <TouchableOpacity onPress={() => this.setState({state: 1 ,toolScroll:0,faceScroll:0})}>
                  <Icon name="biaoqing" style={{fontSize:parseInt(40*w),lineHeight:parseInt(48*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(25*w),marginLeft:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({state: 2 ,toolScroll:0,faceScroll:0})}>
                  <Icon name="jia" style={{fontSize:parseInt(40*w),lineHeight:parseInt(47*w),textAlign:'center',width:parseInt(55*w),height:parseInt(55*w),borderColor:'#8a8b8f',borderWidth:1,borderRadius:parseInt(25*w),marginLeft:parseInt(10*w),marginRight:parseInt(10*w),marginTop:parseInt(21*w),color:'#8a8b8f'}}/>
                </TouchableOpacity>
              </View>
              {this.state.state==2?(
                <View style={{flex:1,flexDirection:'column'}}>
                <View style={{position:'absolute',bottom:parseInt(10*w),left:parseInt(10*w),width:'100%'}}><BlackPoint count={2} hl={this.state.toolScroll}/></View>
                <ScrollView
          //水平方向  
       horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScrollEndDrag={()=>this.toolScroll()}> 
                  <View style={{width:parseInt(720*w),height:parseInt(300*w),flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderScrollItem([
                      {icon:'xiangche',name:'相册',key:'a',c:()=>{
                        this.getPic(0)
                      },d:()=>{}},
                      {icon:'paise',name:'拍摄',key:'aa',c:()=>this.props.navigation.navigate('Picture', {callback: (data)=>{this.props.addData({name:"a", key: 'id_'+(new Date().getTime()),from:1,img:data,width:w*720,height:h*720})}}),d:()=>{}},
                      {icon:'shiping',name:'视频聊天',key:'aaa',c:()=>{},d:()=>{}},
                      {icon:'weizhi',name:'位置',key:'aaaa',c:()=>this.props.navigation.navigate('MapV', {callback: (data)=>{this.props.addData({name:"a", key: 'id_'+(new Date().getTime()),from:1,mapData:data})}}),d:()=>{}},
                      {icon:'hongbao',name:'红包',key:'aaaaa',c:()=>this.props.navigation.navigate('RedPackage', {callback: (data)=>{}}),d:()=>{}},
                      {icon:'zhuanzhang',name:'转账',key:'aaaaaa',c:()=>this.props.navigation.navigate('Costs', {callback: (data)=>{}}),d:()=>{}},
                      {icon:'wo2',name:'个人名片',key:'aaaaaaa',c:()=>this.props.navigation.navigate('AddressList', {callback: (data)=>{}}),d:()=>{}},
                      {icon:'yuying',name:'语音输入',key:'aaaaaaaa',c:()=>{},d:()=>{}}])}
                  </View>
                  <View style={{width:parseInt(720*w),height:parseInt(300*w),flexDirection:'row'}}>
                    {this.renderScrollItem([
                      {icon:'shoucang',name:'收藏',key:'aaaaaaaaa',c:()=>this.props.navigation.navigate('Collection', {callback: (data)=>{}}),d:()=>{}},
                      {icon:'kaquan',name:'卡券',key:'aaaaaaaaaa',c:()=>{},d:()=>{}}])}
                  </View>
                </ScrollView>
              </View>
                ):null}
              {this.state.state==1?(
  <View style={{flex:1,flexDirection:'column'}}>
  <View style={{position:'absolute',bottom:parseInt(10*w),left:parseInt(10*w),width:'100%'}}><BlackPoint count={2} hl={this.state.faceScroll}/></View>
                  <ScrollView
            //水平方向  
         horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScrollEndDrag={()=>this.faceScroll()}> 
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