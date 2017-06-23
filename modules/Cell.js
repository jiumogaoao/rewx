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
              {this.props.icon?<Icon name={this.props.icon} />:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 40, height: 40,marginTop:10,marginLeft:10}} />}
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:20,marginTop:15}}>{this.props.name}</Text>
              </View>
              {this.props.dsc?<Text style={{textAlign:"left",marginTop:20}}>{this.props.dsc}</Text>:null}
              {this.props.deg?<Icon name="jiao" style={{lineHeight:25,marginRight:20}}/>:null}
            </View>
         );
   }
}

export default Cell;