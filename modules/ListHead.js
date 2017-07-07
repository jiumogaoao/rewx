import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';

class ListHead extends Component {
   
   render() {
      return (
            <View style={{height:parseInt(30*w)}}>
            	<Text style={{lineHeight:parseInt(25*w),marginLeft:parseInt(20*w)}}>{this.props.a}</Text>
            </View>
         );
   }
}

export default ListHead;