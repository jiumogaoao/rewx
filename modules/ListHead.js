import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';

class ListHead extends Component {
   
   render() {
      return (
            <View style={{height:parseInt(43*w),backgroundColor:'#f1f0f6'}}>
            	<Text style={{lineHeight:parseInt(33*w),marginLeft:parseInt(20*w),fontSize:parseInt(20*w)}}>{this.props.a}</Text>
            </View>
         );
   }
}

export default ListHead;