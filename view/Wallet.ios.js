import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   SectionList,
   StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Wallet extends Component {
  constructor(props) {
            //加载父类方法,不可省略
            super(props);
            //设置初始的状态
            this.state = {};
            this.style = StyleSheet.create({
              headIcon:{
                color:'#fff',textAlign:'center',fontSize:parseInt(67*w),lineHeight:parseInt(72*w),marginTop:parseInt(62*w),height:parseInt(75*w)
              },
              headText:{
                color:'#fff',textAlign:'center',fontSize:parseInt(29*w),marginTop:parseInt(33*w)
              }
            })
        }

  static navigationOptions = ({ navigation }) => {
      return {
         title: '钱包'
      };
   };

   render() {
    
      return (
            <View><StatusBar backgroundColor="#000"/><SectionList
     renderItem={({item}) => <View style={{width:parseInt(240*w),height:parseInt(216*w),borderWidth:1,borderColor:'#e5e5e5',marginLeft:-1,marginTop:-1,backgroundColor:'#fff'}}><Icon name={item.icon} style={{color:item.color,fontSize:parseInt(46*w),lineHeight:parseInt(50*w),height:parseInt(52*w),textAlign:'center',marginTop:parseInt(50*w)}}/><Text style={{textAlign:'center',fontSize:parseInt(25*w),color:'#000',marginTop:parseInt(29*w)}}>{item.name}</Text></View>}
     renderSectionHeader={({section}) => section.key=='A'?null:<View style={{width:parseInt(720*w),height:parseInt(76*w),backgroundColor:'#f0eff5'}}><Text style={{fontSize:parseInt(24*w),color:'#6f6e74',lineHeight:parseInt(58*w),marginLeft:parseInt(30*w)}}>{section.name}</Text></View>}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{name:" ", key: 'A',icon:'pengyouquan'}], key: 'A',renderItem:(item)=>(
          <View style={{height:parseInt(286*w),width:parseInt(720*w),backgroundColor:'#686f79',flexDirection:'row'}}>
          <View style={{flex:1}}><Icon name="shoufukuan" style={this.style.headIcon}/><Text style={this.style.headText}>收付款</Text></View>
          <View style={{flex:1}}><Icon name="lingqian" style={this.style.headIcon}/><Text style={this.style.headText}>零钱</Text></View>
          <View style={{flex:1}}><Icon name="yinghangka" style={this.style.headIcon}/><Text style={this.style.headText}>银行卡</Text></View>
          </View>),name:''},
     {data: [{name:"信用卡还款", key: 'B',icon:'xinyongka',color:'#11aa67'},{name:"微粒贷借钱", key: 'BB',icon:'jieqian',color:'#eb9242'},{name:"手机充值", key: 'BBB',icon:'congzhi',color:'#4189c4'},{name:"理财通", key: 'BBBB',icon:'licaitong',color:'#459cd2'},{name:"生活缴费", key: 'BBBBB',icon:'jiaofei',color:'#00b665'},{name:"Q币充值", key: 'BBBBBB',icon:'qbi',color:'#44a7eb'},{name:"城市服务", key: 'BBBBBBB',icon:'chengshi',color:'#49a87c'},{name:"腾讯公益", key: 'BBBBBBBB',icon:'gongyi',color:'#f56f70'}], key: 'B',name:'腾讯服务'},
     {data: [{name:"摩拜单车", key: 'C',icon:'mobai',color:'#f25f6f'}], key: 'C',name:'限时推广'},
     {data:[{name:"火车票机票", key: 'D',icon:'huochepiao',color:'#05b259'},{name:"滴滴出行", key: 'DD',icon:'didi',color:'#f29536'},{name:"京东优选", key: 'DDD',icon:'youxuan',color:'#ff4e66'},{name:"美团外卖", key: 'DDDD',icon:'meituan',color:'#f19333'},{name:"电影演出赛事", key: 'DDDDD',icon:'dianyingpiao',color:'#55709f'},{name:"吃喝玩乐", key: 'DDDDDD',icon:'dianping',color:'#f7982c'},{name:"酒店", key: 'DDDDDDD',icon:'yilong',color:'#f15e68'},{name:"蘑菇街女装", key: 'DDDDDDDD',icon:'jie',color:'#f16266'},{name:"58到家", key: 'DDDDDDDDD',icon:'daojia',color:'#f16067'}], key: 'D',name:'第三方服务'}
   ]} contentContainerStyle={{flexDirection: 'row',flexWrap: 'wrap',backgroundColor: '#FFFFFF'}}/></View>
         );
   }
}

export default Wallet;