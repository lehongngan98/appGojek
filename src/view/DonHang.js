import { View ,SafeAreaView,StatusBar,useWindowDimensions,StyleSheet,Text} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function LichSu() {
    return (
      <View style={{ flex: 1 ,flexDirection:'row'}}>
        <View style={{width:100,height:40,backgroundColor:'#eee',borderWidth:0.2,borderRadius:50,justifyContent:'center',alignItems:'center',marginLeft:20,marginTop:20}}>
            <Text style={{fontSize:20,fontWeight:500}}>Lịch sử</Text>    
        </View>  
        <View style={{width:150,height:40,backgroundColor:'#eee',borderWidth:0.2,borderRadius:50,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginLeft:20,marginTop:20}}>
            <Text style={{fontSize:20,fontWeight:500}}>Trạng thái</Text> 
            <AntDesign name="down" size={24} color="black" />   
        </View>
      </View>
    );
  }
  
  function DonHangDatTruoc() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  function DatTruoc() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
const Tab = createMaterialTopTabNavigator();
export default function DonHang() {


  return (
    <SafeAreaView style={{flex:1 ,backgroundColor:'white'}}>
        <StatusBar style='light'/>
        {/* Component Header */}
        <View style={{height:'8%',width:'100%',borderBottomWidth:0.2,justifyContent:'center'}}>
            <Text style={{fontSize:30,marginLeft:20,fontWeight:600}}>Hộp thư</Text>
        </View>
        <Tab.Navigator>
            <Tab.Screen name="Lịch sử" component={LichSu} />
            <Tab.Screen name="Đơn hàng" component={DonHangDatTruoc} />
            <Tab.Screen name="Đặt trước" component={DatTruoc} />
        </Tab.Navigator>

    </SafeAreaView>
  
  );
}
