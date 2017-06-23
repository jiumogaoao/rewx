import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   FlatList
} from 'react-native';

import WeiXingCell from '../modules/WeiXingCell';

class WeiXing extends Component {
   
   render() {
      return (
            <View style={{flex : 1}}>
              <FlatList
                data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'}, {key: 'j'}]}
                renderItem={({item}) => <WeiXingCell/>}
              />
            </View>
         );
   }
}

export default WeiXing;