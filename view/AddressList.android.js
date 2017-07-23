import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   SectionList
} from 'react-native';

import AddressCell from '../modules/AddressCell';
import ListHead from '../modules/ListHead';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import Search from '../modules/Search';
class AddressList extends Component {
   constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
  icon:{
    width:parseInt(68*w),height:parseInt(68*w),marginLeft:parseInt(10*w),marginTop:parseInt(18*w),color:'#fff',fontSize:parseInt(40*w),lineHeight:parseInt(48*w),textAlign:'center'
  },
  right:{textAlign:'center',fontSize:parseInt(20*w),backgroundColor:'transparent'}
})
  }
   render() {
    
      return (
            <View style={{flex:1}}>
            <Search/>
            <View style={{position:'absolute',top:parseInt(150*w),right:parseInt(20*w),zIndex:3}}>
              <Text style={this.styles.right}>A</Text>
              <Text style={this.styles.right}>B</Text>
              <Text style={this.styles.right}>C</Text>
              <Text style={this.styles.right}>D</Text>
              <Text style={this.styles.right}>E</Text>
              <Text style={this.styles.right}>F</Text>
              <Text style={this.styles.right}>G</Text>
              <Text style={this.styles.right}>H</Text>
              <Text style={this.styles.right}>I</Text>
              <Text style={this.styles.right}>J</Text>
              <Text style={this.styles.right}>K</Text>
              <Text style={this.styles.right}>L</Text>
              <Text style={this.styles.right}>M</Text>
              <Text style={this.styles.right}>N</Text>
              <Text style={this.styles.right}>O</Text>
              <Text style={this.styles.right}>P</Text>
              <Text style={this.styles.right}>Q</Text>
              <Text style={this.styles.right}>R</Text>
              <Text style={this.styles.right}>S</Text>
              <Text style={this.styles.right}>T</Text>
              <Text style={this.styles.right}>U</Text>
              <Text style={this.styles.right}>V</Text>
              <Text style={this.styles.right}>W</Text>
              <Text style={this.styles.right}>X</Text>
              <Text style={this.styles.right}>Y</Text>
              <Text style={this.styles.right}>Z</Text>
            </View>
            <SectionList style={{flex:1}}
              renderItem={({item}) => <AddressCell name={item.name} other={item.other} p={item.p}/>}
              renderSectionHeader={({section}) => section.nohead?null:<ListHead a={section.key}/>}
              sections={[ // 不同section渲染相同类型的子组件
                {data: [
                  {name:"新的朋友", key: 'A',other:(<Icon name="xinpengyou" style={[this.styles.icon,{backgroundColor:'#f59f48'}]}/>)},
                  {name:"群聊", key: 'Ab',other:(<Icon name="qunliao" style={[this.styles.icon,{backgroundColor:'#1aac1b'}]}/>)},
                  {name:"标签", key: 'Ac',other:(<Icon name="biaoqian" style={[this.styles.icon,{backgroundColor:'#1c84e5'}]}/>)},
                  {name:"公众号", key: 'Ae',other:(<Icon name="gongzonghao" style={[this.styles.icon,{backgroundColor:'#2880d7'}]}/>)}
                  ], key: 'A0',nohead:true},
                {data: [{name:"a", key: 'A',p:()=>{this.props.navigation.navigate('Detail', {name: 'a',type:1})}}], key: 'A'},
                {data: [{name:"b", key: 'B',p:()=>{this.props.navigation.navigate('Detail', {name: 'b',type:1})}}], key: 'B'},
                {data: [{name:"c", key: 'C',p:()=>{this.props.navigation.navigate('Detail', {name: 'c',type:1})}}], key: 'C'},
                {data: [{name:"d", key: 'D',p:()=>{this.props.navigation.navigate('Detail', {name: 'd',type:1})}}], key: 'D'},
                {data: [{name:"e", key: 'E',p:()=>{this.props.navigation.navigate('Detail', {name: 'e',type:1})}}], key: 'E'},
                {data: [{name:"f", key: 'F',p:()=>{this.props.navigation.navigate('Detail', {name: 'f',type:1})}}], key: 'F'},
                {data: [{name:"g", key: 'G',p:()=>{this.props.navigation.navigate('Detail', {name: 'g',type:1})}}], key: 'G'},
                {data: [{name:"h", key: 'H',p:()=>{this.props.navigation.navigate('Detail', {name: 'h',type:1})}}], key: 'H'},
                {data: [{name:"i", key: 'I',p:()=>{this.props.navigation.navigate('Detail', {name: 'i',type:1})}}], key: 'I'},
                {data: [{name:"j", key: 'J',p:()=>{this.props.navigation.navigate('Detail', {name: 'j',type:1})}}], key: 'J'},
                {data: [{name:"k", key: 'K',p:()=>{this.props.navigation.navigate('Detail', {name: 'k',type:1})}}], key: 'K'},
                {data: [{name:"l", key: 'L',p:()=>{this.props.navigation.navigate('Detail', {name: 'l',type:1})}}], key: 'L'},
                {data: [{name:"m", key: 'M',p:()=>{this.props.navigation.navigate('Detail', {name: 'm',type:1})}}], key: 'M'},
                {data: [{name:"n", key: 'N',p:()=>{this.props.navigation.navigate('Detail', {name: 'n',type:1})}}], key: 'N'},
                {data: [{name:"o", key: 'O',p:()=>{this.props.navigation.navigate('Detail', {name: 'o',type:1})}}], key: 'O'},
                {data: [{name:"p", key: 'P',p:()=>{this.props.navigation.navigate('Detail', {name: 'p',type:1})}}], key: 'P'},
                {data: [{name:"q", key: 'Q',p:()=>{this.props.navigation.navigate('Detail', {name: 'q',type:1})}}], key: 'Q'},
                {data: [{name:"r", key: 'R',p:()=>{this.props.navigation.navigate('Detail', {name: 'r',type:1})}}], key: 'R'},
                {data: [{name:"s", key: 'S',p:()=>{this.props.navigation.navigate('Detail', {name: 's',type:1})}}], key: 'S'},
                {data: [{name:"t", key: 'T',p:()=>{this.props.navigation.navigate('Detail', {name: 't',type:1})}}], key: 'T'},
                {data: [{name:"u", key: 'U',p:()=>{this.props.navigation.navigate('Detail', {name: 'u',type:1})}}], key: 'U'},
                {data: [{name:"v", key: 'V',p:()=>{this.props.navigation.navigate('Detail', {name: 'v',type:1})}}], key: 'V'},
                {data: [{name:"w", key: 'W',p:()=>{this.props.navigation.navigate('Detail', {name: 'w',type:1})}}], key: 'W'},
                {data: [{name:"x", key: 'X',p:()=>{this.props.navigation.navigate('Detail', {name: 'x',type:1})}}], key: 'X'},
                {data: [{name:"y", key: 'Y',p:()=>{this.props.navigation.navigate('Detail', {name: 'y',type:1})}}], key: 'Y'},
                {data: [{name:"z", key: 'Z',p:()=>{this.props.navigation.navigate('Detail', {name: 'z',type:1})}}], key: 'Z'}
              ]}
            />
            </View>
         );
   }
}

export default AddressList;