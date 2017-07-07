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


class Found extends Component {
   constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
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
});
  }
   render() {
    
      return (
		  <SectionList
	   renderItem={({item}) => <Cell dsc={item.dsc} deg={true}  name={item.name} other={item.other}/>}
	   renderSectionHeader={({section}) => <ListHead a=" "/>}
	   sections={[ // 不同section渲染相同类型的子组件
		   {data: [{name:"朋友圈", key: 'A',icon:'pengyouquan',other:(<View style={[this.styles.svg]}><PengYouQuan w={parseInt(40*w)} h={parseInt(40*w)} s={0.6}/></View>)}], key: 'A'},
	   {data: [{name:"扫一扫", key: 'B',other:(<Icon name="saoyisao" style={[this.styles.icon,{color:'blue'}]}/>)},{name:"摇一摇", key: 'BB',other:(<Icon name="yaoyiyao" style={[this.styles.icon,{color:'blue'}]}/>)}], key: 'B'},
	   {data: [{name:"附近的人", key: 'C',other:(<Icon name="fujinderen" style={[this.styles.icon,{color:'blue'}]}/>)},{name:"漂流瓶", key: 'CC',other:(<Icon name="piaoliuping" style={[this.styles.icon,{color:'blue'}]}/>)}], key: 'C'},
	   {data: [{name:"购物", key: 'D',icon:'gouwu',other:(<Icon name="gouwu" style={[this.styles.icon,{color:'red'}]}/>)},{name:"游戏", key: 'DD',icon:'youxi',other:(<View style={[this.styles.svg]}><YouXi w={parseInt(40*w)} h={parseInt(40*w)} s={0.6}/></View>)}], key: 'D'},
	   {data: [{name:"小程序", key: 'E',other:(<Icon name="xiaochengxu" style={[this.styles.icon,{color:'blue'}]}/>)}], key: 'E'}
   ]}
   />
         );
   }
}

export default Found;