import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class TalkFoot extends Component {
   
   render() {
      return (
            <View style={{height : 500,flexDirection:'column',justifyContent : 'space-between',borderTopColor:'#000',borderTopWidth:1,backgroundColor:'#eee'}}>
              <View style={{flex:1,flexDirection:'row',justifyContent : 'space-between'}}>
                <Icon name="yuying" style={{fontSize:40,lineHeight:40,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginTop:25}}/>
                <TextInput
                  style={{height: 60,flex:1,backgroundColor:'#fff',marginLeft:10,marginTop:20}}
                  placeholder="Type here to translate!"
                 />
                <Icon name="biaoqing" style={{fontSize:40,lineHeight:40,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginTop:25}}/>
                <Icon name="jia" style={{fontSize:40,lineHeight:37,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginRight:10,marginTop:25}}/>
              </View>
              <View style={{height:400}}>
                
              </View>
            </View>
         );
   }
}

export default TalkFoot;