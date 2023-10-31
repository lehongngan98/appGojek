import { View, Text ,SafeAreaView,StatusBar} from 'react-native'
import React from 'react'

export default function DonHang() {
  return (
    <SafeAreaView style={{flex:1 ,flexDirection:'column'}}>
      <StatusBar style='light'/>
      {/* Component Header */}
      <View style={{height:'8%',width:'100%',borderBottomWidth:0.2,justifyContent:'center'}}>
        <Text style={{fontSize:30,marginLeft:20,fontWeight:600}}>Đơn hàng</Text>
      </View>
    </SafeAreaView>
  )
}