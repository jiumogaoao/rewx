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
                data={[{key: 'a',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"说了一句话",time:"08:40",state:"jingying"}, {key: 'b',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"说了一句话",time:"08:40",state:"jingying"},{key: 'c',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"说了一句话",time:"08:40",state:"jingying"}, {key: 'd',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"说了一句话",time:"08:40",state:"jingying"},{key: 'e',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"dsc",time:"08:40",state:"jingying"}, {key: 'f',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"dsc",time:"08:40",state:"jingying"},{key: 'g',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"dsc",time:"08:40",state:"jingying"}, {key: 'h',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"dsc",time:"08:40",state:"jingying"},{key: 'i',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"dsc",time:"08:40",state:"jingying"}, {key: 'j',name:'某人',img:"https://facebook.github.io/react/img/logo_og.png",dsc:"dsc",time:"08:40",state:"jingying"}]}
                renderItem={({item}) => <WeiXingCell id={item.key} name={item.name} img={item.img} dsc={item.dsc} time={item.time} state={item.state} go={this.props.go}/>}
              />
            </View>
         );
   }
}

export default WeiXing;