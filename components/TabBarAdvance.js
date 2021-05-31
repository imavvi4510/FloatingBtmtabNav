import React from 'react'
import {StyleSheet, TouchableOpacity, View } from 'react-native'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import  TabBg  from '../svg/TabBg';
import AddButton from '../animatedButton/animatedButton';
const TabBarAdvance = (bgColor,pros) => {
  return (
    <View
    style={styles.container}
    pointerEvents="box-none"
  >
    <TabBg
      color={bgColor}
      style={styles.background}
    />
    {/* <View style={styles.button}>
      <AddButton/>
    </View> */}



  </View>
  )
}

export default TabBarAdvance
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center'
  },
  background: {
    position: 'absolute',

  },
  button: {
    top: -80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,

  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB'
  }
});