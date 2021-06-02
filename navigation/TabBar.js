import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import  EmptyScreen  from '../screens/EmptyScreen';

import AddButton from '../animatedButton/animatedButton';

const BottomBar = createBottomTabNavigator();


const TabBar = (barColor) => {
  return (
    <NavigationContainer>
    <BottomBar.Navigator
      tabBar={(props) => (

    <View style={{position:'absolute', left: 0,right:0, bottom:0}}>
    <BottomTabBar
            {...props}
    />
<View style={{position:'absolute', left:'50%',top:'30%'}}>
<AddButton/>
</View>

    </View>


      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor
        }
      }}
    >
      <BottomBar.Screen
        name="Home"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              size={24}
              color={color}
            />
          )
        }}
      />
      <BottomBar.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="user"
              size={24}
              color={color}
            />
          )
        }}
      />

      <BottomBar.Screen
        name="Messages"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="wechat"
              size={24}
              color={color}
            />
          )
        }}
      />
      <BottomBar.Screen
        name="Settings"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="gear"
              size={24}
              color={color}
            />
          )
        }}
      />
    </BottomBar.Navigator>
  </NavigationContainer>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34
  }
});