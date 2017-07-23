import React from 'react';
import {
   View,
   Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration
} from 'react-native';
import Camera from 'react-native-camera';

class Qrcode extends React.Component {

   constructor(props) {
        super(props);
        this.camera = null;
        this.state = {

        }
        this.transCode='';
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
          <View style={{width:'100%',height:parseInt(400*w),flexDirection:'row'}}>
              <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',height:'100%'}}/>
              <View style={{width:parseInt(400*w),height:'100%'}}/>
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