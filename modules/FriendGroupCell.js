import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight,
   Image
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class FriendGroupCell extends Component {
    constructor(props) {
      super(props);
      this.styles = StyleSheet.create({
        pic:{
          width:parseInt(152*w),
          height:parseInt(152*w),
          marginRight:parseInt(10*w),
          marginBottom:parseInt(10*w)
        },
        commentList:{
            flexDirection:'row',
            flexWrap:'wrap',
            marginTop:parseInt(18*w)
          },
        commentText:{
            fontSize:parseInt(26*w),
            color:'#2e2e2e'
          },
        commentPeople:{
            color:'#56607b'
          }
      })
    }
   picRender(data){
    const itemArr = [];
    if(data.pic){

                  if(data.pic.length==1){
                    var sw=0;
                    var sh=0;
                    if(data.pic[0].w<=500){
                      sw=data.pic[0].w;
                      sh=data.pic[0].h
                    }else{
                      sw=500;
                      sh=data.pic[0].h*(500/data.pic[0].w)
                    }
                    itemArr.push(<Image source={{uri: data.pic[0].url}}
       style={{width: parseInt(sw*w), height: parseInt(sh*w),marginTop:parseInt(30*w)}} />)
                  }else if(data.pic.length>=2){
                    if(data.pic.length==4){
                      itemArr.push(<View>
                        <View style={{flexDirection:'row'}}>
                          <Image source={{uri: data.pic[0].url}} style={this.styles.pic} />
                          <Image source={{uri: data.pic[1].url}} style={this.styles.pic} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Image source={{uri: data.pic[2].url}} style={this.styles.pic} />
                          <Image source={{uri: data.pic[3].url}} style={this.styles.pic} />
                      </View>
                      </View>)
                    }else{
                      {
                        for (var value of data.pic) {
                                                itemArr.push(<Image source={{uri: value.url}}
                               style={this.styles.pic} />)
                                              }
                      }
                    }
                  }
                }
      return itemArr;
   };
   drawprase(data){
    const itemArr = [];
        for (var p of data.praise) {
          itemArr.push(<Text style={{marginLeft:parseInt(10*w),color:'#576b9d',fontSize:parseInt(25*w)}}>{p.name}</Text>)
                                              }
    return itemArr;
   }
   drawComment(data){
    const itemArr = [];
    for (var c of data.comment) {
          itemArr.push(<View>
          {c.type==1?(<View style={this.styles.commentList}><Text style={[this.styles.commentText,this.styles.commentPeople]}>{c.from}</Text><Text style={this.styles.commentText}>回复</Text><Text style={[this.styles.commentText,this.styles.commentPeople]}>{c.to}</Text><Text style={this.styles.commentText}>:{c.dsc}</Text></View>):(<View style={this.styles.commentList}><Text style={[this.styles.commentText,this.styles.commentPeople]}>{c.from}</Text><Text style={this.styles.commentText}>:{c.dsc}</Text></View>)}
          </View>)
                                              }
    return itemArr;
   };
   drawCommentFrame(data){
    const itemArr = [];
      if((data.praise&&data.praise.length)||(data.comment&&data.comment.length)){
                  itemArr.push(<Icon name="shangjiao" style={{color:'#f5f5f7',fonSize:parseInt(20*w),lineHeight:parseInt(20*w),marginLeft:parseInt(18*w)}}/>)
                  itemArr.push(<View style={{backgroundColor:'#f5f5f7',width:parseInt(580*w),padding:parseInt(10*w),marginTop:parseInt(-4*w)}}>
                    {
                      (data.praise&&data.praise.length)?(<View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <Icon name="zan" style={{fontSize:parseInt(24*w),lineHeight:parseInt(26*w),color:'#576b9d'}}/>
                        {
                          this.drawprase(data)
                        }
                        </View>):null
                      }
                      {
                      (data.comment&&data.comment.length)?(<View>
                        {this.drawComment(data)}
                      </View>):null
                    }
                  </View>)
                  
                  return itemArr;
                }
   }
   render() {
      var data=this.props.data;
      return (
            <View style={{flexDirection:'row',paddingBottom:parseInt(33*w),borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
              <Image source={{uri: this.props.data.head}}
       style={{width: parseInt(80*w), height: parseInt(80*w),marginTop:parseInt(30*w),marginLeft:parseInt(22*w)}} />
              <View style={{flex:1,marginTop:parseInt(30*w),marginLeft:parseInt(21*w)}}>
                <Text style={{fontSize:parseInt(26*w),color:'#6470a4'}}>{this.props.data.name}</Text>
                {this.props.data.dsc?(<Text style={{fontSize:parseInt(26*w),color:'#000'}}>{this.props.data.dsc}</Text>):null}
                <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:22}}>
                {this.picRender(this.props.data)}
                </View>
                {this.props.data.place?(<Text style={{fontSize:parseInt(22*w),color:'#6a70a4'}}>{this.props.data.place}</Text>):null}
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:parseInt(18*w)}}>
                  <Text style={{fontSize:parseInt(22*w)}}>{this.props.data.time}</Text>
                  <Icon name="pinglun" style={{fontSize:parseInt(22*w),lineHeight:parseInt(24*w),color:'#94aad1',marginRight:parseInt(25*w)}}/>
                </View>
                {
                  this.drawCommentFrame(this.props.data)
              }
              </View>
            </View>
         );
   }
}

export default FriendGroupCell;