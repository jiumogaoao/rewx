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
  right:{textAlign:'center'}
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
              renderItem={({item}) => <AddressCell name={item.name} other={item.other}/>}
              renderSectionHeader={({section}) => section.nohead?null:<ListHead a={section.key}/>}
              sections={[ // 不同section渲染相同类型的子组件
                {data: [
                  {name:"新的朋友", key: 'A',other:(<Icon name="xinpengyou" style={[this.styles.icon,{backgroundColor:'#f59f48'}]}/>)},
                  {name:"群聊", key: 'Ab',other:(<Icon name="qunliao" style={[this.styles.icon,{backgroundColor:'#1aac1b'}]}/>)},
                  {name:"标签", key: 'Ac',other:(<Icon name="biaoqian" style={[this.styles.icon,{backgroundColor:'#1c84e5'}]}/>)},
                  {name:"公众号", key: 'Ae',other:(<Icon name="gongzonghao" style={[this.styles.icon,{backgroundColor:'#2880d7'}]}/>)}
                  ], key: 'A0',nohead:true},
                {data: [{name:"a", key: 'A'}], key: 'A'},
                {data: [{name:"b", key: 'B'}], key: 'B'},
                {data: [{name:"c", key: 'C'}], key: 'C'},
                {data: [{name:"d", key: 'D'}], key: 'D'},
                {data: [{name:"e", key: 'E'}], key: 'E'},
                {data: [{name:"f", key: 'F'}], key: 'F'},
                {data: [{name:"g", key: 'G'}], key: 'G'},
                {data: [{name:"h", key: 'H'}], key: 'H'},
                {data: [{name:"i", key: 'I'}], key: 'I'},
                {data: [{name:"j", key: 'J'}], key: 'J'},
                {data: [{name:"k", key: 'K'}], key: 'K'},
                {data: [{name:"l", key: 'L'}], key: 'L'},
                {data: [{name:"m", key: 'M'}], key: 'M'},
                {data: [{name:"n", key: 'N'}], key: 'N'},
                {data: [{name:"o", key: 'O'}], key: 'O'},
                {data: [{name:"p", key: 'P'}], key: 'P'},
                {data: [{name:"q", key: 'Q'}], key: 'Q'},
                {data: [{name:"r", key: 'R'}], key: 'R'},
                {data: [{name:"s", key: 'S'}], key: 'S'},
                {data: [{name:"t", key: 'T'}], key: 'T'},
                {data: [{name:"u", key: 'U'}], key: 'U'},
                {data: [{name:"v", key: 'V'}], key: 'V'},
                {data: [{name:"w", key: 'W'}], key: 'W'},
                {data: [{name:"x", key: 'X'}], key: 'X'},
                {data: [{name:"y", key: 'Y'}], key: 'Y'},
                {data: [{name:"z", key: 'Z'}], key: 'Z'}
              ]}
            />
            </View>
         );
   }
}

export default AddressList;