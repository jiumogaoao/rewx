import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
   StyleSheet,
   Dimensions,
   StatusBar,
   TouchableOpacity
} from 'react-native';
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map'
import Icon from 'react-native-vector-icons-iconfont/IconFont';
class MapV extends React.Component {

   constructor() {
    super();

    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 113.981718,
        latitude: 22.542449
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [{
        longitude: 113.981718,
        latitude: 22.542449,
        title: "Window of the world"
      },{
        longitude: 113.995516,
        latitude: 22.537642,
        title: ""
      }]
    };

    this.styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    position:'absolute',
    bottom:parseInt(50*w),
    left:0,
    width:'100%'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
  	width:'100%',
    flex:1
  },
  point:{
            width:parseInt(100*w),
            height:parseInt(100*w),
            borderRadius:parseInt(100*w),
            backgroundColor:'#fff'
          },
  icon:{
            fontSize:parseInt(40*w),
            lineHeight:parseInt(60*w),
            height:parseInt(70*w),
            textAlign:'center'
          }
});
  }

  componentDidMount() {
  	Geolocation.getCurrentPosition()
              .then(data => {
                this.setState({
                  zoom: 15,
                  marker: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    title: '你所在的位置'
                  },
                  center: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    rand: Math.random()
                  }
                });
              })
              .catch(e =>{
                console.warn(e, 'error');
              })
  }

   render() {
      return (
         <View style={this.styles.container}>
         <StatusBar backgroundColor="#000"/>
        <MapView 
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          style={this.styles.map}
          onMarkerClick={(e) => {
          }}
          onMapClick={(e) => {
          	this.setState({marker:{latitude: e.latitude,
                    longitude: e.longitude,
                    title: '你所在的位置'}})
          }}
          onMapStatusChange={(e) => {
          	this.state.center={latitude:e.target.latitude,longitude:e.target.longitude};
          }}
        >
        </MapView>

        <View style={this.styles.row}>
        	<View style={this.styles.point}><TouchableOpacity  onPressIn={()=>{this.props.navigation.state.params.callback({marker:this.state.marker,center:this.state.center});
            this.props.navigation.goBack();}}><Icon name="tianjia" style={this.styles.icon}/></TouchableOpacity></View>
        </View>


      </View>
      );
   }
}


export default MapV;