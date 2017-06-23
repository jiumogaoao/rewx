import React, { Component } from 'react';
import {
   Text,
   View,
   SectionList
} from 'react-native';

import Cell from '../modules/Cell';
import ListHead from '../modules/ListHead';
import PeopleCell from '../modules/PeopleCell';

class Mine extends Component {
   
   render() {
      return (
            <SectionList
     renderItem={({item}) => <Cell dsc={item.dsc} deg={true}  name={item.name}/>}
     renderSectionHeader={({section}) => <ListHead a=" "/>}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{name:"a", key: 'A',dsc:'aa'}], key: 'A',renderItem:({item})=><PeopleCell/>},
     {data: [{name:"b", key: 'B',dsc:'bb'}], key: 'B'},
     {data: [{name:"c", key: 'C',dsc:'cc'}], key: 'C'},
     {data: [{name:"d", key: 'D',dsc:'dd'}], key: 'D'},
     {data: [{name:"e", key: 'E',dsc:'ee'}], key: 'E'}
   ]}
   />
         );
   }
}

export default Mine;