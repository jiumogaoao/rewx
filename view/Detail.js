import React, { Component } from 'react';
import {
   Text,
   View,
   SectionList,
   StyleSheet,
   Button
} from 'react-native';

import Cell from '../modules/Cell';
import LabelCell from '../modules/LabelCell';
import PeopleCell from '../modules/PeopleCell';
import Icon from 'react-native-vector-icons-iconfont/IconFont';



class Detail extends Component {
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
      <View>
		  <SectionList
	   renderItem={({item}) => <LabelCell deg={item.deg} name={item.name} dsc={item.dsc} pic={item.pic}/>}
	   renderSectionHeader={({section}) => <View style={{height:parseInt(38*w),width:'100%'}}/>}
	   sections={[ // 不同section渲染相同类型的子组件
		   {data: [{key:'A'}], key: 'A',renderItem:({item}) => <PeopleCell img='https://facebook.github.io/react/img/logo_og.png' name={this.props.navigation.state.params.name} dsc='dsfdfds'/>},
	   {data: [
      {key:'B',name:'设置备注和标签',deg:true},
      {key:'BB',name:'电话号码',dsc:'18520408028',deg:false}
      ], key: 'B'},
	   {data: [{key:'C',name:'地区',dsc:'广东 深圳',deg:false},{key:'CC',name:'个人相册',dsc:'',pic:[{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'}],deg:true},{key:'CCC',name:'更多',deg:true}], key: 'C'}
   ]}
   />
   {this.props.navigation.state.params.type==0?(<View style={{width:parseInt(643*w),height:parseInt(91*w),marginLeft:'auto',marginRight:'auto',marginTop:parseInt(20*w)}}>
      <Button title='添加好友' color='#1aac19'/>
    </View>):(<View style={{width:parseInt(643*w),height:parseInt(91*w),marginLeft:'auto',marginRight:'auto',marginTop:parseInt(20*w)}}>
      <Button title='发送消息' color='#1aac19'/>
    </View>)}
    
    </View>
         );
   }
}

export default Detail;