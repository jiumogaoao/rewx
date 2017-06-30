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
                    return (<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:200,height:200}}/>)
                  }else if(p.face||p.face==0){
                    return (<View style={[{padding:5},this.props.from==1?{paddingLeft:12,paddingRight:20}:{paddingLeft:20,paddingRight:12}]}><Face s={0.25} num={p.face}/></View>)
                  }else{
                    return (<Text style={[{padding:5,fontSize:20,lineHeight:31},this.props.from==1?{paddingLeft:12,paddingRight:20}:{paddingLeft:20,paddingRight:12}]}>{this.props.text}</Text>)
                  }}
   render() {
      return (
          <View style={{flexDirection:this.props.from==1?"row-reverse":"row",marginLeft:5,marginTop:10}}>
            <Image style={{width:45,height:45,borderRadius:5}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
            <View style={[{borderRadius:3,position:"relative",maxWidth:300},this.props.from==1?{marginRight:5,backgroundColor:"#a2e758"}:{marginLeft:5,backgroundColor:"#fff"}]}>
              
                {this.props.from==1?(<View style={{position:"absolute",top:0,right:0,height:"100%",flexDirection:"column",zIndex:3,boxPack:"right"}}><YouShang s={0.5}/>
                <View style={{flex:1,backgroundColor:"#EBEBEB",width:6,left:2,borderLeft:"#D8D8D8"}}/>
                <YouXia s={0.5}/></View>):(<View style={{position:"absolute",top:0,left:0,height:"100%",flexDirection:"column",zIndex:3}}><ZuoShang s={0.5}/>
                <View style={{flex:1,width:6,backgroundColor:"#EBEBEB",borderRight:"#D8D8D8"}}/>
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