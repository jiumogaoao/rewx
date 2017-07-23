import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   FlatList,
   StatusBar
} from 'react-native';

import AlbumCell from '../modules/AlbumCell';

class Album extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({

})
  }
  static navigationOptions = ({ navigation }) => {
      return {
         title: '相册'

      };
   };
   render() {
    
      return (
            <View style={{backgroundColor:'#fff'}}>
            <StatusBar backgroundColor="#000"/>
            <FlatList
                  data={[
                    {key:'head',pic:'https://facebook.github.io/react/img/logo_og.png',name:'dsd',head:'https://facebook.github.io/react/img/logo_og.png'},
                    {key:'A',day:'今天',list:[]},
                    {key:'B',day:'31',month:'二月',list:[{pic:[{url:'https://facebook.github.io/react/img/logo_og.png'}],dsc:'去玩了'}]},
                    {key:'C',day:'30',month:'二月',list:[{pic:[{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'}],dsc:'去玩了'},{pic:[{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'}],dsc:'去玩了'}]},
                    {key:'D',day:'29',month:'二月',list:[{pic:[{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'}],dsc:'去玩了'},{pic:[{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'},{url:'https://facebook.github.io/react/img/logo_og.png'}],dsc:'去玩了'}]},
                    ]} renderItem={({item}) => {return item.key=='head'?(<View style={{paddingBottom:parseInt(100*w)}}><Image source={{uri:item.pic}} style={{width: parseInt(720*w), height: parseInt(492*w)}}/><View style={{position: 'absolute',top:parseInt(435*w),left:parseInt(420*w),zIndex:3}}><Text style={{color:'#fff',fontSize:30,backgroundColor:'transparent'}}>{item.name}</Text></View><View style={{position: 'absolute',top:parseInt(392*w),left:parseInt(558*w),zIndex:3,borderWidth:2,borderColor:'#fff'}}><Image source={{uri:item.head}} style={{width: parseInt(137*w), height: parseInt(137*w)}}/></View></View>):(<AlbumCell data={item}/>)}} />
            </View>
         );
   }
}

export default Album;