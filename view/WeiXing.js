import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class WeiXing extends Component {
   
   render() {
      return (
            <View style={{backgroundColor:"#fff",flex : 1}}>
              <Text>微信</Text>
            </View>
         );
   }
}
const styles = StyleSheet.create({
  navFrame: {
   flex:1,
   flexDirection : 'column',
   justifyContent : 'space-around'
  },
  icon:{
   lineHeight:50,
   textAlign:'center',
   fontSize:40,
   color:"#000"
  },
  text:{
   textAlign:'center'
  }
});
export default WeiXing;