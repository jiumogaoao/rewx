import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Cell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:60,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              {this.props.other?this.props.other:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 40, height: 40,marginTop:10,marginLeft:10}} />}
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:30,marginTop:7}}>{this.props.name}</Text>
              </View>
              {this.props.dsc?<Text style={{textAlign:"left",marginTop:14,fontSize:20}}>{this.props.dsc}</Text>:null}
              {this.props.deg?<Icon name="jiao" style={{marginRight:20,fontSize:25,marginTop:14,lineHeight:25}}/>:null}
            </View>
         );
   }
}

export default Cell;