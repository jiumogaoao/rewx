import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image
} from 'react-native';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import ZuoShang from '../svg/ZuoShang';
import YouShang from '../svg/YouShang';
import ZuoXia from '../svg/ZuoXia';
import YouXia from '../svg/YouXia';
import Face from '../svg/Face';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Sound from 'react-native-sound';
import { MapView } from 'react-native-baidu-map';
class TalkCell extends Component {
    constructor(props) {
       super(props);
       this.state={
        time:'auto'
       }
       if(this.props.data.sound){
        this.soundFile=new Sound(this.props.data.sound, '', (error) => {
                            if (error) {
                              console.log('failed to load the sound', error);
                            }
                          });
        this.timer = setTimeout(() => { this.setState({time:this.soundFile.getDuration()})},100)
       }
     }
    sound(){
      
                            this.soundFile.play((success) => {
                              if (success) {
                                console.log('successfully finished playing');
                              } else {
                                console.log('playback failed due to audio decoding errors');
                              }
                            });
    }
   draw(p){
    if(p.img){
                    return (<Image source={{uri: p.img}} style={{width:p.width<=300?parseInt(p.width*w):parseInt(300*w),height:p.width<=300?parseInt(p.height*w):parseInt(p.height*(300/p.width)*w),borderRadius:parseInt(5*w)}}/>)
                  }else if(p.face||p.face==0){
                    return (<View style={[{padding:parseInt(20*w)},p.from==1?{paddingLeft:parseInt(20*w),paddingRight:parseInt(28*w)}:{paddingLeft:parseInt(28*w),paddingRight:parseInt(20*w)}]}><Face s={0.25} num={p.face}/></View>)
                  }else if(p.sound){
                    return (<TouchableOpacity onPressIn={()=>this.sound()}><View style={[{padding:parseInt(20*w),width:parseInt(this.state.time*30*w)},p.from==1?{paddingLeft:parseInt(20*w),paddingRight:parseInt(28*w)}:{paddingLeft:parseInt(28*w),paddingRight:parseInt(20*w)}]}><Icon name="yuying" style={{fontSize:parseInt(40*w),lineHeight:parseInt(35*w),height:parseInt(43*w)}}/></View></TouchableOpacity>)
                  }else if(p.mapData){
                    return (<MapView 
          zoom={15}
          center={p.mapData.center}
          marker={p.mapData.marker}
          style={{width:parseInt(300*w),height:parseInt(300*w)}}
        />);
                  }else{
                    return (<Text style={[{padding:parseInt(20*w),fontSize:parseInt(27*w),lineHeight:parseInt(35*w)},p.from==1?{paddingLeft:parseInt(20*w),paddingRight:parseInt(28*w)}:{paddingLeft:parseInt(28*w),paddingRight:parseInt(20*w)}]}>{p.text}</Text>)
                  }}
   render() {
      return (
          <View style={{flexDirection:this.props.data.from==1?"row-reverse":"row",marginLeft:parseInt(5*w),marginTop:parseInt(10*w)}}>
            <Image style={{width:parseInt(77*w),height:parseInt(77*w),borderRadius:parseInt(10*w)}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
            <View style={[{borderRadius:parseInt(5*w),position:"relative",maxWidth:parseInt(300*w)},this.props.data.from==1?{marginRight:parseInt(5*w),backgroundColor:"#a2e758"}:{marginLeft:parseInt(5*w),backgroundColor:"#fff"}]}>
              
                {this.props.data.from==1?(
                  <View style={{position:"absolute",top:0,right:0,height:"100%",flexDirection:"column",zIndex:3}}>
                    <View style={{height:parseInt(31.9*w),width:parseInt(13*w),marginLeft:'auto',marginTop:-1}}><YouShang s={0.048}/></View>
                    <View style={{flex:1,backgroundColor:"#EBEBEB",width:parseInt(8*w),marginLeft:'auto'}}/>
                    <View style={{height:parseInt(22*w),width:parseInt(15*w),marginLeft:'auto',marginTop:-1}}><YouXia s={0.06}/></View>
                    </View>
                    ):(
                  <View style={{position:"absolute",top:0,left:0,height:"100%",flexDirection:"column",zIndex:3}}>
                  <View style={{height:parseInt(32*w),width:parseInt(13*w),marginTop:-1}}><ZuoShang s={0.05}/></View>
                  <View style={{flex:1,width:parseInt(9*w),backgroundColor:"#EBEBEB",minHeight:1}}/>
                  <View style={{height:parseInt(17*w),width:parseInt(13*w),marginLeft:'auto',marginTop:-1}}><ZuoXia s={0.05}/></View>
                  </View>)}
                {
                  this.draw(this.props.data)
                }
                
              
              
            </View>
          </View>
         );
   }
}

export default TalkCell;