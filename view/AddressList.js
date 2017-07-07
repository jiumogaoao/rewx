import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   SectionList
} from 'react-native';

import AddressCell from '../modules/AddressCell';
import ListHead from '../modules/ListHead';
import Icon from 'react-native-vector-icons-iconfont/IconFont';

class AddressList extends Component {
   render() {
    const styles = StyleSheet.create({
  icon:{
    width:parseInt(60*w),height:parseInt(60*w),marginLeft:parseInt(10*w),marginTop:parseInt(10*w),color:'#fff',fontSize:parseInt(40*w),lineHeight:parseInt(45*w),textAlign:'center'
  }
})
      return (
            <SectionList
              renderItem={({item}) => <AddressCell name={item.name} other={item.other}/>}
              renderSectionHeader={({section}) => section.nohead?null:<ListHead a={section.key}/>}
              sections={[ // 不同section渲染相同类型的子组件
                {data: [
                  {name:"新的朋友", key: 'A',other:(<Icon name="xinpengyou" style={[styles.icon,{backgroundColor:'red'}]}/>)},
                  {name:"群聊", key: 'Ab',other:(<Icon name="qunliao" style={[styles.icon,{backgroundColor:'green'}]}/>)},
                  {name:"标签", key: 'Ac',other:(<Icon name="biaoqian" style={[styles.icon,{backgroundColor:'yellow'}]}/>)},
                  {name:"公众号", key: 'Ae',other:(<Icon name="gongzonghao" style={[styles.icon,{backgroundColor:'blue'}]}/>)}
                  ], key: 'A0',nohead:true},
                {data: [{name:"a", key: 'A'}], key: 'A'},
                {data: [{name:"b", key: 'B'}], key: 'B'},
                {data: [{name:"c", key: 'C'}], key: 'C'},
                {data: [{name:"d", key: 'D'}], key: 'D'},
                {data: [{name:"e", key: 'E'}], key: 'E'},
                {data: [{name:"f", key: 'F'}], key: 'F'},
                {data: [{name:"g", key: 'G'}], key: 'G'},
                {data: [{name:"h", key: 'H'}], key: 'H'},
                {data: [{name:"i", key: 'I'}], key: 'I'},
                {data: [{name:"j", key: 'J'}], key: 'J'},
                {data: [{name:"k", key: 'K'}], key: 'K'},
                {data: [{name:"l", key: 'L'}], key: 'L'},
                {data: [{name:"m", key: 'M'}], key: 'M'},
                {data: [{name:"n", key: 'N'}], key: 'N'},
                {data: [{name:"o", key: 'O'}], key: 'O'},
                {data: [{name:"p", key: 'P'}], key: 'P'},
                {data: [{name:"q", key: 'Q'}], key: 'Q'},
                {data: [{name:"r", key: 'R'}], key: 'R'},
                {data: [{name:"s", key: 'S'}], key: 'S'},
                {data: [{name:"t", key: 'T'}], key: 'T'},
                {data: [{name:"u", key: 'U'}], key: 'U'},
                {data: [{name:"v", key: 'V'}], key: 'V'},
                {data: [{name:"w", key: 'W'}], key: 'W'},
                {data: [{name:"x", key: 'X'}], key: 'X'},
                {data: [{name:"y", key: 'Y'}], key: 'Y'},
                {data: [{name:"z", key: 'Z'}], key: 'Z'}
              ]}
            />
         );
   }
}

export default AddressList;