import { View, Text ,Image,StyleSheet, Button} from 'react-native'
import MapView ,    {Marker}from 'react-native-maps';
import React ,{useEffect,useState}from 'react'
import * as Location from 'expo-location';


const DatGojek = () => {
  const [region, setRegion] = useState({ })

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    setRegion({

        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
  }

    useEffect(() => {
        userLocation()
    }, [  ])


  return (
    <View style={styles.container}>
        <View style={{width:'100%',height:300,borderRadius:30}}>
          
            <MapView style={styles.map} 
                region={region}
            >
                <Marker coordinate={region} />
            </MapView>
            
        </View>        
    </View>
  )
}

export default DatGojek

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    map: {
        width: '100%',
        height: '100%',
      },
})