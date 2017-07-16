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
    width:parseInt(45*w),
    height:parseInt(50*w),
    textAlign:'center',
    fontSize:parseInt(42*w),
    lineHeight:parseInt(42*w),
    marginTop:parseInt(16*w),
    marginLeft:parseInt(5*w)
  },
  svg:{
    marginLeft:parseInt(5*w),
    marginTop:parseInt(25*w)
  }
});
  }
   render() {
    
      return (
		  <SectionList
	   renderItem={({item}) => <Cell dsc={item.dsc} deg={true}  name={item.name} other={item.other} go={item.go}/>}
	   renderSectionHeader={({section}) => <ListHead a=" "/>}
	   sections={[ // 不同section渲染相同类型的子组件
		   {data: [{name:"朋友圈", key: 'A',icon:'pengyouquan',other:(<View style={[this.styles.svg]}><PengYouQuan s={0.035}/></View>),go:()=>{this.props.navigation.navigate('Zone', {})}}], key: 'A'},
	   {data: [{name:"扫一扫", key: 'B',other:(<Icon name="saoyisao" style={[this.styles.icon,{color:'#07acfb'}]}/>),go:()=>{}},{name:"摇一摇", key: 'BB',other:(<Icon name="yaoyiyao" style={[this.styles.icon,{color:'#07acfb'}]}/>),go:()=>{}}], key: 'B'},
	   {data: [{name:"附近的人", key: 'C',other:(<Icon name="fujinderen" style={[this.styles.icon,{color:'#07acfb'}]}/>),go:()=>{}},{name:"漂流瓶", key: 'CC',other:(<Icon name="piaoliuping" style={[this.styles.icon,{color:'#07acfb'}]}/>),go:()=>{}}], key: 'C'},
	   {data: [{name:"购物", key: 'D',icon:'gouwu',other:(<Icon name="gouwu" style={[this.styles.icon,{color:'#ff5b5e'}]}/>),go:()=>{}},{name:"游戏", key: 'DD',icon:'youxi',other:(<View style={[this.styles.svg]}><YouXi s={0.035}/></View>),go:()=>{}}], key: 'D'},
	   {data: [{name:"小程序", key: 'E',other:(<Icon name="xiaochengxu" style={[this.styles.icon,{color:'#778ccf'}]}/>),go:()=>{}}], key: 'E'}
   ]}
   />
         );
   }
}

export default Found;