import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class AlbumPic extends Component{
   constructor(props) {
      super(props);
      this.styles = StyleSheet.create({
        single:{
          width:parseInt(144*w),
          height:parseInt(127*w)
        },
        double:{
          width:parseInt(70*w),
          height:parseInt(127*w),
          marginRight:parseInt(5*w)
        },
        four:{
          width:parseInt(70*w),
          height:parseInt(62*w),
          marginRight:parseInt(5*w),
          marginBottom:parseInt(5*w)
        }
      })
    }
  render (){
    if(this.props.data.length==1){
      return (<View><Image source={{uri:this.props.data[0].url}} style={this.styles.single}/></View>);
    }else if(this.props.data.length==2){
      return (<View style={{flexDirection:'row'}}><Image source={{uri:this.props.data[0].url}} style={this.styles.double}/><Image source={{uri:this.props.data[1].url}} style={this.styles.double}/></View>);
    }else if(this.props.data.length==3){
      return (<View style={{flexDirection:'row'}}><View><Image source={{uri:this.props.data[0].url}} style={this.styles.double}/></View><View><Image source={{uri:this.props.data[1].url}} style={this.styles.four}/><Image source={{uri:this.props.data[2].url}} style={this.styles.four}/></View></View>);
    }else if(this.props.data.length>=4){
      return (<View><View style={{flexDirection:'row'}}><Image source={{uri:this.props.data[0].url}} style={this.styles.four}/><Image source={{uri:this.props.data[1].url}} style={this.styles.four}/></View><View style={{flexDirection:'row'}}><Image source={{uri:this.props.data[2].url}} style={this.styles.four}/><Image source={{uri:this.props.data[3].url}} style={this.styles.four}/></View></View>);
    }
  }
}

class AlbumPerCell extends Component{
  render (){
    return (<View style={{flexDirection:'row',marginBottom:parseInt(8*w)}}>
              <AlbumPic data={this.props.data.pic}/>
              <View style={{marginLeft:parseInt(10*w),justifyContent:'space-between'}}>
                <Text style={{fontSize:parseInt(26*w),color:'#000'}}>{this.props.data.dsc}</Text>
                {this.props.data.pic.length>4?(<Text style={{paddingBottom:parseInt(4*w)}}>共{this.props.data.pic.length}张</Text>):null}
              </View>
      </View>);
  }
}

class AlbumCell extends Component {
   render() {
      const itemArr = [];
      for(var list of this.props.data.list){
      itemArr.push(<AlbumPerCell data={list}/>)
    }
      return (
            <View style={{backgroundColor:"#fff",marginBottom:parseInt(56*w)}}>
              <TouchableOpacity onPress={this.props.data.go}>
                <View style={{flexDirection:'row'}}>
                  {this.props.data.day=='今天'?(<View style={{width:parseInt(160*w)}}><Text style={{fontSize:parseInt(52*w),textAlign:'center',color:'#000',lineHeight:parseInt(52*w)}}>今天</Text></View>):(<View style={{flexDirection:'row',width:parseInt(160*w)}}><Text style={{fontSize:parseInt(50*w),color:'#000',marginLeft:parseInt(30*w),lineHeight:parseInt(40*w)}}>{this.props.data.day}</Text><Text style={{fontSize:parseInt(21*w),color:'#000',lineHeight:parseInt(45*w)}}>{this.props.data.month}</Text></View>)}
                  <View>
                    {(this.props.data.day=='今天'&&!this.props.data.list.length)?(<View style={{width:parseInt(144*w),height:parseInt(127*w),backgroundColor:'#d7d7d7'}}><Icon name="paise" style={{color:'#fff',textAlign:'center',fontSize:parseInt(70*w),lineHeight:parseInt(95*w)}}/></View>):(<View>{itemArr}</View>)}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
         );
   }
}

export default AlbumCell;