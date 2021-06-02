import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View ,Text,ImageBackground} from 'react-native';
import AddButton from '../animatedButton/animatedButton';

const EmptyScreen = () => {
  return (
  <View style={{display:'flex',alignItems:'center',justifyContent:'center',flex:1,backgroundColor:'pink' }}>
<Text>Floating Button Example</Text>
  </View>




  )
}

export default EmptyScreen
