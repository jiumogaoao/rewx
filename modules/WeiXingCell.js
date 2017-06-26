import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class WeiXingCell extends Component {
   
   render() {
      return (
          <TouchableHighlight onPress={() => this.props.go(this.props.id)}>
            <View style={{flexDirection:'row',height:100,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
              <Image source={{uri: this.props.img}}
       style={{width: 80, height: 80,marginTop:10,marginLeft:10}} />
              <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontSize:25,marginTop:10}}>{this.props.name}</Text>
                <Text style={{marginTop:10,marginLeft:10}}>{this.props.dsc}</Text>
              </View>
              <View>
                <Text style={{textAlign:'right',marginTop:10,marginRight:20}}>{this.props.time}</Text>
                <Icon name={this.props.state} style={{textAlign:'right',marginRight:20,fontSize:15,lineHeight:15,marginTop:10}}/>
              </View>
            </View>
          </TouchableHighlight>
         );
   }
}

export default WeiXingCell;