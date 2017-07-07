import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';
import ZuoShang from '../svg/ZuoShang';
import YouShang from '../svg/YouShang';
import ZuoXia from '../svg/ZuoXia';
import YouXia from '../svg/YouXia';
import Face from '../svg/Face';
class TalkCell extends Component {
   draw(p){
    if(p.img){
                    return (<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:parseInt(200*w),height:parseInt(200*w)}}/>)
                  }else if(p.face||p.face==0){
                    return (<View style={[{padding:parseInt(5*w)},this.props.from==1?{paddingLeft:parseInt(12*w),paddingRight:parseInt(20*w)}:{paddingLeft:parseInt(20*w),paddingRight:parseInt(12*w)}]}><Face s={0.25} num={p.face}/></View>)
                  }else{
                    return (<Text style={[{padding:parseInt(5*w),fontSize:parseInt(20*w),lineHeight:parseInt(31*w)},this.props.from==1?{paddingLeft:parseInt(12*w),paddingRight:parseInt(20*w)}:{paddingLeft:parseInt(20*w),paddingRight:parseInt(12*w)}]}>{this.props.text}</Text>)
                  }}
   render() {
      return (
          <View style={{flexDirection:this.props.from==1?"row-reverse":"row",marginLeft:parseInt(5*w),marginTop:parseInt(10*w)}}>
            <Image style={{width:parseInt(45*w),height:parseInt(45*w),borderRadius:parseInt(5*w)}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
            <View style={[{borderRadius:parseInt(3*w),position:"relative",maxWidth:parseInt(300*w)},this.props.from==1?{marginRight:parseInt(5*w),backgroundColor:"#a2e758"}:{marginLeft:parseInt(5*w),backgroundColor:"#fff"}]}>
              
                {this.props.from==1?(<View style={{position:"absolute",top:0,right:0,height:"100%",flexDirection:"column",zIndex:3,boxPack:"right"}}><YouShang s={0.5}/>
                <View style={{flex:1,backgroundColor:"#EBEBEB",width:parseInt(6*w),left:parseInt(2*w),borderLeft:"#D8D8D8"}}/>
                <YouXia s={0.5}/></View>):(<View style={{position:"absolute",top:0,left:0,height:"100%",flexDirection:"column",zIndex:3}}><ZuoShang s={0.5}/>
                <View style={{flex:1,width:parseInt(6*w),backgroundColor:"#EBEBEB",borderRight:"#D8D8D8"}}/>
                <ZuoXia s={0.5}/></View>)}
                {
                  this.draw(this.props)
                }
                
              
              
            </View>
          </View>
         );
   }
}

export default TalkCell;