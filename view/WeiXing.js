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
                data={[{key: 'a',name:'某人',img:"http://#",dsc:"说了一句话",time:"08:40",state:"fujinderen"}, {key: 'b',name:'某人',img:"http://#",dsc:"说了一句话",time:"08:40",state:"fujinderen"},{key: 'c',name:'某人',img:"http://#",dsc:"说了一句话",time:"08:40",state:"fujinderen"}, {key: 'd',name:'某人',img:"http://#",dsc:"说了一句话",time:"08:40",state:"fujinderen"},{key: 'e',name:'某人',img:"http://#",dsc:"dsc",time:"08:40",state:"fujinderen"}, {key: 'f',name:'某人',img:"http://#",dsc:"dsc",time:"08:40",state:"fujinderen"},{key: 'g',name:'某人',img:"http://#",dsc:"dsc",time:"08:40",state:"fujinderen"}, {key: 'h',name:'某人',img:"http://#",dsc:"dsc",time:"08:40",state:"fujinderen"},{key: 'i',name:'某人',img:"http://#",dsc:"dsc",time:"08:40",state:"fujinderen"}, {key: 'j',name:'某人',img:"http://#",dsc:"dsc",time:"08:40",state:"fujinderen"}]}
                renderItem={({item}) => <WeiXingCell name={item.name} img={item.img} dsc={item.dsc} time={item.time} state={item.state}/>}
              />
            </View>
         );
   }
}

export default WeiXing;