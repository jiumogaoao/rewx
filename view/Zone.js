import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
   TouchableOpacity,
   Image,
   FlatList,
   StatusBar,
   TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import FriendGroupCell from '../modules/FriendGroupCell';
var ImagePicker = require('react-native-image-picker');
var z=null;
class Zone extends React.Component {
   constructor(props) {
    super(props);
    z=this;
    this.state={
      comment:false,
      commentId:null,
      commentText:null,
      commentCallback:null,
      data:[
                     {key:'head',pic:'https://facebook.github.io/react/img/logo_og.png',name:'dsd',head:'https://facebook.github.io/react/img/logo_og.png'},
                     {key:'a',name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:'ss',pic:[
                        {url:'https://facebook.github.io/react/img/logo_og.png',w:600,h:600}
                     ],time:'昨天',praise:[{name:'某人',id:'a'}],comment:[{type:0,from:'某人',to:'某个人',dsc:'早上好'},{type:1,from:'某个人',to:'某人',dsc:'早毛'}]},
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
                     ],time:'昨天'}
                     ]
    }
  }
   static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      const isInfo = state.params.mode === 'info';
      const {user} = state.params;
      return {
         title: '朋友圈',
         headerRight: (
            <TouchableOpacity onPress={()=>{
               z.addZone();
            }}>
            <Icon name="paise" style={{color:'#fff',fontSize:parseInt(35*w),top:-parseInt(30*w),right:parseInt(0*w),width:parseInt(40*w)}}/>
          </TouchableOpacity>
         ),
      };
   };
   addZone(){
      ImagePicker.showImagePicker({
                          title: '上传图片',
                          takePhotoButtonTitle:'拍摄照片',
                          chooseFromLibraryButtonTitle:'从相册选择图片',
                          storageOptions: {
                            skipBackup: true,
                            path: 'images'
                          }
                        }, (response) => {

                          console.log(response);

                          if (response.didCancel) {
                            console.log('User cancelled image picker');
                          }
                          else if (response.error) {
                            console.log('ImagePicker Error: ', response.error);
                          }
                          else if (response.customButton) {
                            console.log('User tapped custom button: ', response.customButton);
                          }
                          else {
                            let source = { uri: response.uri };

                            // You can also display the image using data:
                            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                            this.props.navigation.navigate('AddZone',{pic:response.uri,callback:(data)=>{
                              this.state.data.push({key:'id_'+new Date().getTime(),name:'a',head:'https://facebook.github.io/react/img/logo_og.png',dsc:data.dsc,pic:data.pic,time:'刚刚'});
                            }})
                          }    
                        });
   }
   addComment(){
      var target=this.state.data.find((x)=>{return x.key==this.state.commentId})
      if(!target.comment){target.comment=[]}
      target.comment.push({type:0,from:'a',to:'某个人',dsc:this.state.commentText})
      this.setState({comment:false,
      commentId:null,
      commentText:null,
      data:this.state.data})
      this.state.commentCallback();
      this.state.commentCallback=null;
   }
   render() {
      return (
         <View style={{backgroundColor:'#fff'}}>
         <StatusBar backgroundColor="#000"/>
            <FlatList
                  data={this.state.data}
                  renderItem={({item}) => {return item.key=='head'?(<View style={{paddingBottom:parseInt(100*w)}}><Image source={{uri:item.pic}} style={{width: parseInt(720*w), height: parseInt(492*w)}}/><View style={{position: 'absolute',top:parseInt(415*w),left:parseInt(420*w),zIndex:3}}><Text style={{color:'#fff',fontSize:30}}>{item.name}</Text></View><View style={{position: 'absolute',top:parseInt(392*w),left:parseInt(558*w),zIndex:3,borderWidth:2,borderColor:'#fff'}}><Image source={{uri:item.head}} style={{width: parseInt(137*w), height: parseInt(137*w)}}/></View></View>):(<FriendGroupCell data={item} addComment={(id,callback)=>{this.setState({comment:true,
      commentId:id,commentCallback:callback})}}/>)}}
                />
            {this.state.comment?(<View style={{height:parseInt(86*w),width:'100%',backgroundColor:'#fafafa',borderTopwidth:1,borderTopColor:'#c4c4c4',position:'absolute',left:0,bottom:0,flexDirection:'row'}}>
               <TextInput autoFocus={this.state.comment} onBlur={()=>{this.setState({comment:false,commentId:null,commentCallback:null,commentText:null})}} onSubmitEditing={()=>{this.addComment()}} onChangeText={(text)=>{this.state.commentText=text}}
                  style={{height: parseInt(70*w),flex:1,backgroundColor:'#fff',marginLeft:parseInt(10*w),marginRight:parseInt(10*w),marginTop:parseInt(12*w),borderWidth:1,borderColor:'#e3e3e5',borderRadius:parseInt(5*w)}} underlineColorAndroid='transparent'
                 />
            </View>):null}    
            
         </View>
      );
   }
}

export default Zone;