import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';

class ListHead extends Component {
   
   render() {
      return (
            <View style={{height:30}}>
            	<Text style={{lineHeight:25,marginLeft:20}}>{this.props.a}</Text>
            </View>
         );
   }
}

export default ListHead;