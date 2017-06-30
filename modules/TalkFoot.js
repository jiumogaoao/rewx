import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   ScrollView,
   TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
import Face from '../svg/Face';
const styles = StyleSheet.create({
  svg:{
    marginLeft:40,
    marginTop:30
  }
})
class TalkFoot extends Component {
  constructor(props) {
       super(props);
       this.state = { state: 0 };//0:默认,1:表情,2:其他功能
     }
   renderScrollItem(list) {
      const itemArr = [];
      for(var i = 0; i < list.length; i++) {
      itemArr.push(
        <View style={{width:'25%'}}>
          <Icon name={list[i].icon} style={{width:80,height:80,backgroundColor:'#fff',marginLeft:35,textAlign:'center',fontSize:50,lineHeight:60,marginBottom:10,borderRadius:10,borderColor:'#999',borderWidth:1}}></Icon>
          <Text style={{textAlign:'center',marginBottom:10}}>{list[i].name}</Text>
        </View>
      );
    }
    return itemArr;
   }
   render() {
      return (
            <View style={{height : this.state.state==0?100:400,flexDirection:'column',borderTopColor:'#000',borderTopWidth:1,backgroundColor:'#eee'}}>
              <View style={{height:100,flexDirection:'row',justifyContent : 'space-between'}}>
                <TouchableHighlight onPress={() => this.setState({state: 0 })}>
                  <Icon name="yuying" style={{fontSize:40,lineHeight:40,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginTop:25}}/>
                </TouchableHighlight>
                <TextInput
                  style={{height: 60,flex:1,backgroundColor:'#fff',marginLeft:10,marginTop:20}}
                  placeholder="Type here to translate!"
                 />
                <TouchableHighlight onPress={() => this.setState({state: 1 })}>
                  <Icon name="biaoqing" style={{fontSize:40,lineHeight:40,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginTop:25}}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.setState({state: 2 })}>
                  <Icon name="jia" style={{fontSize:40,lineHeight:37,textAlign:'center',width:50,height:50,borderColor:'#000',borderWidth:1,borderRadius:50,marginLeft:10,marginRight:10,marginTop:25}}/>
                </TouchableHighlight>
              </View>
              {this.state.state==2?(
                <View style={{flex:1,flexDirection:'column'}}>
                <ScrollView
          //水平方向  
       horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                  <View style={{width:600,height:300,flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderScrollItem([{icon:'xiangche',name:'相册',key:'a'},{icon:'paise',name:'拍摄',key:'aa'},{icon:'shiping',name:'视频聊天',key:'aaa'},{icon:'weizhi',name:'位置',key:'aaaa'},{icon:'hongbao',name:'红包',key:'aaaaa'},{icon:'zhuanzhang',name:'转账',key:'aaaaaa'},{icon:'wo2',name:'个人名片',key:'aaaaaaa'},{icon:'yuying',name:'语音输入',key:'aaaaaaaa'}])}
                  </View>
                  <View style={{width:600,height:300,flexDirection:'row'}}>
                    {this.renderScrollItem([{icon:'shoucang',name:'收藏',key:'aaaaaaaaa'},{icon:'kaquan',name:'卡券',key:'aaaaaaaaaa'}])}
                  </View>
                </ScrollView>
              </View>
                ):null}
              {this.state.state==1?(
  <View style={{flex:1,flexDirection:'column'}}>
                  <ScrollView
            //水平方向  
         horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}> 
                    <View style={{width:600,height:300,flexDirection:'row',flexWrap:'wrap'}}>
                      <View style={styles.svg}>
                        <Face s={0.2} num={0}/>
                      </View>
                      
                      
                      <View style={styles.svg}><Face s={0.2} num={1}/></View>
                      <View style={styles.svg}><Face s={0.2} num={2}/></View>
                      <View style={styles.svg}><Face s={0.2} num={3}/></View>
                      <View style={styles.svg}><Face s={0.2} num={4}/></View>
                      <View style={styles.svg}><Face s={0.2} num={5}/></View>
                      <View style={styles.svg}><Face s={0.2} num={6}/></View>
                      <View style={styles.svg}><Face s={0.2} num={7}/></View>
                      <View style={styles.svg}><Face s={0.2} num={8}/></View>
                      <View style={styles.svg}><Face s={0.2} num={9}/></View>
                      <View style={styles.svg}><Face s={0.2} num={10}/></View>
                      <View style={styles.svg}><Face s={0.2} num={11}/></View>
                      <View style={styles.svg}><Face s={0.2} num={12}/></View>
                      <View style={styles.svg}><Face s={0.2} num={13}/></View>
                      <View style={styles.svg}><Face s={0.2} num={14}/></View>
                      <View style={styles.svg}><Face s={0.2} num={15}/></View>
                      <View style={styles.svg}><Face s={0.2} num={16}/></View>
                      <View style={styles.svg}><Face s={0.2} num={17}/></View>
                      <View style={styles.svg}><Face s={0.2} num={18}/></View>
                      <View style={styles.svg}><Face s={0.2} num={19}/></View>
                    </View>
                    <View style={{width:600,height:300,flexDirection:'row'}}>
                      
                      <View style={styles.svg}><Face s={0.2} num={20}/></View>
                      <View style={styles.svg}><Face s={0.2} num={21}/></View>
                      <View style={styles.svg}><Face s={0.2} num={22}/></View>
                    </View>
                  </ScrollView>
                </View>
                ):null}
              
            </View>
         );
   }
}

export default TalkFoot;