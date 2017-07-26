import React from 'react';
import {
   View,
   Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration,
  Animated,
  Easing
} from 'react-native';
import Camera from 'react-native-camera';

class Qrcode extends React.Component {

   constructor(props) {
        super(props);
        this.camera = null;
        this.state = {
          fadeAnim: new Animated.Value(0)
        }
        this.transCode='';
    }

    componentDidMount() {
      this.animate()                                 // 开始执行动画
    }

    animate () {
      this.state.fadeAnim.setValue(0)
      Animated.timing(
        this.state.fadeAnim,                      // 动画中的变量值
        {
          toValue: parseInt(600*w), 
          duration: 2000 ,
          easing: Easing.linear                        // 透明度最终变为1，即完全不透明
        }
      ).start(() => this.animate())
    }

   render() {
      return (
          <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill} barcodeScannerEnabled={true}
                                onBarCodeRead={
                                    (e)=>this.barcodeReceived(e)
                                }>
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',width:'100%'}}/>
          <View style={{width:'100%',height:parseInt(600*w),flexDirection:'row'}}>
              <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',height:'100%'}}/>
              <View style={{width:parseInt(600*w),height:'100%'}}>
                <Animated.View style={{width:parseInt(600*w),height:1,backgroundColor:'green',position:'absolute',top:this.state.fadeAnim,left:0}}></Animated.View>
                <View style={{width:parseInt(600*w),height:'100%',borderWidth:1,borderColor:'green'}}></View>
                <View style={{width:parseInt(50*w),height:parseInt(50*w),borderTopWidth:5,borderTopColor:'green',borderLeftWidth:5,borderLeftColor:'green',position:'absolute',top:0,left:0}}></View>
                <View style={{width:parseInt(50*w),height:parseInt(50*w),borderTopWidth:5,borderTopColor:'green',borderRightWidth:5,borderRightColor:'green',position:'absolute',top:0,right:0}}></View>
                <View style={{width:parseInt(50*w),height:parseInt(50*w),borderLeftWidth:5,borderLeftColor:'green',borderBottomWidth:5,borderBottomColor:'green',position:'absolute',bottom:0,left:0}}></View>
                <View style={{width:parseInt(50*w),height:parseInt(50*w),borderRightWidth:5,borderRightColor:'green',borderBottomWidth:5,borderBottomColor:'green',position:'absolute',bottom:0,right:0}}></View>
              </View>
              <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',height:'100%'}}/>
          </View>
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',width:'100%'}}/>
        </Camera>
      </View>
      );
   }
   barcodeReceived(e) {

        if (e.data !== this.transCode) {
            Vibration.vibrate([0, 500, 200, 500]);
            this.transCode = e.data; // 放在this上，防止触发多次，setstate有延时
            this.props.navigation.navigate('Detail', {name: e.data,type:0})
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default Qrcode;