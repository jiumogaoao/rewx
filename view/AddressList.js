import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   SectionList
} from 'react-native';

import Cell from '../modules/Cell';
import ListHead from '../modules/ListHead';
class AddressList extends Component {
   
   render() {
      return (
            <SectionList
              renderItem={({item}) => <Cell name={item.name}/>}
              renderSectionHeader={({section}) => <ListHead a={section.key}/>}
              sections={[ // 不同section渲染相同类型的子组件
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