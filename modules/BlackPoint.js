import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image,
   TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
class BlackPoint extends Component {
   constructor(props) {
       super(props);
       this.state = { 
          focus:false
      };
      this.styles=StyleSheet.create({
        point:{width:parseInt(20*w),height:parseInt(20*w),borderRadius:parseInt(20*w)},
        last:{marginRight:0}
      });
     }
   draw(){
    var rArry=[];
    for(var i=0;i<this.props.count;i++){
                rArry.push(<View style={[this.styles.point,{marginRight:i==i-1?0:parseInt(10*w)},{backgroundColor:i==this.props.hl?'rgba(0,0,0,0.6)':'rgba(0,0,0,0.3)'}]}/>)
              }
    return rArry;
   }
   render() {
      return (
            <View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
              {this.draw()}
            </View>
         );
   }
}

export default BlackPoint;