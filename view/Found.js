import React, { Component } from 'react';
import {
   Text,
   View,
   SectionList,
   StyleSheet
} from 'react-native';

import Cell from '../modules/Cell';
import ListHead from '../modules/ListHead';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import PengYouQuan from '../svg/PengYouQuan';
import YouXi from '../svg/YouXi';
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
class Found extends Component {
   
   render() {
      return (
		  <SectionList
	   renderItem={({item}) => <Cell dsc={item.dsc} deg={true}  name={item.name} other={item.other}/>}
	   renderSectionHeader={({section}) => <ListHead a=" "/>}
	   sections={[ // 不同section渲染相同类型的子组件
		   {data: [{name:"朋友圈", key: 'A',icon:'pengyouquan',other:(<View style={[styles.svg]}><PengYouQuan w={40} h={40} s={0.6}/></View>)}], key: 'A'},
	   {data: [{name:"扫一扫", key: 'B',other:(<Icon name="saoyisao" style={[styles.icon,{color:'blue'}]}/>)},{name:"摇一摇", key: 'BB',other:(<Icon name="yaoyiyao" style={[styles.icon,{color:'blue'}]}/>)}], key: 'B'},
	   {data: [{name:"附近的人", key: 'C',other:(<Icon name="fujinderen" style={[styles.icon,{color:'blue'}]}/>)},{name:"漂流瓶", key: 'CC',other:(<Icon name="piaoliuping" style={[styles.icon,{color:'blue'}]}/>)}], key: 'C'},
	   {data: [{name:"购物", key: 'D',icon:'gouwu',other:(<Icon name="gouwu" style={[styles.icon,{color:'red'}]}/>)},{name:"游戏", key: 'DD',icon:'youxi',other:(<View style={[styles.svg]}><YouXi w={40} h={40} s={0.6}/></View>)}], key: 'D'},
	   {data: [{name:"小程序", key: 'E',other:(<Icon name="xiaochengxu" style={[styles.icon,{color:'blue'}]}/>)}], key: 'E'}
   ]}
   />
         );
   }
}

export default Found;