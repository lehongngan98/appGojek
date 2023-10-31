import {StatusBar ,View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { Feather,FontAwesome ,FontAwesome5,AntDesign,Entypo,MaterialIcons,Ionicons} from '@expo/vector-icons';

export default function UuDai() {
  return (
    <SafeAreaView style={{flex:1 ,flexDirection:'column'}}>
      <StatusBar style='light'/>
      {/* Component Header */}
      <View style={{height:'8%',width:'100%',borderBottomWidth:0.2,justifyContent:'center'}}>
        <Text style={{fontSize:30,marginLeft:20,fontWeight:600}}>Ưu đãi</Text>
      </View>

      <View style={{width:'100%',height:100,marginTop:20,flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{ backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 5,borderRadius:10 }}elevation={5} >
            <View style={{width:120,height:100,}}  >
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}} >
                <Text style={{fontSize:20}}>0</Text>
                <AntDesign name="right" size={20} color="black" />
              </View>
              <View>
                <Text style={{fontSize:16,marginTop:10,marginHorizontal:10,fontWeight:600}}>Đơn hàng</Text>
              </View>
              <View >
                <Text style={{fontSize:16,marginTop:10,marginHorizontal:10}}>Sẳn sàng</Text>
              </View>
              <View style={{borderBottomColor:'orange',borderBottomWidth:5,marginTop:5,width:'80%',marginHorizontal:10,borderRadius:100}}/>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 5,borderRadius:10 }}elevation={5} >
            <View style={{width:120,height:100}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}} >
                <Text style={{fontSize:20}}>0</Text>
                <AntDesign name="right" size={20} color="black" />
              </View>
              <View>
                <Text style={{fontSize:16,marginTop:10,marginHorizontal:10,fontWeight:600}}>Gói dịch vụ</Text>
              </View>
              <View >
                <Text style={{fontSize:16,marginTop:10,marginHorizontal:10}}>Kịch hoạt</Text>
              </View>
              <View style={{borderBottomColor:'purple',borderBottomWidth:5,marginTop:5,width:'80%',marginHorizontal:10,borderRadius:100}}/>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 5,borderRadius:10 }}elevation={5} >
            <View style={{width:120,height:100,}}  >
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}} >
                <Text style={{fontSize:20}}>0</Text>
                <AntDesign name="right" size={20} color="black" />
              </View>
              <View>
                <Text style={{fontSize:16,marginTop:10,marginHorizontal:10,fontWeight:600}}>Nhiệm vụ</Text>
              </View>
              <View >
                <Text style={{fontSize:16,marginTop:10,marginHorizontal:10}}>Xử lí ngay</Text>
              </View>
              <View style={{borderBottomColor:'green',borderBottomWidth:5,marginTop:5,width:'80%',marginHorizontal:10,borderRadius:100}}/>
            </View>
          </View>
      </View>

      <View style={{width:'95%',height:40,marginTop:20,marginLeft:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:0.2,borderRadius:60,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
          <AntDesign name="gift" size={24} color={ "orange"} />
          <Text style={{marginLeft:10,fontWeight:500,fontSize:16}}>Bạn có mã khuyến mãi?</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </View>

      
      <Text style={{fontSize:30,fontWeight:500,marginTop:30,marginLeft:10}}>Ưu đãi hot phải đặt ngay</Text>
     
      <View style={{width:'100%',height:50,marginTop:20,flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{width:80,height:50,justifyContent:'center',alignItems:'center',borderRadius:30,borderWidth:0.2,backgroundColor:'white'}}>
          <Text style={{fontSize:16,fontWeight:500}}>GoCar</Text>
        </View>
        <View style={{width:80,height:50,justifyContent:'center',alignItems:'center',borderRadius:30,borderWidth:0.2,backgroundColor:'white'}}>
          <Text style={{fontSize:16,fontWeight:500}}>GoFood</Text>
        </View>
        <View style={{width:80,height:50,justifyContent:'center',alignItems:'center',borderRadius:30,borderWidth:0.2,backgroundColor:'white'}}>
          <Text style={{fontSize:16,fontWeight:500}}>GoRide</Text>
        </View>
        <View style={{width:80,height:50,justifyContent:'center',alignItems:'center',borderRadius:30,borderWidth:0.2,backgroundColor:'white'}}>
          <Text style={{fontSize:16,fontWeight:500}}>GoSend</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}