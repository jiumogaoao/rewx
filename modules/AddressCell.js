import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class AddressCell extends Component {
   
   render() {
      return (
            <View style={{flexDirection:'row',height:80,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              {this.props.icon?<Icon name={this.props.icon} />:<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 60, height: 60,marginTop:10,marginLeft:10}} />}
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:30,marginTop:16}}>{this.props.name}</Text>
              </View>
            </View>
         );
   }
}

export default AddressCell;