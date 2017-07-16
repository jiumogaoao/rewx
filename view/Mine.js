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
})
  }
   render() {
    
      return (
            <SectionList
     renderItem={({item}) => <Cell deg={true}  name={item.name} other={item.other} go={item.go}/>}
     renderSectionHeader={({section}) => <ListHead a=" "/>}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{name:"某人", key: 'A',dsc:'微信号：jiumogaoao',img:'http://#'}], key: 'A',renderItem:({item})=><PeopleCell name={item.name} dsc={item.dsc} img={item.img}/>},
     {data: [{name:"钱包", key: 'B',dsc:'bb',other:(<Icon name="qianbao" style={[this.styles.icon,{color:"#0faeff"}]}/>),go:()=>this.props.navigation.navigate('Password',{})}], key: 'B'},
     {data: [
      {name:"收藏", key: 'C',dsc:'cc',other:(<View style={this.styles.svg}><ShouCang s={0.035}/></View>)},
      {name:"相册", key: 'CC',dsc:'cc',other:(<Icon name="xiangche" style={[this.styles.icon,{color:"#0faeff"}]}/>),go:()=>this.props.navigation.navigate('Album',{})},
      {name:"卡包", key: 'CCC',dsc:'cc',other:(<View style={this.styles.svg}><KaBao s={0.035}/></View>)},
      {name:"表情", key: 'CCCC',dsc:'cc',other:(<Icon name="biaoqing" style={[this.styles.icon,{color:"#fff",backgroundColor:"#f9ca08",borderRadius:parseInt(40*w)}]}/>)}
      ], key: 'C'},
     {data: [{name:"设置", key: 'D',dsc:'dd',other:(<Icon name="shezhi" style={[this.styles.icon,{color:"#0faeff"}]}/>)}], key: 'D'}
   ]}
   />
         );
   }
}

export default Mine;