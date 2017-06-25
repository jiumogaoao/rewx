import React, { Component } from 'react';
import {
   Text,
   View,
   SectionList
} from 'react-native';

import Cell from '../modules/Cell';
import ListHead from '../modules/ListHead';

class Found extends Component {
   
   render() {
      return (
		  <SectionList
	   renderItem={({item}) => <Cell dsc={item.dsc} deg={true}  name={item.name} icon={item.icon}/>}
	   renderSectionHeader={({section}) => <ListHead a=" "/>}
	   sections={[ // 不同section渲染相同类型的子组件
		   {data: [{name:"朋友圈", key: 'A',icon:'pengyouquan'}], key: 'A'},
	   {data: [{name:"扫一扫", key: 'B',icon:'saoyisao'},{name:"摇一摇", key: 'BB',icon:'yaoyiyao'}], key: 'B'},
	   {data: [{name:"附近的人", key: 'C',icon:'fujinderen'},{name:"漂流瓶", key: 'CC',icon:'piaoliuping'}], key: 'C'},
	   {data: [{name:"购物", key: 'D',icon:'gouwu'},{name:"游戏", key: 'DD',icon:'youxi'}], key: 'D'},
	   {data: [{name:"小程序", key: 'E',icon:'xiaochengxu'}], key: 'E'}
   ]}
   />
         );
   }
}

export default Found;