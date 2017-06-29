import React, { Component } from 'react';
import {
   Text,
   View,
   SectionList,
   StyleSheet
} from 'react-native';

import Cell from '../modules/Cell';
import ListHead from '../modules/ListHead';
import PeopleCell from '../modules/PeopleCell';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import ShouCang from '../svg/ShouCang';
import KaBao from '../svg/KaBao';
const styles = StyleSheet.create({
  icon:{
    width:40,
    height:40,
    textAlign:'center',
    fontSize:30,
    lineHeight:30,
    marginTop:10,
    marginLeft:10
  },
  svg:{
    marginLeft:9,
    marginTop:9
  }
})
class Mine extends Component {
   render() {
      return (
            <SectionList
     renderItem={({item}) => <Cell deg={true}  name={item.name} other={item.other}/>}
     renderSectionHeader={({section}) => <ListHead a=" "/>}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{name:"某人", key: 'A',dsc:'微信号：jiumogaoao',img:'http://#'}], key: 'A',renderItem:({item})=><PeopleCell name={item.name} dsc={item.dsc} img={item.img}/>},
     {data: [{name:"钱包", key: 'B',dsc:'bb',other:(<Icon name="qianbao" style={[styles.icon,{color:"blue"}]}/>)}], key: 'B'},
     {data: [{name:"收藏", key: 'C',dsc:'cc',other:(<View style={styles.svg}><ShouCang w={40} h={40} s={0.6}/></View>)},{name:"相册", key: 'CC',dsc:'cc',other:(<Icon name="xiangche" style={[styles.icon,{color:"blue"}]}/>)},{name:"卡包", key: 'CCC',dsc:'cc',other:(<View style={styles.svg}><KaBao w={40} h={40} s={0.6}/></View>)},{name:"表情", key: 'CCCC',dsc:'cc',other:(<Icon name="biaoqing" style={[styles.icon,{color:"#fff",backgroundColor:"yellow",borderRadius:40}]}/>)}], key: 'C'},
     {data: [{name:"设置", key: 'D',dsc:'dd',other:(<Icon name="shezhi" style={[styles.icon,{color:"blue"}]}/>)}], key: 'D'}
   ]}
   />
         );
   }
}

export default Mine;