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

class Mine extends Component {
   render() {
    const styles = StyleSheet.create({
  icon:{
    width:parseInt(40*w),
    height:parseInt(40*w),
    textAlign:'center',
    fontSize:parseInt(30*w),
    lineHeight:parseInt(30*w),
    marginTop:parseInt(10*w),
    marginLeft:parseInt(10*w)
  },
  svg:{
    marginLeft:parseInt(9*w),
    marginTop:parseInt(9*w)
  }
})
      return (
            <SectionList
     renderItem={({item}) => <Cell deg={true}  name={item.name} other={item.other}/>}
     renderSectionHeader={({section}) => <ListHead a=" "/>}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{name:"某人", key: 'A',dsc:'微信号：jiumogaoao',img:'http://#'}], key: 'A',renderItem:({item})=><PeopleCell name={item.name} dsc={item.dsc} img={item.img}/>},
     {data: [{name:"钱包", key: 'B',dsc:'bb',other:(<Icon name="qianbao" style={[styles.icon,{color:"blue"}]}/>)}], key: 'B'},
     {data: [{name:"收藏", key: 'C',dsc:'cc',other:(<View style={styles.svg}><ShouCang w={parseInt(40*w)} h={parseInt(40*w)} s={0.6}/></View>)},{name:"相册", key: 'CC',dsc:'cc',other:(<Icon name="xiangche" style={[styles.icon,{color:"blue"}]}/>)},{name:"卡包", key: 'CCC',dsc:'cc',other:(<View style={styles.svg}><KaBao w={parseInt(40*w)} h={parseInt(40*w)} s={0.6}/></View>)},{name:"表情", key: 'CCCC',dsc:'cc',other:(<Icon name="biaoqing" style={[styles.icon,{color:"#fff",backgroundColor:"yellow",borderRadius:parseInt(40*w)}]}/>)}], key: 'C'},
     {data: [{name:"设置", key: 'D',dsc:'dd',other:(<Icon name="shezhi" style={[styles.icon,{color:"blue"}]}/>)}], key: 'D'}
   ]}
   />
         );
   }
}

export default Mine;