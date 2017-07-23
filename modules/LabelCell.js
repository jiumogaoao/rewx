import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
class LabelCell extends Component {
   getPic(){
    var pArray=[];
    this.props.pic.forEach((v)=>{pArray.push(<Image source={{uri:v.url}} style={{width:parseInt(107*w),height:parseInt(107*w),marginRight:parseInt(5*w),marginBottom:parseInt(10*w)}}/>)});
    return pArray;
   }
   render() {
      return (
            <View style={{backgroundColor:"#fff"}}>
              <TouchableOpacity onPress={this.props.go}>
              <View style={{flexDirection:'row',justifyContent:'space-between',minHeight:parseInt(84*w),borderBottomWidth:1,borderBottomColor:"#e2e2e2",width:parseInt(700*w),marginLeft:'auto',paddingTop:this.props.pic?parseInt(10*w):null}}>
                <View style={{minWidth:parseInt(200*w)}}>
                  <Text style={{fontSize:parseInt(30*w),marginTop:parseInt(20*w),color:'#000'}}>{this.props.name}</Text>
                </View>
                {this.props.dsc?<Text style={{marginTop:parseInt(25*w),fontSize:parseInt(24*w),flex:1}}>{this.props.dsc}</Text>:null}
                {this.props.pic?(<View style={{flexDirection:'row',flex:1}}>{this.getPic()}</View>):null}
                {this.props.deg?<Icon name="jiao" style={{marginRight:parseInt(30*w),fontSize:parseInt(24*w),marginTop:parseInt(25*w),lineHeight:parseInt(25*w)}}/>:null}
              </View>
              </TouchableOpacity>
            </View>
         );
   }
}

export default LabelCell;