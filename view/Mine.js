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
     renderItem={({item}) => <Cell deg={true}  name={item.name} icon={item.icon}/>}
     renderSectionHeader={({section}) => <ListHead a=" "/>}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{name:"某人", key: 'A',dsc:'微信号：jiumogaoao',img:'http://#'}], key: 'A',renderItem:({item})=><PeopleCell name={item.name} dsc={item.dsc} img={item.img}/>},
     {data: [{name:"钱包", key: 'B',dsc:'bb',icon:'qianbao'}], key: 'B'},
     {data: [{name:"收藏", key: 'C',dsc:'cc',icon:'shoucang'},{name:"相册", key: 'CC',dsc:'cc',icon:'xiangche'},{name:"卡包", key: 'CCC',dsc:'cc',icon:'kabao'},{name:"表情", key: 'CCCC',dsc:'cc',icon:'biaoqing'}], key: 'C'},
     {data: [{name:"设置", key: 'D',dsc:'dd',icon:'shezhi'}], key: 'D'}
   ]}
   />
         );
   }
}

export default Mine;