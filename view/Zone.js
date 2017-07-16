import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
   TouchableOpacity,
   Image,
   FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import FriendGroupCell from '../modules/FriendGroupCell';
class Zone extends React.Component {
   static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      const isInfo = state.params.mode === 'info';
      const {user} = state.params;
      return {
         title: '朋友圈',
         headerRight: (
            <TouchableOpacity onPress={()=>{}}>
            <Icon name="paise" style={{color:'#fff',fontSize:parseInt(35*w),top:-parseInt(30*w),right:parseInt(0*w),width:parseInt(40*w)}}/>
          </TouchableOpacity>
         ),
      };
   };
   render() {
      return (
         <View style={{backgroundColor:'#fff'}}>
            <FlatList
                  data={[
                     {key:'head',pic:'https://facebook.github.io/react/img/logo_og.png',name:'dsd',head:'https://facebook.github.io/react/img/logo_og.png'},
                     {key:'a',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png',w:600,h:600}
                     ],time:'昨天',praise:[{name:'某人'}],comment:[{type:0,from:'某人',to:'某个人',dsc:'早上好'},{type:1,from:'某个人',to:'某人',dsc:'早毛'}]},
                     {key:'b',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'}
                     ],place:'某个地方',time:'昨天'},
                     {key:'c',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'}
                     ],time:'昨天'},
                     {key:'d',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'}
                     ],time:'昨天'},
                     {key:'e',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'}
                     ],time:'昨天'},
                     {key:'f',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'},
                        {url:'https://facebook.github.io/react/img/logo_og.png'}
                     ],time:'昨天'},
                     ]}
                  renderItem={({item}) => {return item.key=='head'?(<View style={{paddingBottom:parseInt(100*w)}}><Image source={{uri:item.pic}} style={{width: parseInt(720*w), height: parseInt(492*w)}}/><View style={{position: 'absolute',top:parseInt(435*w),left:parseInt(420*w),zIndex:3}}><Text style={{color:'#fff',fontSize:30}}>{item.name}</Text></View><View style={{position: 'absolute',top:parseInt(392*w),left:parseInt(558*w),zIndex:3,borderWidth:2,borderColor:'#fff'}}><Image source={{uri:item.head}} style={{width: parseInt(137*w), height: parseInt(137*w)}}/></View></View>):(<FriendGroupCell data={item}/>)}}
                />
         </View>
      );
   }
}

export default Zone;