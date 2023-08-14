import { View, Text ,StatusBar,TextInput,ScrollView,Image} from 'react-native'
import React from 'react'
import { Feather,FontAwesome } from '@expo/vector-icons';

export default function Home() {
  return (
    
    <View style={{flex:1 ,flexDirection:'column'}}>
      <StatusBar style='light'/>
      {/* Component Header */}
      <View style={{height:'15%',width:'100%',backgroundColor:'green',flexDirection:'row'}}>
         {/* Search */}
        <View style={{width:'70%',height:'100%'}}>
          <View style={{backgroundColor:'white',marginLeft:10,marginTop:'25%',borderRadius:100,padding:10,flexDirection:'row',alignItems:'center'}}>
            <Feather name="search" size={24} color="black" />
            <Text style={{fontSize:15,color:'gray'}}>Tìm dịch vụ, món ngon, địa điểm</Text>
          </View>
        </View>
        {/* User */}
        <View style={{width:'30%',height:'100%',alignItems:'center',marginTop:'18%'}}>
          <View style={{width:'40%',height:'35%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:100}}>
              <FontAwesome name="user" size={24} color="black" />
          </View>
        </View>
      </View>

      {/* Component Body */}
      <View style={{height:'85%',width:'100%',flexDirection:'column'}}>
        <ScrollView style={{}}>
          {/* Component service */}
          <View style={{height:100,width:'100%',backgroundColor:'pink',flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              {/* Image goride */}
              <View style={{width:'20%',height:'70%',justifyContent:'center',alignItems:'center',padding:5}}>
                <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/bike.png')}/>
                <Text style={{fontSize:15,fontWeight:'600'}}>GoBike</Text>
              </View>

               {/* Image gocar */}
               <View style={{width:'20%',height:'70%',justifyContent:'center',alignItems:'center',padding:5}}>
                <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/car.png')}/>
                <Text style={{fontSize:15,fontWeight:'600'}}>GoCar</Text>
              </View>

               {/* Image gofood */}
               <View style={{width:'20%',height:'70%',justifyContent:'center',alignItems:'center',padding:5}}>
                <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/menu.png')}/>
                <Text style={{fontSize:15,fontWeight:'600'}}>GoFood</Text>
              </View>

               {/* Image gosend */}
               <View style={{width:'20%',height:'70%',justifyContent:'center',alignItems:'center',padding:5}}>
                <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/gosend.png')}/>
                <Text style={{fontSize:15,fontWeight:'600'}}>GoSend</Text>
              </View>
          </View>
          
        </ScrollView>
      </View>


    </View>
    
  )
}

{/* <TextInput placeholder='Search'style={{backgroundColor:'white',marginLeft:10,marginTop:'30%',borderRadius:100,padding:10}}/> */}