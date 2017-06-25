import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class PeopleCell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:120,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              <Image source={{uri: this.props.img}}
       style={{width: 100, height: 100,marginTop:10,marginLeft:10}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:30,marginTop:10}}>{this.props.name}</Text>
                <Text style={{marginTop:15,marginLeft:10}}>{this.props.dsc}</Text>
              </View>
              <Icon name="erweima" style={{fontSize:25,marginRight:10}}/>
              <Icon name="jiao" style={{fontSize:25,lineHeight:25,marginRight:20,marginTop:40}}/>
            </View>
         );
   }
}

export default PeopleCell;