import { View, Text ,Image,StyleSheet} from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'

const DatGojek = () => {
  return (
    <View style={styles.container}>
        <View style={{width:'90%',height:300,backgroundColor:'yellow',borderRadius:30}}>
            <MapView style={styles.map} />
        </View>
        
      

    </View>
  )
}

export default DatGojek

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        alignItems:'center',
        
    },
    map: {
        width: '100%',
        height: '100%',
      },
})